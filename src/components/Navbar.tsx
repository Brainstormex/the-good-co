"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Lab", href: "/lab" },
    { label: "OTT", href: "/ott" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4  py-4 flex justify-between items-center">
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-black hover:text-gray-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden text-black cursor-pointer">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer"
            >
              <Menu />
            </button>
          </div>
          <Link href="/">
            <div className="relative w-15 h-8 md:w-30 md:h-16 aspect-video">
              <Image
                src="/assets/logo/logo-removebg-preview.png"
                alt="Good Co Logo"
                fill
                className="ml-1"
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Mobile Navigation Sidebar */}
      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navItems={navItems}
      />
    </>
  );
}
