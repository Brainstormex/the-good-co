"use client";
import Link from "next/link";
import React from "react";
import { X, Github } from "lucide-react";

export default function MobileNav({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navItems,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  navItems: { label: string; href: string }[];
}) {
  return (
    <>
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center text-black p-4  shadow-md shadow-black/10">
            <h2 className="text-lg font-semibold ">The Good Co.</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation items */}
          <div className="flex-1 p-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg text-black hover:text-gray-500 transition-colors py-2 "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Made by developer section */}
          <div className="border-t border-gray-200 p-4 mt-auto">
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <p className="text-center">
                Made by{" "}
                <span className="font-medium text-gray-500">&lt;/Uzer&gt;</span>
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://github.com/Brainstormex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://uzersayed.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="text-gray-500 w-4 h-4">
                    <svg
                      viewBox="0 0 271 440"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                      fill="currentColor"
                    >
                      <path d="M143 65.5L61.1517 115.408L271 218L217 251.5L0.877441 150.767L1.00018 86L143 0.5L258.182 62V121.912L143 65.5Z" />
                      <path d="M271 251.5L217 282.5V310.5C217 319.955 214.905 329.318 210.834 338.053C206.764 346.789 200.797 354.726 193.276 361.412C185.754 368.098 176.825 373.401 166.997 377.019C157.17 380.638 146.637 382.5 136 382.5C125.363 382.5 114.83 380.638 105.003 377.019C95.1753 373.401 86.2459 368.098 78.7244 361.412C71.2028 354.726 65.2364 346.789 61.1658 338.053C57.0951 329.318 55 319.955 55 310.5V282.5L1 251.5V310.5C1 326.259 4.49188 341.863 11.2762 356.422C18.0606 370.981 28.0047 384.21 40.5406 395.353C53.0765 406.496 67.9588 415.335 84.3377 421.366C100.717 427.396 118.272 430.5 136 430.5C153.728 430.5 171.283 427.396 187.662 421.366C204.041 415.335 218.924 406.496 231.459 395.353C243.995 384.21 253.939 370.981 260.724 356.422C267.508 341.863 271 326.259 271 310.5V251.5Z" />
                    </svg>
                  </div>
                  <span>Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
