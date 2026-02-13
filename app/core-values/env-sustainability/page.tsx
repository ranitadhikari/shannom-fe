"use client";

import { motion } from "framer-motion";
import { Leaf, Wind, Zap } from "lucide-react";
import Image from "next/image";

export default function SustainabilityPage() {
  return (
    <div className="overflow-hidden bg-[#050d14]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80"
            alt="Sustainability Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative w-11/12 md:w-5/6 mx-auto z-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold max-w-4xl leading-tight"
          >
            Environmental <span className="text-cyan-400">Sustainability</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed"
          >
            Shannom AI is dedicated to leveraging technology for a greener future. 
            We are committed to reducing our carbon footprint and developing AI solutions that help the world transition to a sustainable economy.
          </motion.p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24 bg-[#050d14]">
        <div className="relative w-11/12 md:w-5/6 mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed max-w-5xl mx-auto"
          >
            &quot;Harnessing AI to protect our planet for future generations.&quot;
          </motion.p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative py-28 bg-[#07121c]">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-cyan-400" size={32} />,
                title: "Green Computing",
                desc: "We optimize our algorithms and infrastructure to minimize energy consumption and carbon emissions."
              },
              {
                icon: <Leaf className="text-cyan-400" size={32} />,
                title: "AI for Climate",
                desc: "Our AI solutions help industries monitor, predict, and reduce their environmental impact in real-time."
              },
              {
                icon: <Wind className="text-cyan-400" size={32} />,
                title: "Sustainable Ops",
                desc: "We are committed to net-zero operations through renewable energy and responsible resource management."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="relative py-32 bg-cyan-400">
        <div className="relative w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">Engineering a Greener Future</h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Sustainability is at the core of our engineering philosophy. 
            We believe that the most intelligent systems are those that can sustain the environment they operate in.
          </p>
        </div>
      </section>
    </div>
  );
}
