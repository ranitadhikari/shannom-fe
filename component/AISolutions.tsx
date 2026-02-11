"use client";

import { Cpu, Database, ShieldCheck, LineChart } from "lucide-react";

const solutions = [
  {
    icon: <Cpu size={36} />,
    title: "Intelligent Automation",
    desc: "Streamline public systems with adaptive AI workflows that reduce delays and increase transparency.",
  },
  {
    icon: <Database size={36} />,
    title: "Data Infrastructure",
    desc: "Unified data layers designed for governance, compliance, and real-time analytics.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Secure AI Systems",
    desc: "Built with privacy-first architecture and enterprise-grade protection standards.",
  },
  {
    icon: <LineChart size={36} />,
    title: "Predictive Insights",
    desc: "AI-powered forecasting models supporting better strategic and economic decisions.",
  },
];

export default function AISolutions() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#050814] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative w-11/12 md:w-5/6 mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-cyan-400 mb-6">
          What We Build
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          AI Infrastructure for <span className="text-cyan-400">Modern Governance</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
          Shannom develops intelligent systems that connect policy, technology,
          and execution — creating scalable digital ecosystems.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
