"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
const session=  useSession()
  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contact" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <>
      <nav className=" border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
       
            <span className="self-center  inline-block  text-xl font-semibold whitespace-nowrap">
            The Future Code

            </span>
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <CiMenuBurger size={30} />
            </button>
          </div>

          <div


            className={`hidden w-full md:block md:w-auto `}
                    >

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <ThemeSwitch />
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="block py-2 px-4  hover:bg-gray-100 rounded md:hover:bg-transparent hover:text-green-500 md:p-0 "
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
                  <li >
                    
                  
              {session.status ==="authenticated" && <button className="bg-green-500 px-3  hover:bg-green-700 rounded-2xl text-white" onClick={signOut}>Logout</button>}
                    </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${open ? "block" : "hidden"}`}>
          <ul className="font-medium flex flex-col justify-center items-center space-y-4 p-4 mt-4 border  h-screen border-gray-100 rounded-lg bg-gray-50">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={() => setOpen(false)}
                  href={link.url}
                  className="block py-2 text-xl  px-4  text-gray-700 hover:bg-gray-100 rounded"
                >
                  {link.title}
                </Link>
              </li>
            ))}
        
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
