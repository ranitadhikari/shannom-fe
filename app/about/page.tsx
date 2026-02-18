"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Lock, BarChart3 } from "lucide-react";
import { useRouter } from "next/router";

export default function AboutPage() {
  return (
<div
  className="overflow-hidden bg-fixed bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
  }}
>
  {/* ================= HERO SECTION ================= */}
  <section className="relative min-h-[95vh] flex items-center">
    <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

    <div className="relative w-11/12 md:w-5/6 mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-5xl md:text-6xl font-bold max-w-4xl leading-tight"
      >
        Building Trusted AI for a
        <span className="text-cyan-400 block">
          Viksit Bharat 2047
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg text-gray-200 max-w-2xl"
      >
        ShannOm transforms artificial intelligence into public
        infrastructure aligning governance, machine learning,
        and institutional trust to create measurable national impact.
      </motion.p>

    <Link href="/vision" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-400/20"
          >
            Our Strategic Vision
          </motion.button>
        </Link>
    </div>
  </section>


      {/* ================= MISSION SECTION ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-cyan-400">Mission</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We bridge the gap between cutting-edge AI innovation
              and public sector objectives ensuring every deployment
              is secure, transparent, and outcome-driven.
            </p>

            <p className="mt-6 text-gray-400">
              Our systems are designed not as experiments,
              but as scalable national capabilities that strengthen
              institutions and serve every citizen.
            </p>
          </motion.div>

          {/* Bharat Card Styled Like Approach Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-transparent to-cyan-400/20 hover:from-cyan-400/60 hover:to-cyan-400/40 transition duration-500"
          >
            <div className="relative bg-[#0b1722]/95 backdrop-blur-xl rounded-2xl p-10 border border-cyan-400/10 group-hover:border-cyan-400/40 transition duration-500">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                Viksit Bharat 2047
              </h3>

              <p className="text-gray-300 leading-relaxed">
                As India advances toward 2047, AI must evolve
                from abstract promise to foundational infrastructure.
              </p>

              <p className="mt-6 text-gray-400">
                Guided by the principle of
                <span className="text-cyan-400"> Vasudhaiva Kutumbakam</span>,
                we build inclusive, resilient, and nationally scalable
                AI systems that elevate governance and collective progress.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[#050d14]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-4xl md:text-5xl font-bold text-white mb-16"
          >
            Our <span className="text-cyan-400">Approach</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Intelligent Data Systems",
                desc: "Secure, structured, and policy-aligned data ecosystems forming the backbone of AI-driven governance.",
              },
              {
                title: "Responsible ML Deployment",
                desc: "Scalable machine learning models built for transparency, explainability, and institutional adoption.",
              },
              {
                title: "Governance Integration",
                desc: "Seamless alignment with regulatory frameworks and citizen-centric service delivery.",
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
                <div className="relative bg-[#0b1722]/95 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/10 group-hover:border-cyan-400/40 transition duration-500">

                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-[15.5px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-4xl font-bold text-white mb-14 whitespace-nowrap"
          >
            Our <span className="text-cyan-400">Core Values</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "Transparency",
                desc: "Open systems. Auditable models. Accountable decisions.",
              },
              {
                icon: Globe2,
                title: "Inclusion",
                desc: "AI designed for every citizen urban and rural alike.",
              },
              {
                icon: Lock,
                title: "Security",
                desc: "Protection-first architecture built for national resilience.",
              },
              {
                icon: BarChart3,
                title: "Impact",
                desc: "Measurable outcomes delivered at scale.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-5" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY SHANNOM ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-4/6 mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-10">
            Why <span className="text-cyan-400">ShannOm?</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            As AI shifts from experimentation to essential infrastructure,
            ShannOm ensures it serves the public good with efficiency,
            trust, and measurable value.
          </p>

          <p className="mt-6 text-gray-400">
            We don’t just deploy algorithms we build long-term
            digital capacity for governance at scale.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-12 px-10 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-400/20"
          >
            Partner With Us
          </motion.button>
        </div>
      </section>
    </div>
  );
}
