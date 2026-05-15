"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-footer.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-4 z-5 mx-6 rounded-2xl border border-white/20 text-white shadow-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={150} height={150} />
          
        </Link>

       
      </div>

      {/* Mobile Menu */}
      
    </nav>
  );
};

export default Navbar;
