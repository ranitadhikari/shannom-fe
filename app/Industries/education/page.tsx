"use client";

import { motion } from "framer-motion";
import { Brain, GraduationCap, BarChart3 } from "lucide-react";
import Image from "next/image";

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
              Intelligent National Infrastructure
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
            measurable, scalable, and outcome-driven national engine.
          </motion.p>
        </div>
      </section>

      {/* ================= THE CHALLENGE ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The <span className="text-cyan-400">Systemic Challenge</span>
            </h2>

            <ul className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <li>• Uneven learning outcomes across rural and urban regions</li>
              <li>• High student-to-teacher ratios and faculty shortages</li>
              <li>• One-size-fits-all pedagogy with no personalization</li>
              <li>• Limited real-time performance measurement</li>
              <li>• Weak linkage between curriculum and employability</li>
            </ul>

            <p className="mt-8 text-gray-400">
              Despite increased funding and NEP 2020 ambitions,
              traditional systems struggle to deliver measurable
              learning ROI at scale.
            </p>
          </motion.div>

          {/* Problem Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src="/assets/student.png"   // ← replace with your problem image path
              alt="Overcrowded classroom problem"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= AI SOLUTION WITH IMAGE ================= */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[#050d14]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Solution Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-cyan-400/30"
          >
            <Image
              src="/assets/teacher.png"   // ← replace with your solution image path
              alt="AI enabled classroom solution"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              AI-Driven <span className="text-cyan-400">Transformation</span>
            </h2>

            <ul className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <li>• Adaptive AI tutors personalizing curriculum in real-time</li>
              <li>• Teacher augmentation with automated assessments</li>
              <li>• Predictive dropout detection & intervention</li>
              <li>• Policy dashboards for measurable education ROI</li>
              <li>• Skill-aligned learning aligned with industry needs</li>
            </ul>

            <p className="mt-8 text-gray-400">
              AI enables scalable personalization, data-driven governance,
              and measurable improvements in national learning outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= AI SOLUTION CARDS (KEEP SAME) ================= */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[#050d14]/95" />

        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-bold text-white mb-16"
          >
            Core <span className="text-cyan-400">AI Capabilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Brain,
                title: "Adaptive Learning",
                desc: "AI models personalize curriculum in real time based on student performance.",
              },
              {
                icon: GraduationCap,
                title: "Teacher Augmentation",
                desc: "Automated evaluation, analytics, and lesson optimization support.",
              },
              {
                icon: BarChart3,
                title: "Outcome Analytics",
                desc: "National dashboards to track ROI and policy impact.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative rounded-2xl p-8 bg-[#0b1722]/95 border border-cyan-400/20 text-center"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-5" />
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-[15.5px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION AS INDUSTRY ================= */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[#07121c]/95" />

        <div className="relative w-11/12 md:w-4/6 mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-10">
            Education as a
            <span className="text-cyan-400"> Strategic Industry</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Structured AI deployment transforms education into
            a high-impact national industry generating skilled
            human capital and accelerating economic growth.
          </p>

          <p className="mt-6 text-gray-400">
            AI-driven personalization and governance intelligence
            create multiplier effects across innovation,
            employment, and social mobility.
          </p>
        </div>
      </section>
    </div>
  );
}
