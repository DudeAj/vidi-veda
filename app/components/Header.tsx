"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";

export default function Header() {
  const handleMenuClick = () => {
    console.log("Menu Clicked");
  };
  return (
    <header className="bg-white shadow-md">
      <div className="bg-orange-500 px-5 md:px-20 py-3 flex justify-between items-center">
        <div className="text-gray-600 flex items-center gap-2">
          <FaWhatsapp size={28} color="#25d366" />
          <a href="tel:+919634347076" className="text-white text-lg font-bold">
            +91 9634347076
          </a>
        </div>
        <div className="md:flex hidden gap-3 items-center">
          <Link
            href="#"
            className="text-orange-500 font-semibold px-5 py-1 rounded-full bg-white"
          >
            Sign Up
          </Link>
          <Link
            href="#"
            className="text-white border-2 font-semibold px-5 py-1 rounded-full "
          >
            Sign In
          </Link>
        </div>
      </div>
      <div className="container pb-4 md:py-0 mx-auto flex-col md:flex-row gap-4 px-4 flex items-center justify-between">
        <div className="flex w-full md:w-auto items-center justify-between">
          <img
            src="/img/logo.png"
            alt="VidiVeda Logo"
            className="h-20 w-auto"
          />
          <div className="flex md:hidden justify-center items-center">
            <span className="cursor-pointer" onClick={handleMenuClick}>
              <RiMenu5Line size={32} />
            </span>
          </div>
          {/* <span className="ml-2 text-xl font-bold">VidiVeda</span> */}
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-5 text-black text-lg font-light">
            <li className="relative group">
              <Link href="#" className="hover:text-orange-500">
                Find a Tutor
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="#" className="hover:text-orange-500">
                Services
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="#" className="hover:text-orange-500">
                Cities We Serve
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="#" className="hover:text-orange-500">
                Know More
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Join as a Tutor
          </Link>
          <Link
            href="#"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Hire a Tutor
          </Link>
        </div>
      </div>
    </header>
  );
}
