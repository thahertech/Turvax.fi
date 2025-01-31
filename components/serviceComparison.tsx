import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Define company type
interface Company {
  id: string;
  name: string;
  service_areas: string[];
  min_space_size: number;
  max_space_size: number;
  supported_house_types: string[];
  available_dates: string[];
  supported_features: string[];
  score?: number;
}

// Define input criteria
interface MatchCriteria {
  location: string;
  spaceSize: number;
  houseType: string;
  urgency: string;
  features: string[];
}

export async function getBestCompanies(criteria: MatchCriteria): Promise<Company[]> {
  try {
    const { data: companies, error } = await supabase.from("companies").select("*");

    if (error) throw error;

    // Filter matching companies
    let matchedCompanies: Company[] = companies.filter((company: Company) =>
      company.service_areas.includes(criteria.location) &&
      company.min_space_size <= criteria.spaceSize &&
      company.max_space_size >= criteria.spaceSize &&
      company.supported_house_types.includes(criteria.houseType) &&
      company.available_dates.includes(criteria.urgency) &&
      criteria.features.every(feature => company.supported_features.includes(feature))
    );

    // Rank companies with scoring
    matchedCompanies = matchedCompanies.map(company => ({
      ...company,
      score: (
        (company.service_areas.includes(criteria.location) ? 3 : 0) +
        (company.min_space_size <= criteria.spaceSize && company.max_space_size >= criteria.spaceSize ? 2 : 0) +
        (company.supported_house_types.includes(criteria.houseType) ? 2 : 0) +
        (company.available_dates.includes(criteria.urgency) ? 1 : 0) +
        criteria.features.filter(feature => company.supported_features.includes(feature)).length
      )
    }));

    // Sort by score (higher is better)
    matchedCompanies.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

    // Select top 3 companies
    return matchedCompanies.slice(0, 3);
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}