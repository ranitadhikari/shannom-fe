"use client";

export default function ImpactSection() {
  return (
    <section className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-[#020617]/90" />

      <div className="relative w-11/12 md:w-5/6 mx-auto text-white">
        <div className="max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Long-Term Vision
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Designing Systems That
            <span className="block text-cyan-400">
              Scale With Nations
            </span>
          </h2>

          <p className="mt-8 text-white/75 text-lg leading-relaxed">
            Our platforms are built not just for today’s transformation,
            but for tomorrow’s complexity. We align AI innovation with
            sustainable infrastructure and measurable public value.
          </p>

          <button className="mt-10 px-8 py-4 bg-cyan-400 text-black font-semibold hover:opacity-90 transition">
            Explore Capabilities
          </button>
        </div>
      </div>
    </section>
  );
}
