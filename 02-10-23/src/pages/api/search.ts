// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const searchType = req.headers["search-type"];
    const searchValue = req.headers["search-value"];

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?${searchType}=${searchValue}`
      );
      const data = await response.json();

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Network Error" });
    }
  }
  res.status(300).json({ message: "Method not allowed" });
}
