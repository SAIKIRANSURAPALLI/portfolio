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
    <div className="bg-gray-900 rounded-xl p-20">
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={twMerge(
              "py-3 px-6 rounded-xl text-center font-bold",
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
