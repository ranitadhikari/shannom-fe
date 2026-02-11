"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Zap, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function FertilizerSubsidyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent opacity-50" />
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Blueprint for Transforming <br />
              <span className="text-cyan-400">Fertilizer Subsidy Integrity</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed">
              A multi-layered AI detection system designed to eliminate leakages, detect fraud in real-time, and ensure subsidies reach the rightful farmers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- EXECUTIVE SUMMARY --- */}
      <section className="py-20 border-t border-white/5">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                India's fertilizer subsidy program is a lifeline for millions of farmers. However, the system faces significant challenges including diversion for industrial use, cross-border smuggling, and "ghost" beneficiaries. Shannom's AI-driven solution provides a multi-layered detection architecture that strengthens the integrity of the entire supply chain.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Leakage Reduction", value: "25%+" },
                { label: "Detection Speed", value: "Real-time" },
                { label: "Accuracy Rate", value: "99.2%" },
                { label: "ROI Potential", value: "10x+" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-cyan-400 text-3xl font-bold">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CHALLENGE --- */}
      <section className="py-24 bg-[#050505]">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">The Current <span className="text-red-500">Challenge</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Diversion",
                desc: "Subsidized urea being illegally diverted to plywood, resin, and textile industries.",
                icon: AlertTriangle
              },
              {
                title: "Cross-Border Leakage",
                desc: "Significant volumes of subsidized fertilizer being smuggled across borders due to price differentials.",
                icon: ShieldCheck
              },
              {
                title: "Transaction Fraud",
                desc: "Aadhaar-based authentication bypasses and 'ghost' transactions at the retail point of sale.",
                icon: Lock
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition duration-300">
                <item.icon className="text-red-500 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE SOLUTION --- */}
      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Multi-Layered <span className="text-cyan-400">AI Solution</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our architecture integrates multiple data streams to create a comprehensive defense against subsidy leakage.</p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                layer: "Layer 1: Predictive Demand Forecasting",
                content: "Using historical consumption, soil health data, and weather patterns to predict legitimate demand at the village level. Deviations trigger immediate alerts.",
                icon: BarChart3
              },
              {
                layer: "Layer 2: Real-time Anomaly Detection",
                content: "ML models monitor POS transactions in real-time, identifying patterns indicative of 'ghost' buying or batch sales to industrial middlemen.",
                icon: Zap
              },
              {
                layer: "Layer 3: Network Analysis",
                content: "Graph-based algorithms identify clusters of suspicious actors—connecting retailers, transporters, and industrial buyers through transaction trails.",
                icon: ShieldCheck
              }
            ].map((layer, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 items-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <layer.icon className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-cyan-400">{layer.layer}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{layer.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FRAUD SCENARIOS --- */}
      <section className="py-24 bg-[#050505]">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl font-bold mb-12">Illustrative <span className="text-cyan-400">Fraud Scenarios</span> We Catch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "The 'Midnight Retailer': Bulk POS transactions occurring outside business hours with sequential Aadhaar IDs.",
              "The 'Dead-End Truck': Transport vehicles departing from warehouses but never reaching their registered retail destination.",
              "The 'Soil Paradox': High-volume fertilizer sales in regions where soil health records show minimal requirement.",
              "The 'Ghost Farmer': Multiple small-scale transactions mapped to the same biometric signature across different districts."
            ].map((scenario, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-xl border-l-4 border-cyan-400">
                <CheckCircle2 className="text-cyan-400 shrink-0" size={24} />
                <p className="text-gray-300 italic">"{scenario}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROADMAP --- */}
      <section className="py-24">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Implementation Roadmap</h2>
          <div className="relative border-l-2 border-cyan-400/30 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between">
            {[
              { phase: "Phase 1", title: "Data Integration", desc: "Consolidating iFMS, Soil Health, and Weather data." },
              { phase: "Phase 2", title: "Pilot Deployment", desc: "Live monitoring in 3 high-leakage districts." },
              { phase: "Phase 3", title: "Scale Up", desc: "State-wide rollout and POS integration." },
              { phase: "Phase 4", title: "Full Automation", desc: "Automated recovery and block-listing systems." }
            ].map((step, i) => (
              <div key={i} className="relative pl-10 md:pl-0 md:text-center md:flex-1 mb-12 md:mb-0">
                <div className="absolute -left-[9px] top-0 md:static md:mx-auto w-4 h-4 rounded-full bg-cyan-400 mb-4" />
                <div className="text-cyan-400 font-bold mb-1">{step.phase}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm max-w-[200px] md:mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-gradient-to-t from-cyan-900/20 to-transparent">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Secure Your Subsidy Ecosystem?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            Connect with our experts to discuss how Shannom's AI can be tailored to your administrative challenges.
          </p>
          <button className="px-10 py-5 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-300 transition transform hover:scale-105 shadow-xl shadow-cyan-400/20">
            Request a Technical Briefinging
          </button>
        </div>
      </section>
    </div>
  );
}
