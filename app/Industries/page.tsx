"use client";

import { motion } from "framer-motion";
import { HeartPulse, GraduationCap, Bus, BarChart3, Brain, Shield, Cpu } from "lucide-react";

export default function IndustriesPage() {
  return (
    <div
      className="overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1698755473432-4a8e954685e0?auto=format&fit=crop&w=2057&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==')",
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[95vh] flex items-center">
        <div className="absolute inset-0 bg-black/75 backdrop-blur-50" />

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-6xl font-bold max-w-4xl leading-tight"
          >
            AI Transforming
            <span className="text-cyan-400 block">
              Core National Industries
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl"
          >
            Health, Education, and Transport form the backbone of
            national development. AI ensures public investment
            creates measurable, scalable, and inclusive impact.
          </motion.p>
        </div>
      </section>

      {/* ================= HEALTH SECTION ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-14"
          >
            Towards a <span className="text-cyan-400">Healthy Tomorrow</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: HeartPulse,
                title: "Predictive Healthcare",
                desc: "AI-driven diagnostics and early disease prediction reduce burden on public hospitals and improve preventive care.",
              },
              {
                icon: BarChart3,
                title: "Optimized Public Spending",
                desc: "With 2.5% GDP target on health, AI ensures efficient allocation, minimizing leakages and maximizing outcomes.",
              },
              {
                icon: Shield,
                title: "Smart Health Infrastructure",
                desc: "Data-integrated hospitals, telemedicine networks, and rural AI support systems ensure universal accessibility.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-transparent to-cyan-400/20 hover:from-cyan-400/60 hover:to-cyan-400/40 transition duration-500"
              >
                <div className="relative bg-[#0b1722]/95 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/10 group-hover:border-cyan-400/40 transition duration-500 text-center">

                  <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-5" />

                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-[15.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= EDUCATION SECTION ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#050d14]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-14"
          >
            Education as a <span className="text-cyan-400">Growth Engine</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: GraduationCap,
                title: "Adaptive Learning Models",
                desc: "AI personalizes content delivery, bridging learning gaps and improving retention across demographics.",
              },
              {
                icon: Brain,
                title: "Teacher Augmentation",
                desc: "Automated assessments and analytics free educators to focus on mentorship and critical thinking.",
              },
              {
                icon: BarChart3,
                title: "High ROI Investment",
                desc: "With 6% GDP allocation target, AI ensures measurable outcomes and multiplier economic impact.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-transparent to-cyan-400/20 hover:from-cyan-400/60 hover:to-cyan-400/40 transition duration-500"
              >
                <div className="relative bg-[#0b1722]/95 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/10 group-hover:border-cyan-400/40 transition duration-500 text-center">

                  <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-5" />

                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-[15.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TRANSPORT SECTION ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-14"
          >
            Intelligent <span className="text-cyan-400">Transport Systems</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: Bus,
                title: "AI Traffic Optimization",
                desc: "Smart traffic signals and predictive congestion systems reduce urban travel time and fuel consumption.",
              },
              {
                icon: Shield,
                title: "Road Safety Analytics",
                desc: "Computer vision detects violations, accident hotspots, and improves emergency response systems.",
              },
              {
                icon: Cpu,
                title: "Smart Infrastructure",
                desc: "IoT-enabled highways and public transport systems integrated with AI for real-time efficiency.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-transparent to-cyan-400/20 hover:from-cyan-400/60 hover:to-cyan-400/40 transition duration-500"
              >
                <div className="relative bg-[#0b1722]/95 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/10 group-hover:border-cyan-400/40 transition duration-500 text-center">

                  <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-5" />

                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-[15.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
