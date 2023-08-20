import React from 'react'
import Link from 'next/link'
import {TbGridDots} from "react-icons/tb"

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className="flex space-x-4 items-center">
            <Link href="#" className="hover:underline">
                Gmail
            </Link>
            <Link href="#" className="hover:underline">
                Images
            </Link>
            <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
            <button className="bg-blue-500 text-white py-2 px-6 font-medium rounded-md hover:brightness-105 hover:shadow-md hover:transition-shadow">Sign in</button>
        </div>
    </header>
  )
}
