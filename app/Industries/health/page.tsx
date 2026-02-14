"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HealthcareIndustryPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI for <span className="text-cyan-400">Healthcare Transformation</span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-3xl leading-relaxed">
              From overwhelmed public hospitals to intelligent digital care
              systems — Shannom builds sovereign AI infrastructure for
              national-scale healthcare modernization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION SECTION */}
      <section className="py-24 bg-[#050505]">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-24">

          {/* PROBLEM BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-red-400 mb-6">
                The Healthcare Challenge
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Public hospitals face overcrowding, fragmented medical records,
                delayed diagnoses, and limited rural specialist access.
                Clinical teams operate under pressure without predictive tools.
              </p>

              <ul className="space-y-3 text-gray-400">
                <li>• Long patient wait times</li>
                <li>• Manual & disconnected health data</li>
                <li>• Late detection of chronic illness</li>
                <li>• Resource shortages</li>
              </ul>
            </motion.div>

            {/* IMAGE */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/assets/patient.png"
                alt="Healthcare problem in Indian hospital"
                fill
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

          </div>

          {/* SOLUTION BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 order-2 md:order-1">
              <Image
                src="/assets/doctor.png"
                alt="AI-powered healthcare solution"
                fill
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-cyan-900/20" />
            </div>

            {/* TEXT */}
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                The AI-Powered Solution
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Shannom integrates sovereign AI systems into hospital
                infrastructure — enabling predictive diagnostics,
                real-time decision support, and intelligent resource
                optimization.
              </p>

              <ul className="space-y-3 text-gray-400">
                <li>• AI-assisted clinical decision support</li>
                <li>• Unified digital health records</li>
                <li>• Predictive disease modeling</li>
                <li>• Smart hospital resource management</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
