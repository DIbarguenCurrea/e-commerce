"use client";
import React, { useState } from "react";
import "tailwind-hamburgers"; // Asegúrate de que está bien importado

const MenuBurger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={`tham tham-e-squeeze tham-w-6 ${isOpen ? "tham-active" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="tham tham-e-squeeze tham-w-6">
        <div className="tham-box">
          <div className="bg-black tham-inner" />
        </div>
      </div>
    </button>
  );
};

export default MenuBurger;
