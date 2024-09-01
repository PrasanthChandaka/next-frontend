"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const isOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="sticky top-0 w-full backdrop-blur-lg px-6 py-3 border-b border-neutral-700/80 text-white">
      <div className="container flex justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <Image
            className="mr-2"
            src={logo}
            alt="logo"
            height={40}
            width={40}
          ></Image>
          <h1 className="text-xl px-2">VirtualR</h1>
        </a>
        <div className="text-sm hidden lg:block">
          {navItems.map((each) => (
            <a className="px-4" key={each.label} href={each.href}>
              {each.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <button className="btn-secondary mr-5" type="button">
            Sign In
          </button>
          <button className="btn-primary" type="button">
            Create an account
          </button>
        </div>
        <div className="block lg:hidden">
          <div onClick={isOpen} className="cursor-pointer">
            {open ? <X /> : <Menu />}
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed left-0 w-full bg-red-200">
          <nav className="text-white bg-neutral-900 flex flex-col items-center p-10">
            {navItems.map((each) => (
              <a className="px-4 py-2 mb-5" key={each.label} href={each.href}>
                {each.label}
              </a>
            ))}
            <div className="flex items-center justify-center flex-wrap gap-2">
              <a href="#signIn" className="btn-secondary mr-5" type="button">
                Sign In
              </a>
              <a href="#signUp" className="btn-primary" type="button">
                Create an account
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
