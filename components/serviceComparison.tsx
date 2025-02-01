import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Company {
  id: string;
  name: string;
  location: string;
  // min_space_size: number;
  // max_space_size: number;
  // supported_house_types: string[];
  // available_dates: string[];
  features: string[];
  score?: number;
}

interface MatchCriteria {
  location: string;
  // spaceSize: number;
  // houseType: string;
  // urgency: string;
  features: string[];
}

export async function getBestCompanies(criteria: MatchCriteria): Promise<Company[]> {
  try {

    const { data, error } = await supabase.from("companies").select("*");

    if (error) throw error;

    let matchedCompanies: Company[] = (data || []).filter((company) =>
      company.location.includes(criteria.location) &&
      // company.min_space_size <= criteria.spaceSize &&
      // company.max_space_size >= criteria.spaceSize &&
      // company.supported_house_types.includes(criteria.houseType) &&
      // company.available_dates.includes(criteria.urgency) &&
      criteria.features.every(feature => company.features.includes(feature))
    );

    matchedCompanies = matchedCompanies.map((company) => ({
      ...company,
      score: (
        (company.location.includes(criteria.location) ? 3 : 0) +
        // (company.min_space_size <= criteria.spaceSize && company.max_space_size >= criteria.spaceSize ? 2 : 0) +
        // (company.supported_house_types.includes(criteria.houseType) ? 2 : 0) +
        // (company.available_dates.includes(criteria.urgency) ? 1 : 0) +
        criteria.features.filter(feature => company.features.includes(feature)).length
      ),
    }));

    matchedCompanies.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

    return matchedCompanies.slice(0, 3);
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}