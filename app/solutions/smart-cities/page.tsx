"use client";

import { motion } from "framer-motion";
import { Building2, Lightbulb, Wind, Trash2, Zap, Car } from "lucide-react";
import Image from "next/image";

export default function SmartCitiesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI for <span className="text-cyan-400">Smart Cities & Urban Planning</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              Building resilient, efficient, and sustainable urban centers through connected AI frameworks and real-time civic intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Energy Optimization", desc: "Smart grids that balance load and reduce energy waste across city districts.", icon: Zap },
              { title: "Intelligent Lighting", desc: "Adaptive street lighting systems that respond to movement and ambient light.", icon: Lightbulb },
              { title: "Waste Management", desc: "AI-optimized collection routes and sensor-based bin monitoring.", icon: Trash2 }
            ].map((item, i) => (
              <motion.div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition duration-300">
                <item.icon className="text-cyan-400 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505]">
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
            <Image src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80" alt="Smart Cities AI" fill className="object-cover opacity-60" />
          </div>
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Sustainable <span className="text-cyan-400">Urban Future</span></h2>
            <div className="space-y-6">
              {[
                { title: "Air Quality Monitoring", desc: "Hyper-local air quality tracking and predictive pollution mapping.", icon: Wind },
                { title: "Smart Buildings", desc: "IoT-AI integration for energy-efficient government and commercial hubs.", icon: Building2 },
                { title: "Mobility Integration", desc: "Seamless connection between public transit and last-mile EV solutions.", icon: Car }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
