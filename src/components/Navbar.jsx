"use client";
import React  from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



export default function Navbar() {
  

const cartLength = useSelector((state) => state.cart.items.length);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 tracking-wide cursor-pointer text-2xl font-bold text-indigo-600 mb-4">
          ShopEase
        </div>

        <button className=" items-center gap-2 bg-indigo-900 text-white text-white px-4 py-2 rounded-[5px] shadow  transition">
       <NavLink to='/cart'> { cartLength } 🛒 Cart </NavLink> </button>
      </div>
      
    </nav>
  );
}
