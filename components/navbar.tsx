"use client";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
      <nav className="border-b">
        <div className="mx-auto max-w-7xl">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <Link
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <span>Worldowe</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 items-center">
                <Link href="/">
                  Home
                </Link>
                <Link href="/pickups">
                  Pick ups
                </Link>

              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden md:flex items-center gap-10">
                {/* <div className="hidden lg:flex items-center gap-2">
                  <a href="/login">Login</a>
                  <a href="/signup">Sign up</a>
                </div> */}
                <div>
                  <Link href="/login" className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Log in
                  </Link>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <FaApple className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
