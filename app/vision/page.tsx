"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  ShieldCheck, 
  TrendingUp, 
  GraduationCap, 
  Globe, 
  Eye, 
  Zap 
} from "lucide-react";

export default function VisionPage() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.trae.ai/90c8853a-c854-476c-829d-64908953930b.png" 
            alt="Vision Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
        </div>

        <div className="relative z-10 w-11/12 md:w-5/6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Vision of <span className="text-cyan-400">Shannom</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-300 mb-8 max-w-4xl mx-auto">
              Building Artificial Intelligence for Human Progress, Public Good, and Global Impact
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              At Shannom, we envision Artificial Intelligence as a transformational force for human advancement, 
              capable of reshaping economies, governance, and everyday life—much like electricity and the internet once did. 
              Our vision is to harness AI not as an abstract technology, but as a practical, ethical, and inclusive enabler of real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VISION PILLARS ================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="w-11/12 md:w-5/6 mx-auto">
          
          {/* AI for All */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-cyan-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI for All, <span className="text-cyan-400">Not Just a Few</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Shannom believes that the true power of AI lies in its ability to democratise opportunity. 
                We are committed to building AI systems that are accessible, inclusive, and meaningful for everyone—across geographies, languages, and socio-economic boundaries.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our vision is to ensure that AI strengthens public services, empowers citizens, and reaches the last mile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://res.cloudinary.com/dwserksvu/image/upload/v1770924721/262210ec-aa0a-451a-80e2-e1dee20f31ec_mqaxo6.jpg" 
                alt="AI for Public Good" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Human-Centric Intelligence */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative aspect-video rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://res.cloudinary.com/dwserksvu/image/upload/v1770924964/fei-fei-li-thumbnail-image_i2miow.jpg" 
                alt="Human-Centric AI" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-cyan-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Human-Centric <span className="text-cyan-400">Intelligence</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We design AI that augments human decision-making rather than replacing it. At Shannom, technology is always guided by human values—empathy, accountability, and trust.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                AI, in our view, must serve people, respect human agency, and operate under clear human oversight.
              </p>
            </motion.div>
          </div>

          {/* Governance & Responsible AI */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-cyan-400" />
                AI for Governance
              </h3>
              <p className="text-gray-400 mb-6">Shannom sees AI as a catalyst for transparent, responsive, and evidence-based governance.</p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Make better decisions using data-driven insights
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Deliver services efficiently and equitably
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Enhance citizen engagement and trust
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="text-cyan-400" />
                Responsible & Trusted AI
              </h3>
              <p className="text-gray-400 mb-6">Trust is foundational to adoption. Shannom is deeply committed to responsible AI development.</p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Bias-aware and explainable AI
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Strong data protection and security
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Accountability across the AI lifecycle
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Innovation with Purpose */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-cyan-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation <span className="text-cyan-400">with Purpose</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Shannom views AI as a powerful engine for economic growth, innovation, and workforce productivity. 
                We aim to help organisations and governments move from experimentation to scalable, real-world AI deployments that deliver measurable value.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our focus is on impact-driven innovation, not technology for its own sake.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://res.cloudinary.com/dwserksvu/image/upload/v1770925260/innovation-cover_tzblee.jpg" 
                alt="Innovation with Purpose" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Capacity Building & Global Good */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-transparent border border-cyan-400/10"
            >
              <GraduationCap className="text-cyan-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Building AI-Ready Institutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Our vision extends beyond solutions to capacity building. Shannom seeks to empower institutions and professionals 
                with AI literacy, data fluency, and decision science capabilities—ensuring sustainable, long-term adoption of AI.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/10"
            >
              <Globe className="text-blue-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Global Good, Rooted Locally</h3>
              <p className="text-gray-300 leading-relaxed">
                Shannom’s vision is global. We aspire to contribute to AI for Global Good, supporting inclusive growth, 
                cross-border collaboration, and balanced global AI governance—ensuring emerging economies are active creators, 
                not passive consumers, of AI.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ================= FINAL VISION STATEMENT ================= */}
      <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.trae.ai/398379c3-718e-4a87-9b43-2415d862f92f.png" 
            alt="Vision Footer" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-11/12 md:w-3/4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-cyan-400 uppercase tracking-widest font-bold mb-8">Our Vision Statement</h2>
            <p className="text-3xl md:text-5xl font-bold italic leading-tight text-white">
              “To build human-centric, responsible AI systems that empower governments, institutions, and communities—driving inclusive growth and lasting public good.”
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
