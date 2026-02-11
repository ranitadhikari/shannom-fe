"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../public/assets/banner.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* MAIN NAVBAR */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="relative w-11/12 mx-auto flex items-center justify-between py-5">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src={logo} alt="Logo" width={45} height={45} />
            <span
              className={`font-bold text-xl transition-all duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              Shannom
              <span className="text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition">
                .ai
              </span>
            </span>
          </Link>

          {/* CENTER MENU */}
          <ul
            className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 font-medium text-white`}
          >
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Industries", link: "/industries" },
            ].map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.link}
                  className={`transition duration-300 ${
                    pathname === item.link
                      ? "text-cyan-400"
                      : "hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    pathname === item.link
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* SOLUTIONS DROPDOWN */}
            <li
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-cyan-400 transition">
                Solutions <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-full left-0 mt-4 w-72 bg-black/90 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-xl transition-all duration-300 ${
                  solutionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                }`}
              >
                {[
                  "AI for Healthcare",
                  "AI for Smart Cities",
                  "AI for Transport",
                  "AI for Education",
                  "Responsible AI",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/solutions"
                    className="block px-6 py-3 text-white hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </li>

            {[
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.link}
                  className={`transition ${
                    pathname === item.link
                      ? "text-cyan-400"
                      : "hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    pathname === item.link
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2 rounded-md bg-cyan-400 text-black font-semibold 
              hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] 
              transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-80 bg-black text-white border-l border-cyan-400/20 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-cyan-400"
          >
            <X size={26} />
          </button>

          <nav className="mt-20 px-8 flex flex-col gap-6 text-lg font-medium">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-400">
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-cyan-400">
              About
            </Link>
            <Link href="/industries" onClick={() => setOpen(false)} className="hover:text-cyan-400">
              Industries
            </Link>

            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center justify-between hover:text-cyan-400"
            >
              Solutions <ChevronDown size={18} />
            </button>

            {mobileSolutionsOpen && (
              <div className="ml-4 flex flex-col gap-4 text-base text-gray-400">
                <Link href="/solutions" onClick={() => setOpen(false)}>
                  AI for Healthcare
                </Link>
                <Link href="/solutions" onClick={() => setOpen(false)}>
                  AI for Smart Cities
                </Link>
                <Link href="/solutions" onClick={() => setOpen(false)}>
                  AI for Education
                </Link>
              </div>
            )}

            <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-cyan-400">
              Projects
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-cyan-400">
              Contact
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
