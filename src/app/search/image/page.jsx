import React from "react";

import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";

export default async function ImageSearchPage({
  searchParams: { searchTerm, start },
}) {
  const startIndex = start || "1";
  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}&searchType=image
  `);
  if (!response.ok) throw new Error("Something went wrong!");
  const data = await response.json();
  if (!data.items) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or check spelling {""}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{data.items && <ImageSearchResults results={data} />}</div>;
}
