"use client";

import { motion } from "framer-motion";
import {
  Users,
  Heart,
  ShieldCheck,
  GraduationCap,
  Globe,
  Eye,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function VisionPage() {
  return (
    <div className="bg-black/70 text-white overflow-hidden relative">

      {/* ================= GLOBAL BACKGROUND ================= */}
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
          alt="Futuristic AI Technology Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />

        {/* Softer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />
      </div>


      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-12"
          >

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Sovereign AI for
                <span className="block text-cyan-400 mt-2">
                  Institutional Transformation
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Engineering responsible, human-centered Artificial Intelligence
                that strengthens governance, accelerates institutions,
                and advances society at scale.
              </p>
            </div>

            {/* Strategic Value Pillars (Compact & Powerful) */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-6">

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-2">Sovereign Infrastructure</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  National-grade AI systems designed for security,
                  compliance, and long-term institutional control.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-2">Human-Centric Intelligence</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI that augments leadership and decision-making —
                  enhancing judgment without replacing accountability.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-2">Responsible by Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built with transparency, auditability, bias mitigation,
                  and global compliance standards embedded from day one.
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* ================= CORE VISION PILLARS ================= */}
      <section className="py-24 relative">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-32">

          {/* AI FOR ALL */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-cyan-400" size={32} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI for All, <span className="text-cyan-400">Not Just a Few</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                The future of AI must not be centralized in a handful of global
                corporations. Shannom develops sovereign AI systems that can be
                deployed across ministries, public institutions, and enterprises —
                ensuring national capability and institutional independence.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Our architecture is modular, scalable, and adaptable —
                designed to operate in diverse environments while preserving
                security, compliance, and performance.
              </p>
            </motion.div>

            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
                alt="AI Technology Infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* HUMAN CENTRIC */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
                alt="Human Centered Artificial Intelligence"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-cyan-400" size={32} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Human-Centric <span className="text-cyan-400">Intelligence</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Artificial Intelligence must enhance human judgment — not
                replace responsibility. Our systems are designed to augment
                policymakers, administrators, and institutional leaders with
                precise insights and predictive intelligence.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Transparency, explainability, and auditability are embedded into
                our lifecycle — from model design to deployment and oversight.
              </p>
            </motion.div>
          </div>

          {/* GOVERNANCE & RESPONSIBLE AI */}
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:border-cyan-400/40 transition">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-cyan-400" />
                AI for Governance
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We empower governments and institutions with predictive analytics,
                operational intelligence, and automated insights that improve
                policy delivery, risk monitoring, and citizen services.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:border-cyan-400/40 transition">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="text-cyan-400" />
                Responsible & Trusted AI
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Responsible AI is not an afterthought — it is foundational.
                We implement strong governance frameworks, bias mitigation,
                security protocols, and compliance standards aligned with
                global best practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FUTURE COMMITMENT SECTION ================= */}
      <section className="py-32 text-center relative">
        <div className="w-11/12 md:w-3/4 mx-auto">
          <h2 className="text-cyan-400 uppercase tracking-widest font-bold mb-8">
            Our Vision Statement
          </h2>

          <p className="text-3xl md:text-5xl font-bold italic leading-tight mb-10">
            “To engineer sovereign, human-centric, and responsible AI systems
            that empower institutions and drive inclusive growth.”
          </p>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            We are committed to shaping a future where Artificial Intelligence
            strengthens national capability, enhances institutional resilience,
            and creates sustainable impact across society.
          </p>
        </div>
      </section>

    </div>
  );
}
