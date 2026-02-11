"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Zap, Database, Users, BarChart } from "lucide-react";

export default function DigitalIndiaPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Digital India & <span className="text-cyan-400">E-Governance Enhancement</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              Transforming digital infrastructure into intelligent governance systems that reduce administrative overload and improve citizen service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Intelligent Governance", desc: "AI as a practical instrument for governance reform and reducing administrative latency.", icon: Zap },
              { title: "Population Scale AI", desc: "Governing at population scale with automated grievance redressal and policy execution.", icon: Globe },
              { title: "Data Intelligence", desc: "Moving from simple data collection to actionable decision intelligence for policy makers.", icon: Database }
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
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Outcome-Driven <span className="text-cyan-400">Governance</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Predictive Governance", desc: "Identifying governance blind spots before they become crises through predictive risk management.", icon: BarChart },
              { title: "Trustworthy Automation", desc: "Ensuring accountability in algorithmic governance with ethics-by-design principles.", icon: Shield },
              { title: "Citizen-Centric Design", desc: "Reducing citizen burden through administrative simplicity and inclusive digital access.", icon: Users },
              { title: "Institutional Memory", desc: "Preserving institutional knowledge through AI-driven knowledge management systems.", icon: Database }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-3xl border border-white/10">
                <item.icon className="text-cyan-400 shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
