"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", link: "#home" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certification" },
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
    <header className="fixed top-0 w-full z-50 backdrop-blur flex justify-start md:justify-center items-center">
      <div className="flex justify-between items-center p-4 w-full md:w-auto">
        <button
          className="text-white md:hidden focus:outline-none order-first"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav
          className={`flex flex-col md:flex-row md:gap-6 absolute md:relative md:bg-transparent w-full md:w-auto left-0 md:p-0 transition-transform gap-1 p-4 border border-white/15 rounded-lg bg-white/10 backdrop-blur ${
            isOpen ? "top-16" : "top-[-490px]"
          } md:top-0 z-50`}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="nav-item block text-white px-6 py-3 rounded-full hover:bg-gradient-to-r from-emerald-300 to-sky-400 transition-all"
              onClick={(e) => {
                if (item.isDownload) {
                  e.preventDefault();
                  window.location.href = item.link;
                } else {
                  toggleMenu();
                }
              }}
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
