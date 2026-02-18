"use client";

import {
  GraduationCap,
  HeartPulse,
  Bus,
  Building2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: GraduationCap,
    title: "AI for Education",
    desc: "Adaptive learning intelligence and predictive academic analytics enabling institutions to deliver measurable performance outcomes.",
    link: "/Industries/education"
  },
  {
    icon: HeartPulse,
    title: "AI for Healthcare",
    desc: "Clinical decision systems, patient risk modeling, and operational automation enhancing quality of care.",
    link: "/Industries/health"
  },
  {
    icon: Bus,
    title: "AI for Transportation",
    desc: "Real-time mobility intelligence and predictive traffic optimization for next-generation infrastructure.",
    link: "/Industries/transport"
  },
  {
    icon: ShieldCheck,
    title: "AI for Agriculture",
    desc: "Predictive soil health models and subsidy integrity systems protecting farmer livelihoods.",
    link: "/Industries/agriculture"
  },
  {
    icon: Building2,
    title: "AI for Smart Cities",
    desc: "Connected urban AI frameworks powering energy optimization and intelligent civic systems.",
    link: "/solutions/smart-cities"
  },
  {
    icon: ShieldCheck,
    title: "AI for Governance",
    desc: "Policy intelligence and compliance automation supporting transparent, data-driven public administration.",
    link: "/solutions/digital-india"
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0a0f1c] text-white">

      {/* Deep Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-black" />

      {/* Cyan Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[140px] animate-pulse delay-1000" />

      <div className="relative w-11/12 md:w-5/6 mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm font-semibold">
            Intelligent Infrastructure
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            AI Solutions Designed for
            <span className="block text-cyan-400">
              National-Scale Impact
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-lg">
            ShannOm builds scalable AI systems across critical industries 
            engineered for governance alignment, operational intelligence, and long-term transformation.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group relative p-8 rounded-3xl
                  bg-white/5 border border-white/10
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  hover:bg-white/10
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 to-cyan-500/10 blur-xl" />

                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-block mt-6 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition"
                  >
                    Explore Solution →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
