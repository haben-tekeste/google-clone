import React from "react";
import Link from "next/link";

export default function ImageSearchResults({ results }) {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items.map((item) => (
          <div key={item.link} className="mb-8">
            <div className="group">
              <Link href={item.image.contextLink} >
                <img className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow" src={item.link} alt="result.title" />
              </Link>
              <Link href={item.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">{item.title}</h2>
              </Link>
              <Link href={item.image.contextLink}>
                <p className="group-hover:underline text-gray-600">{item.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
