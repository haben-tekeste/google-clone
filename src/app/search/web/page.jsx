import React from "react";

export default async function WebSearchPage({ searchParams: { searchTerm } }) {
  console.log(searchTerm);
  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}
  `);
  const { items } = await response.json();
  return (
    <div>
      {items && items.map((item) => <h1 key={item.title}>{item.title}</h1>)}
    </div>
  );
}
