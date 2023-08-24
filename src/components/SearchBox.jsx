"use client";

import { useState } from "react";

import { useSearchParams, useRouter } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  const params = useSearchParams();
  const router = useRouter();

  const searchQuery = params.get("searchTerm");
  const [search, setSearch] = useState(searchQuery || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    router.push(`/search/web?searchTerm=${search}`);
  };
  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="w-full focus:outline-none "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setSearch("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={submitHandler}
      />
    </form>
  );
}
