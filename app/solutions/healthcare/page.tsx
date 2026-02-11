"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Database, HeartPulse, Microscope, ClipboardList } from "lucide-react";

export default function HealthcareSolutionPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI-Driven <span className="text-cyan-400">Healthcare Transformation</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              Scaleable AI solutions for public health monitoring, clinical decision support, and longitudinal health record management.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clinical Support", desc: "Assisting doctors with AI-powered diagnostic recommendations and imaging analysis.", icon: Microscope },
              { title: "Epidemic Prediction", desc: "Real-time tracking and predictive modeling for infectious disease outbreaks.", icon: Activity },
              { title: "Operational Efficiency", desc: "Optimizing hospital resource allocation, from bed management to supply chains.", icon: ClipboardList }
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
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Data-First <span className="text-cyan-400">Health Ecosystems</span></h2>
            <div className="space-y-6">
              {[
                { title: "Secure Data Layers", desc: "Privacy-compliant infrastructure for managing population-scale health data.", icon: ShieldCheck },
                { title: "Interoperability", desc: "Unifying disparate hospital data systems for a seamless patient journey.", icon: Database },
                { title: "Preventive Analytics", desc: "Identifying at-risk populations and suggesting early interventions.", icon: HeartPulse }
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
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" alt="Health Data AI" className="object-cover w-full h-full opacity-60" />
          </div>
        </div>
      </section>
    </div>
  );
}
