import React from "react";
import { twMerge } from "tailwind-merge";

import { Category } from "../components/type";

interface SidebarProps {
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const Sidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: SidebarProps) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 sm:p-8 md:p-20">
      <div className="flex sm:overflow-x-auto sm:flex-nowrap md:flex-wrap md:justify-center gap-2 whitespace-nowrap md:whitespace-normal">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={twMerge(
              "py-2 px-4 rounded-xl text-center font-bold",
              selectedCategory === category
                ? "bg-gray-800 text-emerald-500"
                : "text-gray-400 hover:text-gray-300"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
