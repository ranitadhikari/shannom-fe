"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Sprout, ShieldCheck, Heart, Globe } from "lucide-react";
import Image from "next/image";

export default function SocialImpactPage() {
  return (
    <div className="overflow-hidden bg-[#050d14]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative w-11/12 md:w-5/6 mx-auto z-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold max-w-4xl leading-tight"
          >
            Social <span className="text-cyan-400">Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed"
          >
            At Shannom AI, technology is not an end in itself — it is a national enabler. 
            Our mission is to apply artificial intelligence responsibly to strengthen public systems, expand opportunity, and improve quality of life at population scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex gap-4"
          >
            <div className="px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 font-medium">
              National Enabler
            </div>
            <div className="px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 font-medium">
              Purposeful AI
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION STATEMENT ================= */}
      <section className="relative py-24 bg-[#050d14]">
        <div className="relative w-11/12 md:w-5/6 mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed max-w-5xl mx-auto"
          >
            "We believe that AI, when deployed with purpose and governance, can become one of the most powerful tools for social transformation."
          </motion.p>
        </div>
      </section>

      {/* ================= DRIVING INCLUSIVE GROWTH ================= */}
      <section className="relative py-28 bg-[#07121c]">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Driving Inclusive Growth <br />
                <span className="text-cyan-400">Through Intelligence</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Shannom AI works with governments and public institutions to ensure that the benefits of AI reach citizens, communities, and critical sectors, not just markets.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Reduce systemic inefficiencies in public service delivery",
                  "Improve access to education, skills, and employment",
                  "Strengthen food security, healthcare, and social welfare systems",
                  "Enable data‑driven, transparent, and accountable governance"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-cyan-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80" 
                alt="Social Progress" 
                fill
                className="object-cover opacity-60"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= KEY AREAS OF IMPACT ================= */}
      <section className="relative py-32 bg-[#050d14]">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Key Areas of <span className="text-cyan-400">Social Impact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all group"
            >
              <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors">
                <BookOpen className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education & Workforce Empowerment</h3>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li>• AI‑driven learning systems</li>
                <li>• Skill alignment with future needs</li>
                <li>• Improved employability</li>
                <li>• Lifelong learning at scale</li>
              </ul>
              <div className="pt-6 border-t border-white/10">
                <p className="text-cyan-400 font-semibold">Impact: A more skilled, adaptable, and future‑ready workforce.</p>
              </div>
            </motion.div>

            {/* Agriculture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all group"
            >
              <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors">
                <Sprout className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agriculture & Rural Prosperity</h3>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li>• Precision agriculture intelligence</li>
                <li>• Climate risk forecasting</li>
                <li>• Smarter subsidy targeting</li>
                <li>• Data‑driven food security</li>
              </ul>
              <div className="pt-6 border-t border-white/10">
                <p className="text-cyan-400 font-semibold">Impact: Higher farmer incomes and resilient rural economies.</p>
              </div>
            </motion.div>

            {/* Public Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all group"
            >
              <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors">
                <Users className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Equitable Access to Public Services</h3>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li>• Identify underserved populations</li>
                <li>• Outcome‑based welfare delivery</li>
                <li>• Reduced leakages in distribution</li>
                <li>• Transparent, auditable systems</li>
              </ul>
              <div className="pt-6 border-t border-white/10">
                <p className="text-cyan-400 font-semibold">Impact: More inclusive and efficient social programs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SUSTAINABLE & RESPONSIBLE AI ================= */}
      <section className="relative py-28 bg-[#07121c]">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <div className="bg-gradient-to-r from-cyan-900/20 to-transparent p-12 rounded-[40px] border border-cyan-400/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Sustainable & <span className="text-cyan-400">Responsible AI</span></h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Shannom AI embeds ethical, explainable, and accountable AI into every deployment:
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <ShieldCheck className="text-cyan-400 mb-3" size={24} />
                    <h4 className="text-white font-semibold mb-2">Ethics first</h4>
                    <p className="text-sm text-gray-400">Bias detection and mitigation in every model.</p>
                  </div>
                  <div>
                    <Heart className="text-cyan-400 mb-3" size={24} />
                    <h4 className="text-white font-semibold mb-2">Human-centric</h4>
                    <p className="text-sm text-gray-400">Human‑in‑the‑loop decision systems.</p>
                  </div>
                  <div>
                    <Globe className="text-cyan-400 mb-3" size={24} />
                    <h4 className="text-white font-semibold mb-2">Standards</h4>
                    <p className="text-sm text-gray-400">Compliance with public‑sector AI standards.</p>
                  </div>
                  <div>
                    <Lock className="text-cyan-400 mb-3" size={24} />
                    <h4 className="text-white font-semibold mb-2">Sovereignty</h4>
                    <p className="text-sm text-gray-400">Sovereign data ownership and security.</p>
                  </div>
                </div>
                <div className="mt-10 p-4 bg-cyan-400/10 rounded-xl border border-cyan-400/20">
                  <p className="text-cyan-400 font-bold text-center">Impact: Public trust in AI‑driven governance.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden mt-8">
                  <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80" alt="Tech" fill className="object-cover opacity-40" />
                </div>
                <div className="relative aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" alt="Nature" fill className="object-cover opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NATIONAL RESILIENCE ================= */}
      <section className="relative py-32 bg-[#050d14]">
        <div className="relative w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">AI for <span className="text-cyan-400">National Resilience</span></h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Anticipate crises before they escalate",
              "Respond faster to shocks",
              "Evidence‑based policy decisions",
              "Build institutional capacity"
            ].map((text, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                <p className="text-gray-300 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR COMMITMENT ================= */}
      <section className="relative py-32 bg-cyan-400">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Our <br />
              Commitment
            </h2>
            <div className="space-y-6">
              {[
                "Building AI systems for society, not just efficiency",
                "Partnering with governments for long‑term impact",
                "Ensuring AI strengthens democracy, equity, and opportunity",
                "Measuring success by outcomes, not algorithms"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-black text-xl font-medium border-b border-black/10 pb-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-24 text-center">
            <p className="text-2xl font-bold text-black uppercase tracking-widest">
              Shannom AI™ — Engineering Intelligence for Social Progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const Lock = ({ size, className }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
