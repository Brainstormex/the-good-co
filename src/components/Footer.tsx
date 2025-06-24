import { Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-sm mb-4">Contact</h3>
          <div className="space-y-2 text-xl md:text-2xl">
            <p>hello@goodco.co.in</p>
            <p>jobs@goodco.co.in</p>
            <p>+91 98840 33312</p>
          </div>
        </div>

        <div className="flex space-x-6 mb-12 justify-end">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="YouTube">
            <Youtube className="h-5 w-5" />
          </Link>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-8">
            <p className="text-sm text-center self-start">
              &copy; {new Date().getFullYear()} © Copyright Good Co. Films Pvt
              Ltd All Rights Reserved.
            </p>
            <div className="w-full max-w-5xl">
              <Image
                src="/assets/logo/file.svg"
                alt="Good Co. Films"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Made by developer section */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              Made by{" "}
              <span className="text-white font-medium">&lt;/Uzer&gt;</span>
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Brainstormex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://uzersayed.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
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
    </footer>
  );
}
