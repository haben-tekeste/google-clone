"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    if (!response) return;
    router.push(`/search/web?searchTerm=${data[0]}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex w-full mx-auto mt-5 max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl md:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          name=""
          id=""
          className="flex-grow focus: outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm: space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={submitHandler} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="loading.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I'm feeling lucky"
          )}
        </button>
      </div>
    </>
  );
}
