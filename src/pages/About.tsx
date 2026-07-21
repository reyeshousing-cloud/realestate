import { useState } from 'react';
import { companyStats, teamMembers, awards } from '../data/company';
import InquiryModal from '../components/InquiryModal';
import { Award, ShieldCheck, Building2, Linkedin, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <div className="bg-[#EBF1F7] text-slate-900 min-h-screen pt-28 pb-20">
      
      {/* 1. HERO STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[#B38E46] text-xs font-bold uppercase tracking-widest">
              The Aurelia Heritage
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Eighteen Years of Crafting West Africa’s Most Prestigious Skylines
            </h1>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              Founded in 2008 by visionary architect Oluwaseun Adeyemi, Aurelia Luxury Developments was established with a singular objective: to redefine high-density luxury living across West Africa through world-class engineering, acoustic privacy, and architectural mastery.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
              Today, Aurelia stands as the premier benchmark for ultra-luxury penthouses, deep-water waterfront estates in Banana Island, and sustainable smart towers in Eko Atlantic City. Every project represents an enduring asset designed for multi-generational wealth preservation.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-6 py-3 bg-[#C5A059] hover:bg-[#b58f48] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                Schedule Private Executive Consultation
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-[#D2DCED] shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                alt="Aurelia Architecture"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 border border-[#D2DCED] rounded-xl backdrop-blur-md shadow-md">
                <span className="text-[#B38E46] text-xs font-bold uppercase tracking-wider block">Our Corporate Philosophy</span>
                <p className="font-serif text-sm font-bold text-slate-900 mt-1">
                  “Architecture is not merely about space; it is about creating sanctuaries of security, grandeur, and legacy.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-white border-y border-[#D2DCED] py-16 mb-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#B38E46]">
                  {stat.value}
                </span>
                <h3 className="text-slate-900 font-bold text-sm">{stat.label}</h3>
                <p className="text-slate-500 text-xs font-light">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE LEADERSHIP TEAM */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[#B38E46] text-xs font-bold uppercase tracking-widest">
            Visionary Stewardship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Executive Board & Leadership Team
          </h2>
          <p className="text-slate-600 text-xs font-light">
            Our multi-disciplinary team combines global architecture credentials with decades of West African structural engineering expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-[#D2DCED] rounded-2xl overflow-hidden shadow-xs hover:border-[#C5A059] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#B38E46] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-[#B38E46] text-xs font-semibold block">
                    {member.role}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed pt-1 font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={member.linkedin || '#'}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#B38E46] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AWARDS & CERTIFICATIONS */}
      <section id="awards" className="bg-[#DFE7F2] border-y border-[#C8D5E8] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#B38E46] text-xs uppercase tracking-wider border border-[#C5A059]/30 font-bold shadow-2xs">
              <Award className="w-3.5 h-3.5" />
              <span>International Recognition</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Certifications & Industry Accolades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#D2DCED] rounded-2xl flex items-start gap-4 shadow-xs"
              >
                <div className="p-3 rounded-xl bg-[#C5A059]/10 text-[#B38E46] border border-[#C5A059]/30 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[#B38E46] text-xs font-bold font-mono block">
                    {award.year}
                  </span>
                  <h4 className="font-serif text-base font-bold text-slate-900 mt-0.5">
                    {award.title}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">
                    Awarded by: {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEGAL & TITLE GUARANTEE COMMITMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D2DCED] rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <ShieldCheck className="w-12 h-12 text-[#C5A059] mx-auto" />
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 max-w-2xl mx-auto">
            100% Verified Governor’s Consent & Clean Title Guarantee
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            All Aurelia developments are backed by perfected Certificate of Occupancy (C of O) and Governor’s Consent documents. Our internal legal team manages smooth title transfers with the Lagos State Lands Bureau on behalf of every buyer.
          </p>

          <button
            onClick={() => setInquiryModalOpen(true)}
            className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#b58f48] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
          >
            Request Private Legal Briefing
          </button>
        </div>
      </section>

      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </div>
  );
}
