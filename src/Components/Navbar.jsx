import React from "react";
import logo from "../assets/images/cyberdude_networks_logo.jpg";

const Navbar = () => {
  return (
    <>
      <header className="bg-primary fixed w-full">
        <nav className="max-w-6xl mx-auto flex justify-between items-center  py-4">
          <div>
            <img src={logo} className="h-18 w-25 cursor-pointer" alt="logo" />
          </div>
          <h1></h1>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
