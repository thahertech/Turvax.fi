import { createClient } from "@supabase/supabase-js";

const getLevenshteinDistance = (a: string, b: string): number => {
  const tmp: number[][] = [];
  for (let i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1, // deletion
        tmp[i][j - 1] + 1, // insertion
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // substitution
      );
    }
  }
  return tmp[a.length][b.length];
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Company {
  id: string;
  name: string;
  location: string[];  // Updated to handle the array of locations
  features: string[];
  score?: number;
}

interface MatchCriteria {
  location: string;
  features: string[];
}
export async function getBestCompanies(criteria: MatchCriteria): Promise<Company[]> {
  try {
    const { data, error } = await supabase.from("companies").select("*");

    if (error) throw error;

    const calculateLocationMatch = (companyLocation: string[]): boolean => {
      return companyLocation.some((loc: string) => {
        const locationDistance = getLevenshteinDistance(loc.toLowerCase(), criteria.location.toLowerCase());
        console.log(`Distance between ${loc} and ${criteria.location}: ${locationDistance}`);
        return locationDistance <= 1;
      });
    };

    let matchedCompanies: Company[] = (data || []).filter((company) => {
      const locationMatch = calculateLocationMatch(company.location);
      console.log("Company Features:", company.features);
      console.log("Criteria Features:", criteria.features);
      const featureMatch = criteria.features.every(feature => company.features.includes(feature));
      console.log(`Feature Match for ${company.name}: ${featureMatch}`);
      console.log(`Comparing features for ${company.name}: ${company.features} with ${criteria.features} - Feature Match: ${featureMatch}`);
      return locationMatch && featureMatch;
    });

    matchedCompanies = matchedCompanies.map((company) => ({
      ...company,
      score: (
        (calculateLocationMatch(company.location) ? 3 : 0) + 
        criteria.features.filter(feature => company.features.includes(feature)).length
      ),
    }));

    // Sorting by score in descending order
    matchedCompanies.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

    console.log("Matched Companies:", matchedCompanies);

    // Return top 3 companies with the highest score
    return matchedCompanies.slice(0, 3);
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}