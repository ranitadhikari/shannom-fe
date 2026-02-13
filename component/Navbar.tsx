"use client";
// hello

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../public/assets/banner.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCoreValuesOpen, setMobileCoreValuesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setSolutionsOpen = (value: string | null) => {
    setDropdownOpen(value);
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg"
            : "bg-transparent"
          }`}
      >
        <nav className="relative w-11/12 mx-auto flex items-center justify-between py-5">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src={logo} alt="Logo" width={45} height={45} />
            <span className="font-bold text-xl text-white">
              Shannom
              <span className="text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition">
                .ai
              </span>
            </span>
          </Link>

          {/* CENTER MENU */}
          <ul className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 font-medium text-white">

            {/* Home */}
            <li className="relative group">
              <Link
                href="/"
                className={`transition ${pathname === "/" ? "text-cyan-400" : "hover:text-cyan-400"
                  }`}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li className="relative group">
              <Link
                href="/about"
                className={`transition ${pathname === "/about"
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                  }`}
              >
                About
              </Link>
            </li>

            {/* INDUSTRIES DROPDOWN */}
            {/* INDUSTRIES DROPDOWN */}
            <li
              className="relative group"
              onMouseEnter={() => setSolutionsOpen("industries")}
              onMouseLeave={() => setSolutionsOpen(null)}
            >
              <div className="flex items-center gap-1">

                {/* Clickable Text */}
                <Link
                  href="/Industries"
                  className={`transition duration-300 whitespace-nowrap ${pathname === "/Industries"
                      ? "text-cyan-400"
                      : "hover:text-cyan-400"
                    }`}
                >
                  Industries
                </Link>

                {/* Arrow Toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSolutionsOpen(
                      dropdownOpen === "industries" ? null : "industries"
                    );
                  }}
                  className="hover:text-cyan-400 transition"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              <div
                className={`absolute top-full left-0 mt-4 w-72 bg-black/90 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-xl transition-all duration-300 ${dropdownOpen === "industries"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                  }`}
              >
                {[
                  { name: "Education", link: "/Industries/education" },
                  { name: "Healthcare", link: "/Industries/health" },
                  { name: "Transport", link: "/Industries/transport" },
                  { name: "Agriculture", link: "/Industries/agriculture" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="block px-6 py-3 text-white hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>


            {/* SOLUTIONS DROPDOWN */}
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen("solutions")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 hover:text-cyan-400 transition whitespace-nowrap">
                Solutions <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-full left-0 mt-4 w-72 bg-black/90 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-xl transition-all duration-300 ${dropdownOpen === "solutions"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                  }`}
              >
                {[
                  { name: "Fertilizer Subsidy Integrity", link: "/solutions/fertilizer-subsidy" },
                  { name: "Digital India Enhancement", link: "/solutions/digital-india" },
                  { name: "Public Safety & Security", link: "/solutions/public-safety" },
                  { name: "Healthcare Transformation", link: "/solutions/healthcare" },
                  { name: "Smart Cities & Urban Planning", link: "/solutions/smart-cities" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="block px-6 py-3 text-white hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>

            {/* CORE VALUES DROPDOWN */}
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen("core-values")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 hover:text-cyan-400 transition whitespace-nowrap">
                Core Values <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-full left-0 mt-4 w-72 bg-black/90 backdrop-blur-xl border border-cyan-400/20 rounded-xl shadow-xl transition-all duration-300 ${dropdownOpen === "core-values"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                  }`}
              >
                {[
                  { name: "Social Impact", link: "/core-values/social-impact" },
                  { name: "DEI", link: "/core-values/dei" },
                  { name: "Envoirment sustainability", link: "/core-values/env-sustainability" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="block px-6 py-3 text-white hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>

            {/* Vision */}
            <li>
              <Link
                href="/vision"
                className={`transition ${pathname === "/vision"
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                  }`}
              >
                Vision
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className={`transition ${pathname === "/contact"
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                  }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA BUTTON */}
          <div className="hidden xl:block">
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
            className="xl:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full sm:w-80 bg-black text-white border-l border-cyan-400/20 shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-cyan-400 p-2 hover:bg-white/5 rounded-full transition"
              >
                <X size={26} />
              </button>

              <nav className="mt-20 px-8 flex flex-col gap-6 text-lg font-medium overflow-y-auto max-h-[calc(100vh-5rem)]">
                <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                  Home
                </Link>

                <Link href="/about" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                  About
                </Link>

                {/* MOBILE INDUSTRIES */}
                <div>
                  <button
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className="flex items-center justify-between w-full hover:text-cyan-400 transition whitespace-nowrap"
                  >
                    Industries 
                    <motion.div
                      animate={{ rotate: mobileIndustriesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 flex flex-col gap-4 text-base text-gray-400 overflow-hidden"
                      >
                        <div className="pt-4 flex flex-col gap-4">
                          <Link href="/Industries/education" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Education
                          </Link>
                          <Link href="/Industries/health" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Healthcare
                          </Link>
                          <Link href="/Industries/transport" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Transport
                          </Link>
                          <Link href="/Industries/agriculture" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Agriculture
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* MOBILE SOLUTIONS */}
                <div>
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="flex items-center justify-between w-full hover:text-cyan-400 transition whitespace-nowrap"
                  >
                    Solutions 
                    <motion.div
                      animate={{ rotate: mobileSolutionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobileSolutionsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 flex flex-col gap-4 text-base text-gray-400 overflow-hidden"
                      >
                        <div className="pt-4 flex flex-col gap-4">
                          <Link href="/solutions/fertilizer-subsidy" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Fertilizer Subsidy Integrity
                          </Link>
                          <Link href="/solutions/digital-india" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Digital India Enhancement
                          </Link>
                          <Link href="/solutions/public-safety" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Public Safety & Security
                          </Link>
                          <Link href="/solutions/healthcare" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Healthcare Transformation
                          </Link>
                          <Link href="/solutions/smart-cities" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Smart Cities & Urban Planning
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* MOBILE CORE VALUES */}
                <div>
                  <button
                    onClick={() => setMobileCoreValuesOpen(!mobileCoreValuesOpen)}
                    className="flex items-center justify-between w-full hover:text-cyan-400 transition whitespace-nowrap"
                  >
                    Core Values 
                    <motion.div
                      animate={{ rotate: mobileCoreValuesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobileCoreValuesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 flex flex-col gap-4 text-base text-gray-400 overflow-hidden"
                      >
                        <div className="pt-4 flex flex-col gap-4">
                          <Link href="/core-values/social-impact" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Social Impact
                          </Link>
                          <Link href="/core-values/dei" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            DEI
                          </Link>
                          <Link href="/core-values/env-sustainability" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                            Env sustainability
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/vision" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                  Vision
                </Link>

                <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
