"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative w-11/12 md:w-4/6 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Building the Future of
          <span className="block text-cyan-400">
            Intelligent Infrastructure
          </span>
        </h2>

        <p className="mt-8 text-white/70 text-lg">
          Join us in shaping next-generation AI systems that redefine how
          institutions operate and scale.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <Link
            href="/contact"
            className="px-8 py-4 bg-cyan-400 text-black font-semibold hover:opacity-90 transition"
          >
            Start a Conversation
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 border border-white/40 hover:bg-white hover:text-black transition"
          >
            Learn About Shannom
          </Link>
        </div>
      </div>
    </section>
  );
}
