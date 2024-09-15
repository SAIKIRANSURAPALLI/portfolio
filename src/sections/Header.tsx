"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", link: "#home" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certification" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/surapallisaikiran", isDownload: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
              <span className="ml-2 text-xl font-bold text-white">
                Your Brand
              </span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white/10 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-base font-medium text-white hover:text-gray-300 transition-colors"
                onClick={
                  item.isDownload
                    ? (e) => {
                        e.preventDefault();
                        window.location.href = item.link;
                      }
                    : undefined
                }
                download={item.isDownload ? item.name : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-white/10 transition-colors"
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
        </div>
      </div>
    </header>
  );
}
