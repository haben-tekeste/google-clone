import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  return (
    <>
      <form className="flex w-full mx-auto mt-5 max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl md:max-w-2xl">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" name="" id="" className="flex-grow focus: outline-none" />
        <BsFillMicFill className="text-lg"/>
      </form>
    </>
  );
}
