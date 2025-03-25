"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import CategoryMegaMenu from "../category/categoryMegaMenu/CategoryMegaMenu";
import { usePathname } from "next/navigation";


function Navbar() {

  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-2 py-4 md:px-8 md:py-6 ">

      <div className="text-lg font-bold hover:text-[#D9CAB3] duration-200 cursor-pointer">
        <h1>
          <Link href="/"><Image src="/E-commerce.png" alt="Logo" width={80} height={50} className="md:w-36 md:h-20 " /></Link>
        </h1>
      </div>

      <nav className="items-center space-x-6 font-semibold sm:flex">
        <ul className="flex space-x-4">
          <li className={`hover:text-[#555050c0] duration-200 cursor-pointer ${pathname === "/" ? "border-b-2" : ""}`}  >
            <Link href="/">Home</Link>
          </li>
          <li > <CategoryMegaMenu /> </li>
          <li className={`hover:text-[#555050c0] duration-200 cursor-pointer ${pathname.startsWith("/products") ? "border-b-2" : ""}`}>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>


      <div>
        <Link href="/cart">
          <HiOutlineShoppingCart className="p-1 m-2 w-7 h-7 md:w-9 md:h-9 text-[#CC2C24]" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

