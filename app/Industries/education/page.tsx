"use client";

import { motion } from "framer-motion";
import { Brain, GraduationCap, BarChart3, Cpu } from "lucide-react";

export default function EducationPage() {
  return (
    <div
      className="overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80')",
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
            Education as an
            <span className="text-cyan-400 block">
              Intelligent Industry
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl"
          >
            As India moves toward allocating 6% of GDP to education,
            artificial intelligence can transform learning into a
            measurable, scalable, and outcome-driven national industry.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-400/20"
          >
            Reimagining Learning
          </motion.button>
        </div>
      </section>

      {/* ================= THE PROBLEM ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The <span className="text-cyan-400">Challenge</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Despite increased public investment, education systems
              face uneven learning outcomes, teacher shortages,
              outdated pedagogy models, and limited personalization.
            </p>

            <p className="mt-6 text-gray-400">
              Traditional classroom models struggle to adapt to
              diverse student capabilities. As a result,
              learning gaps widen and ROI on public spending
              remains suboptimal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-transparent to-cyan-400/20"
          >
            <div className="relative bg-[#0b1722]/95 backdrop-blur-xl rounded-2xl p-10 border border-cyan-400/20">

              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                NEP 2020 Vision
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Building a flexible, multidisciplinary,
                technology-enabled education ecosystem
                that prepares India for the knowledge economy.
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= AI SOLUTION ================= */}
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
            AI-Powered <span className="text-cyan-400">Transformation</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: Brain,
                title: "Adaptive Learning",
                desc: "AI models personalize curriculum in real time based on student performance, improving comprehension and retention.",
              },
              {
                icon: GraduationCap,
                title: "Teacher Augmentation",
                desc: "AI assists teachers with automated assessments, content generation, and real-time analytics.",
              },
              {
                icon: BarChart3,
                title: "Outcome Analytics",
                desc: "Policy-makers receive measurable dashboards to evaluate ROI and optimize allocation of funds.",
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

                  <p className="text-gray-300 leading-relaxed text-[15.5px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= EDUCATION AS INDUSTRY ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-4/6 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-white mb-10"
          >
            Education as a
            <span className="text-cyan-400"> Strategic Industry</span>
          </motion.h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            With structured AI deployment, education can evolve
            into a high-impact national industry — generating
            skilled human capital, improving productivity,
            and accelerating economic growth.
          </p>

          <p className="mt-6 text-gray-400">
            The ROI of AI investment in education is humongous.
            Adaptive models disrupt traditional pedagogy and
            create multiplier effects across employment,
            innovation, and social mobility.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-12 px-10 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-400/20"
          >
            Build the Future Workforce
          </motion.button>
        </div>
      </section>
    </div>
  );
}
