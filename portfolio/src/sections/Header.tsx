"use client";
import React, { useState } from "react";
import Link from "next/link";
import surapallisaikiran from "../assets/icons/aws 2.svg";
const navigation = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/surapallisaikiran", isDownload: true },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-10 backdrop-blur flex justify-center items-center">
      <div className="flex justify-between items-center p-4">
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav
          className={`flex flex-col md:flex-row md:gap-6 absolute md:relative md:bg-transparent w-full md:w-auto left-0 md:p-0 transition-transform gap-1 p-4 border border-white/15 rounded-full bg-white/10 backdrop-blur ${
            isOpen ? "top-16" : "top-[-200px]"
          } md:top-0`}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="nav-item block text-white px-6 py-3 rounded-full hover:bg-purple-600/80 transition-all"
              onClick={
                item.isDownload
                  ? () => (window.location.href = item.link)
                  : toggleMenu
              }
              download={item.isDownload ? item.name : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
