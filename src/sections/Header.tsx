"use client";

import React, { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", link: "#home" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certification" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/resume" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-10 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:justify-center py-4 border border-white/15 rounded-lg bg-transparent">
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white/10 md:bg-transparent backdrop-blur md:backdrop-blur-none`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="block text-white px-4 py-2 md:py-0 hover:bg-gradient-to-r from-emerald-300 to-sky-400 transition-all rounded-full"
                    onClick={() => setIsOpen(false)}
                    target={item.name === "Resume" ? "_blank" : undefined}
                    rel={
                      item.name === "Resume" ? "noopener noreferrer" : undefined
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
