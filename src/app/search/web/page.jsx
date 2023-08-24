import React from "react";

import Link from "next/link";

export default async function WebSearchPage({ searchParams: { searchTerm } }) {
  console.log(searchTerm);
  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}
  `);
  if (!response.ok) throw new Error("Something went wrong!");
  const { items } = await response.json();
  if (!items) {
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
  return (
    <div>
      {items && items.map((item) => <h1 key={item.title}>{item.title}</h1>)}
    </div>
  );
}
