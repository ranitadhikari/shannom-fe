"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HealthcareIndustryPage() {
  return (
    <div
      className="overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1920&q=80')",
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
            AI for
            <span className="text-cyan-400 block">
              Healthcare Transformation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl"
          >
            From overwhelmed public hospitals to intelligent digital care
            systems — Shannom builds sovereign AI infrastructure for
            national-scale healthcare modernization.
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
              The <span className="text-cyan-400">Healthcare Challenge</span>
            </h2>

            <ul className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <li>• Long patient wait times</li>
              <li>• Manual & disconnected health data</li>
              <li>• Late detection of chronic illness</li>
              <li>• Resource shortages</li>
              <li>• Limited rural specialist access</li>
            </ul>

            <p className="mt-8 text-gray-400">
              Public hospitals face overcrowding, fragmented medical
              records, delayed diagnoses, and limited predictive
              infrastructure for proactive care delivery.
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
              src="/assets/patient.png"
              alt="Healthcare problem in Indian hospital"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= AI SOLUTION SECTION ================= */}
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
              src="/assets/doctor.png"
              alt="AI-powered healthcare solution"
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
              The <span className="text-cyan-400">AI-Powered Solution</span>
            </h2>

            <ul className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <li>• AI-assisted clinical decision support</li>
              <li>• Unified digital health records</li>
              <li>• Predictive disease modeling</li>
              <li>• Smart hospital resource management</li>
              <li>• Real-time patient monitoring systems</li>
            </ul>

            <p className="mt-8 text-gray-400">
              Shannom integrates sovereign AI systems into hospital
              infrastructure — enabling predictive diagnostics,
              real-time decision support, and intelligent
              healthcare optimization at scale.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
