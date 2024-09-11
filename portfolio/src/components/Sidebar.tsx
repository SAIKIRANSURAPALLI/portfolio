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
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-20">
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={twMerge(
              "py-3 px-6 rounded-xl text-center font-bold",
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300",
              "hover:bg-blue-700 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
