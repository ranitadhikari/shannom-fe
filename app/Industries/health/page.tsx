"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Shield, Users, Database, Globe } from "lucide-react";
import Image from "next/image";

export default function HealthcareIndustryPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI for <span className="text-cyan-400">Healthcare Transformation</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              Enhancing public health delivery, optimizing hospital resources, and bringing advanced diagnostics to every citizen through intelligent systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Predictive Diagnostics", desc: "Early detection of chronic diseases using population-level data and ML models.", icon: Activity },
              { title: "Public Health Monitoring", desc: "Real-time tracking of disease outbreaks and resource allocation for rapid response.", icon: Globe },
              { title: "Universal Inclusion", desc: "AI-enabled telemedicine and rural health support for last-mile delivery.", icon: Users }
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
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 order-2 md:order-1">
            <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" alt="Healthcare AI" fill className="object-cover opacity-60" />
          </div>
          <motion.div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Building <span className="text-cyan-400">Digital Health Assets</span></h2>
            <div className="space-y-6">
              {[
                { title: "Secure Health Records", desc: "Blockchain-inspired secure data storage for longitudinal patient records.", icon: Shield },
                { title: "Resource Optimization", desc: "AI-driven bed management and staff allocation for public hospitals.", icon: Database },
                { title: "Preventive Care", desc: "Personalized health recommendations based on regional environmental factors.", icon: Heart }
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
