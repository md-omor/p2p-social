"use client";

import {
  NavigationMenu,
  NavigationMenuCustomLink,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "#", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");

      if (
        isOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        !menuButton?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`
        sticky top-5 z-50 mx-auto flex w-[90%] items-center justify-between rounded-[14px] border border-secondary !bg-black/[.18] py-5 p-2 shadow-inner md:w-[70%] lg:w-[75%] lg:max-w-screen-xl transform transition-all duration-500 ease-in-out ${
          isScrolled && !isOpen ? "-translate-y-full" : "translate-y-0"
        }
        bg-black backdrop-blur-3xl
        before:absolute before:inset-0 before:bg-gradient-radial
        before:from-[rgba(0,24,82,0.4)] before:to-black before:opacity-80
        before:-z-10
      `}
      >
        <div className="flex w-full items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white text-xl font-semibold">P2P Social</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuCustomLink
                    className="text-gray-300 hover:text-white transition-colors"
                    asChild
                  >
                    <Link href="/features">Features</Link>
                  </NavigationMenuCustomLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuCustomLink
                    className="text-gray-300 hover:text-white transition-colors"
                    asChild
                  >
                    <Link href="/how-to-use">How to use</Link>
                  </NavigationMenuCustomLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuCustomLink
                    className="text-gray-300 hover:text-white transition-colors"
                    asChild
                  >
                    <Link href="/faqs">FAQs</Link>
                  </NavigationMenuCustomLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuCustomLink
                    className="text-gray-300 hover:text-white transition-colors"
                    asChild
                  >
                    <Link href="/playground">Playground</Link>
                  </NavigationMenuCustomLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Selector */}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <span>us</span>
              <span>English</span>
            </div>

            {/* Theme Toggle */}
            <button className="text-gray-300 hover:text-white">
              {/* Add your theme toggle icon here */}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            id="menu-button"
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu - Add lg:hidden to hide on desktop */}
        <div
          id="mobile-menu"
          className={`
            fixed -top-5 -left-6 w-[300px] h-screen 
            bg-black transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            z-[60] lg:hidden
          `}
        >
          <div className="flex flex-col h-full p-6">
            {/* Logo */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-[#40A0FF] text-xl font-semibold">
                  Flux AI
                </span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-white">
                ✕
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-6">
              {[
                { href: "/features", label: "Features" },
                { href: "/how-to-use", label: "How to use" },
                { href: "/faqs", label: "FAQs" },
                { href: "/playground", label: "Playground" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-lg hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-auto">
              {/* Language Selector */}
              <div className="flex items-center gap-2 text-white mb-4">
                <span>us</span>
                <span>English</span>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center gap-2 text-white">
                <span>Light</span>
                <button className="text-white">☀️</button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay - Already has lg:hidden */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden z-[55]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
      <div className="h-[60px] w-full" /> {/* Spacer for fixed navbar */}
    </>
  );
};

export default MainNavbar;
