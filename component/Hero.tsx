"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    tag: "Policy + Technology",
    title: "Data That Powers\nSmarter Nations",
    desc: "Transforming governance frameworks into intelligent, adaptive systems built for national scale.",
    button1: { text: "Explore Industries", link: "/industries" },
    button2: { text: "Our Vision", link: "/about" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    tag: "Secure AI Infrastructure",
    title: "Trust. Scale.\nDigital Sovereignty.",
    desc: "AI engineered with compliance, transparency, and long-term institutional resilience at its core.",
    button1: { text: "Government Use Cases", link: "/services" },
    button2: { text: "Learn More", link: "/contact" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    tag: "Future Systems",
    title: "Redefining Public\nDigital Infrastructure",
    desc: "Building intelligent systems that connect citizens, institutions, and innovation ecosystems.",
    button1: { text: "View Projects", link: "/services" },
    button2: { text: "Connect With Us", link: "/contact" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?q=80&w=2070&auto=format&fit=crop",
    tag: "Origin of Intelligence",
    title: "From First Logic\nTo National AI",
    desc: "Inspired by the earliest computing theories — engineered for tomorrow’s intelligent governance.",
    button1: { text: "Discover Shannom", link: "/about" },
    button2: { text: "Start Conversation", link: "/contact" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tag: "Strategic AI",
    title: "Intelligence As\nNational Advantage",
    desc: "Designing AI systems that strengthen economies, empower institutions, and enable scalable impact.",
    button1: { text: "Our Strategy", link: "/about" },
    button2: { text: "Partner With Us", link: "/contact" },
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setAnimating(false), 800);
  }, [animating]);

  const prevSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setAnimating(false), 800);
  }, [animating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[85vh] lg:h-screen w-full overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={slides[index].image}
          alt="Shannom AI"
          fill
          priority
          className="object-cover scale-110 transition-transform duration-[4000ms] ease-linear"
        />

        {/* Strong AI Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-[#001f2f]/95 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-11/12 md:w-5/6 mx-auto text-white">

          {/* Tag */}
          <span className="inline-block mb-6 px-4 py-1 text-xs tracking-[0.35em] uppercase border border-cyan-400/50 text-cyan-400">
            {slides[index].tag}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl">
            {slides[index].title.split("\n").map((line, i) => (
              <span
                key={i}
                className={
                  i === 1
                    ? "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] block"
                    : "block"
                }
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-white/80 text-lg leading-relaxed">
            {slides[index].desc}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6 flex-wrap">

            <Link
              href={slides[index].button1.link}
              className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-md 
              hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] 
              transition-all duration-300"
            >
              {slides[index].button1.text}
            </Link>

            <Link
              href={slides[index].button2.link}
              className="px-8 py-3 border border-cyan-400/70 text-cyan-400 
              rounded-md hover:bg-cyan-400 hover:text-black 
              hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] 
              transition-all duration-300"
            >
              {slides[index].button2.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-30 text-cyan-400/70 hover:text-cyan-400 transition"
      >
        <ChevronLeft size={50} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-30 text-cyan-400/70 hover:text-cyan-400 transition"
      >
        <ChevronRight size={50} />
      </button>
    </section>
  );
}
