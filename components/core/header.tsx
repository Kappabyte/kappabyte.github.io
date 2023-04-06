"use client"
import Link from "next/link";
import {useState} from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <nav className="flex items-center justify-between flex-wrap bg-surface0 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-bold text-3xl tracking-tight">Avery Keuben</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={()=>setIsOpen(!isOpen)}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "max-lg:h-full max-lg:visible" : "max-lg:h-0 max-lg:hidden"}`}>
            <div className={`text-sm lg:flex-grow`}>
                <a href={"/"}
                   className="block mt-4 lg:inline-block lg:mt-0 text-maroon hover:text-white mr-4">
                    Home
                </a>
                <a href={"/projects"}
                   className="block mt-4 lg:inline-block lg:mt-0 text-teal hover:text-white mr-4">
                    Projects
                </a>
                <a href={"/posts"}
                   className="block mt-4 lg:inline-block lg:mt-0 text-lavender hover:text-white">
                    Posts
                </a>
            </div>
            <div>
                <Link href="https://github.com/Kappabyte"
                   className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Github</Link>
            </div>
        </div>
    </nav>
}

export default Header;