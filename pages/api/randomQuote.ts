import { NextApiRequest, NextApiResponse } from "next";

import allQuotes from "../../quotes.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const author = <string>req.query.author;
  let quotes = allQuotes;

  if (author) {
    quotes = quotes.filter(quote =>
      quote.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (!quotes.length) {
    quotes = allQuotes.filter(
      quote => quote.author.toLowerCase() === "unknown"
    );
  }
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(quote);
};
