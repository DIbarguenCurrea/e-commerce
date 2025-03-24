"use client";
import React, { useState } from "react";
import Link from "next/link";
import { categoriesToPreLoad } from "@/app/utils/preLoadData";

function CategoryMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-b-2 hover:text-[#555050c0] duration-200 cursor-pointer px-4 py-2"
      >
        Categories
      </button>

      {/* Mega Menú expandido */}
      <div className={`absolute left-0 right-0 mx-auto w-[90%] max-w-5xl mt-10 bg-white border border-gray-200 rounded-lg shadow-lg transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
          {categoriesToPreLoad.map((category, index) => (
            <Link
              key={index}
              href={`/products?category=${category.name}`}
              className="block px-4 py-2 text-center rounded-md hover:bg-gray-100"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMegaMenu;
