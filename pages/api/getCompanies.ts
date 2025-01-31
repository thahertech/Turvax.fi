// import type { NextApiRequest, NextApiResponse } from "next";
// import { getBestCompanies } from "../../components/serviceComparison";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     const criteria = req.body;
//     const bestCompanies = await getBestCompanies(criteria);
//     res.status(200).json(bestCompanies);
//   } catch (error) {
//     res.status(500).json({ "Server Error" });
//   }
// }