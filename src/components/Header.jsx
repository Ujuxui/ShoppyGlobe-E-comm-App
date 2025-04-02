import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex flex-wrap justify-between items-center px-4 py-2 bg-blue-700">
        <div>
          <Link to="/home">
            <img
              src="\src\assets\app-logo.png"
              alt="app-logo"
              className="ml-12 h-20 w-44"
            />
          </Link>
        </div>
        <nav className="flex gap-12 justify-end items-center mr-12">
          <ul className="hidden md:flex gap-16 text-white">
            <li className="scale-95 hover:scale-105 hover:font-medium">
              <Link to="/home">Home</Link>
            </li>

            <li className="scale-95 hover:scale-105 hover:font-medium">
              <Link to="/products">Products</Link>
            </li>

            <li className="scale-95 hover:scale-105 hover:font-medium">
              Profile
            </li>
            <li className="scale-95 hover:scale-105 hover:font-medium">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </header>
    </>
  );
}

export default Header;
