import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-200 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="font-serif text-2xl text-olive-900 mb-2">Solenne House</h3>
            <p className="text-olive-800">A retreat for connection & renewal</p>
          </div>
          
          <div className="flex gap-6">
            <Link href="#" aria-label="Instagram" className="text-[#e2cba8] hover:text-[#e2cba8]/80">
              <Icon icon="lucide:instagram" width={24} />
            </Link>
            <Link href="#" aria-label="Email" className="text-[#e2cba8] hover:text-[#e2cba8]/80">
              <Icon icon="lucide:mail" width={24} />
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream-300">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-olive-700 text-sm">
              &copy; {new Date().getFullYear()} Solenne House. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link href="#" className="text-[#e2cba8] text-sm hover:text-[#e2cba8]/80">Privacy Policy</Link>
            <Link href="#" className="text-[#e2cba8] text-sm hover:text-[#e2cba8]/80">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};