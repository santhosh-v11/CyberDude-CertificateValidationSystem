import React from "react";
import logo from "../assets/images/cyberdude_networks_logo.jpg";

const Navbar = () => {
  return (
    <>
      <header className="bg-primary fixed w-full backdrop-blur-md z-50">
        <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2">
          <div className="h-18 w-25 overflow-hidden flex items-center">
            <img src={logo} className="cursor-pointer object-fill" alt="logo" />
          </div>
          <h1 className="text-secondary font-bold">Certificate Validation</h1>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
