"use client";
import React, { useState } from "react";
import Link from "next/link";
import { categoriesToPreLoad } from "@/app/utils/preLoadData";

function CategoryMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative md:hidden ">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-[#555050c0] duration-200 cursor-pointer"
      >
        Categories
      </button>

      {/* Mega Menú expandido */}
      <div className={`fixed top-14 left-2 right-0 w-[96%]  bg-white border-gray-200 border-2 rounded-lg shadow-lg transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="grid grid-cols-3 gap-2 p-2 md:hidden">
          {categoriesToPreLoad.map((category, index) => (
            <Link
              key={index}
              href={`/category=${category.name}`}
              className="block px-4 py-2 text-sm text-center rounded-md hover:bg-gray-100 hover:text-[#555050c0]"
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
