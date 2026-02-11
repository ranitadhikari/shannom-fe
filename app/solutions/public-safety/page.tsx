"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Bell, Lock, Users, Map } from "lucide-react";

export default function PublicSafetyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI for <span className="text-red-500">Public Safety & Security</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              Strengthening national security and public safety through intelligent surveillance, predictive policing, and rapid emergency response systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smart Surveillance", desc: "Real-time computer vision for anomaly detection in crowded public spaces.", icon: Eye },
              { title: "Predictive Safety", desc: "Analyzing crime patterns to optimize patrol routes and prevent incidents.", icon: Shield },
              { title: "Emergency Response", desc: "AI-driven dispatch systems that reduce response times during critical events.", icon: Bell }
            ].map((item, i) => (
              <motion.div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/40 transition duration-300">
                <item.icon className="text-red-500 mb-6" size={32} />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Securing <span className="text-red-500">Urban Environments</span></h2>
            <div className="space-y-6">
              {[
                { title: "Crowd Management", desc: "Predictive flow analysis to prevent stampedes and manage large gatherings.", icon: Users },
                { title: "Critical Infrastructure", desc: "Protecting power plants, transit hubs, and government buildings with AI perimeters.", icon: Lock },
                { title: "Disaster Mapping", desc: "Real-time situational awareness during natural calamities using drone-AI integration.", icon: Map }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-red-500" size={24} />
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
            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80" alt="Public Safety AI" className="object-cover w-full h-full opacity-60" />
          </div>
        </div>
      </section>
    </div>
  );
}
