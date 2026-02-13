"use client";

import { motion } from "framer-motion";
import { Users, Shield, Target } from "lucide-react";
import Image from "next/image";

export default function DEIPage() {
  return (
    <div className="overflow-hidden bg-[#050d14]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1573161158365-598ecd33b942?auto=format&fit=crop&w=1920&q=80"
            alt="DEI Background"
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
            Diversity, <span className="text-cyan-400">Equity & Inclusion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed"
          >
            At Shannom AI, we believe that diverse perspectives are the fuel for innovation. 
            We are committed to building a culture where everyone feels seen, heard, and empowered to contribute.
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
            &quot;Building a future where technology reflects the diversity of the world it serves.&quot;
          </motion.p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative py-28 bg-[#07121c]">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-cyan-400" size={32} />,
                title: "Inclusive Teams",
                desc: "We actively recruit from diverse backgrounds to ensure our team represents a wide range of experiences and ideas."
              },
              {
                icon: <Shield className="text-cyan-400" size={32} />,
                title: "Equitable AI",
                desc: "We implement rigorous testing to identify and mitigate bias in our AI models, ensuring fair outcomes for everyone."
              },
              {
                icon: <Target className="text-cyan-400" size={32} />,
                title: "Global Impact",
                desc: "Our solutions are designed to be accessible and beneficial to underserved communities around the globe."
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

      {/* Commitment Section */}
      <section className="relative py-32 bg-cyan-400">
        <div className="relative w-11/12 md:w-5/6 mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">Our Continuous Commitment</h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto font-medium leading-relaxed">
            DEI is not a destination, but a journey. We are dedicated to transparent reporting, 
            ongoing education, and constant improvement of our inclusive practices.
          </p>
        </div>
      </section>
    </div>
  );
}
