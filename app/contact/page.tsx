"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@shannom.ai",
      href: "mailto:contact@shannom.ai",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7292983587",
      href: "tel:+917292983587",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/shannom/",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/shannomai",
      color: "hover:text-[#1877f2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/shannom_ai/",
      color: "hover:text-[#e4405f]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/shannom_ai",
      color: "hover:text-[#1da1f2]",
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative w-11/12 md:w-5/6 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Build With <span className="text-cyan-400">ShannOm</span>
          </motion.h1>

          

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your vision into intelligent reality? Let&apos;s collaborate to build the future of AI-driven public infrastructure and governance.
          </motion.p>
        </div>
      </section>

      {/* ================= DIRECT CONTACT SECTION ================= */}
      <section className="py-20">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative block p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-500 rounded-3xl" />
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-cyan-400" size={32} />
                  </div>
                  <span className="text-sm uppercase tracking-widest text-cyan-400/60 font-semibold mb-2">
                    {item.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA SECTION ================= */}
      <section className="py-20 pb-32">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Follow Our Journey</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 ${social.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300 group`}
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <social.icon size={28} />
                </div>
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
