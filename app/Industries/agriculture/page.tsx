"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, LineChart, ShieldCheck, Sprout, Tractor } from "lucide-react";
import Image from "next/image";

export default function AgricultureIndustryPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI for <span className="text-cyan-400">Agricultural Innovation</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              Empowering farmers with predictive intelligence, optimizing subsidy integrity, and ensuring national food security through data-driven governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Farming",
                desc: "Satellite imagery and IoT sensors provide real-time soil health and crop monitoring for better yields.",
                icon: Sprout
              },
              {
                title: "Subsidy Integrity",
                desc: "AI-driven detection systems prevent leakages in fertilizer and seed subsidy programs.",
                icon: ShieldCheck
              },
              {
                title: "Market Intelligence",
                desc: "Predictive models for price fluctuations and demand-supply gaps to protect farmer income.",
                icon: LineChart
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition duration-300"
              >
                <item.icon className="text-cyan-400 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Impact */}
      <section className="py-24 bg-[#050505]">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Transforming the <span className="text-cyan-400">Agrarian Economy</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Tractor className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Smart Resource Allocation</h4>
                  <p className="text-gray-400">Optimizing water, fertilizer, and pesticide use based on micro-climatic data.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Droplets className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Climate Resilience</h4>
                  <p className="text-gray-400">Early warning systems for extreme weather events to minimize crop loss.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Leaf className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Sustainable Practices</h4>
                  <p className="text-gray-400">Promoting regenerative agriculture through AI-guided soil restoration.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" 
              alt="AI in Agriculture" 
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl font-bold mb-8">Modernize Your Agricultural Strategy</h2>
          <button className="px-10 py-4 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/20">
            Download Industry Whitepaper
          </button>
        </div>
      </section>
    </div>
  );
}
