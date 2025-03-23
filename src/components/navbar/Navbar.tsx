import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuBurger from "./MenuBurger";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4">

      <div className="flex md:hidden">
        <MenuBurger />
      </div>

      <div className="text-lg font-bold hover:text-[#D9CAB3] duration-200 cursor-pointer">
        <h1>
          <Link href="/home"><Image src="/E-commerce.png" alt="Logo" width={80} height={50} className="md:w-36 md:h-20 " /></Link>
        </h1>
      </div>

      <nav className="items-center hidden space-x-6 font-semibold sm:flex">
        <ul className="flex space-x-4">
          <li className="border-b-2  hover:text-[#555050c0] duration-200 cursor-pointer ">
            <Link href="/home">Home</Link>
          </li>
          <li className="border-b-2  hover:text-[#555050c0] duration-200 cursor-pointer">
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
