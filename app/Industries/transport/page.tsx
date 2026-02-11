"use client";

import { motion } from "framer-motion";
import { Bus, Car, Navigation, Shield, Zap, Clock } from "lucide-react";

export default function TransportIndustryPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI for <span className="text-cyan-400">Intelligent Transport</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              Optimizing urban mobility, enhancing road safety, and reducing environmental impact through real-time traffic intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Traffic Optimization", desc: "Adaptive signal control and predictive congestion management for urban centers.", icon: Zap },
              { title: "Public Transit AI", desc: "Real-time fleet tracking and demand-responsive scheduling for public transport.", icon: Bus },
              { title: "Road Safety", desc: "Computer vision for violation detection and accident hotspot analysis.", icon: Shield }
            ].map((item, i) => (
              <motion.div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition duration-300">
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
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Future of <span className="text-cyan-400">Public Mobility</span></h2>
            <div className="space-y-6">
              {[
                { title: "Smart Parking", desc: "AI-guided parking solutions to reduce cruising time and urban emissions.", icon: Car },
                { title: "Logistics Efficiency", desc: "Route optimization for public delivery and emergency response vehicles.", icon: Navigation },
                { title: "Time Savings", desc: "Reducing average commute times by 20% through intelligent network management.", icon: Clock }
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
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80" alt="Transport AI" className="object-cover w-full h-full opacity-60" />
          </div>
        </div>
      </section>
    </div>
  );
}
