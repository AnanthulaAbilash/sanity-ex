import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <header className="bg-[#4682B4]">
      <div className="container mx-auto flex justify-between border-b-4 border-white">
        <nav className="flex mr-auto">
          <NavLink
            to="/"
            exact
            activeClassName="text-brown"
            className="inflex-flex items-center px-11 py-5 mr-4 text-white hover:text-gray-300 text-4xl font-bold mainfont tracking-widest xsm:!text-[25px] xxsm:!leading-[1.75rem]"
          >
            Asha's Boutique
          </NavLink>
        </nav>
        <nav className="flex relative right-4 self-end">
          <NavLink
            to="/products"
            className="inflex-flex items-center px-4 pt-5 mb-8 mt-2 rounded text-gray-300 hover:text-white font-bold text-l"
            activeClassName="!bg-gray-300"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="inflex-flex items-center px-4 pt-5 mb-8 mt-2 rounded text-gray-300 hover:text-white font-bold"
            activeClassName="!bg-gray-300"
          >
            About
          </NavLink>
        </nav>
        <div className="relative mr-6 pl-2 flex self-center -top-0.5">
          <SocialIcon
            url=""
            target="_blank"
            fgColor="white"
            bgColor="gray"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

{
  [1, 2, 3].map((product, index) => {
    <span className="">
      <h3 className=""> The numbers are.. {product}</h3>
    </span>;
  });
}
