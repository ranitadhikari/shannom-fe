"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Navigation, Clock } from "lucide-react";
import Image from "next/image";

export default function TransportIndustryPage() {
  return (
    <div className="bg-black text-white min-h-screen relative">

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
          alt="Urban Traffic Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI-Powered <span className="text-cyan-400">Road Safety Enforcement</span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-3xl leading-relaxed">
              Real-time helmet detection and automated violation intelligence
              designed to reduce fatalities, improve compliance, and modernize
              transport governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PROBLEM & LIVE DETECTION ================= */}
      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image 1 - Street Detection */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/assets/helmet-detection-road.png"
              alt="Helmet Detection AI on Road"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>

          {/* Problem Description */}
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="text-cyan-400">Road Safety Problem</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Two-wheeler accidents account for a significant portion of
              urban road fatalities. Helmet non-compliance remains one of
              the leading contributors to preventable deaths.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Manual enforcement is inconsistent, resource-intensive,
              and reactive. Authorities require automated, scalable
              monitoring systems that operate continuously and accurately.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= SOLUTION ARCHITECTURE ================= */}
      <section className="py-24 bg-[#050505]">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Solution Content */}
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              AI-Based <span className="text-cyan-400">Helmet & Plate Detection</span>
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Shield className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Real-Time Violation Detection</h4>
                  <p className="text-gray-400">
                    Computer vision models identify helmet absence
                    instantly across live traffic feeds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Navigation className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Automatic Number Plate Recognition</h4>
                  <p className="text-gray-400">
                    Integrated ANPR captures license plates for
                    automated enforcement workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Zap className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Edge AI Deployment</h4>
                  <p className="text-gray-400">
                    Optimized models run on edge devices for
                    low-latency processing and scalable deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Clock className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Automated Enforcement Workflow</h4>
                  <p className="text-gray-400">
                    Violation data can integrate directly with
                    e-challan or penalty management systems.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Image 2 - Helmet Detection Device / Demo */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/assets/helmet-detection-device.png"
              alt="Helmet Detection AI System"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
