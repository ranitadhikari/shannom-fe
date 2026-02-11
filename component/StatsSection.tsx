"use client";

export default function StatsSection() {
  const stats = [
    { number: "12+", label: "AI Modules Designed" },
    { number: "98%", label: "System Reliability" },
    { number: "5+", label: "Public Sector Use Cases" },
    { number: "24/7", label: "Operational Monitoring" },
  ];

  return (
    <section className="py-20 bg-[#020617] border-y border-white/10 text-white">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((item, i) => (
          <div key={i} className="group">
            <p className="text-5xl font-bold text-cyan-400 group-hover:scale-110 transition">
              {item.number}
            </p>
            <p className="mt-4 text-white/60 text-sm tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
