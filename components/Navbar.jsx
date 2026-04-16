"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-footer.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-4 z-5 mx-6 rounded-2xl border border-white/20 text-white shadow-md" style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={80} height={80} />
          <span className="font-bold text-lg font-geist-sans">Certificate System</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/verify" className="hover:text-orange-400">Verify</Link>
          <Link href="/about" className="hover:text-orange-400">About</Link>
          <Link href="/contact" className="hover:text-orange-400">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-[#1f1212] text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/verify" onClick={() => setOpen(false)}>Verify</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;