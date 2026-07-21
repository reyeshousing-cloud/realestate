import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Penthouse Collection',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How do I schedule a private viewing for Banana Island or Ikoyi residences?',
      a: 'You can submit our advisory form, call our private line at +234 812 345 6789, or tap the WhatsApp button to chat directly with a Senior Advisory Officer. Private tours are arranged 7 days a week with 24 hours advance notice.'
    },
    {
      q: 'What are the standard payment plan options for off-plan properties?',
      a: 'We offer structured payment milestones starting with a 15% - 20% initial deposit. The remaining balance is spread across 12 to 24 months tied directly to structural construction milestones.'
    },
    {
      q: 'Are land titles and Governor’s Consent fully perfected for all Aurelia projects?',
      a: 'Yes. Every property in our portfolio possesses verified Certificates of Occupancy (C of O) and fully executed Governor’s Consent documents. Title perfection is guaranteed upon final key delivery.'
    },
    {
      q: 'Can foreign nationals or diaspora buyers acquire property through Aurelia?',
      a: 'Absolutely. We specialize in seamless diaspora acquisitions with dedicated USD, GBP, and EUR payment channels, remote virtual tour walk-throughs, and legal title handling.'
    }
  ];

  return (
    <div className="bg-[#EBF1F7] text-slate-900 min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <span className="text-[#B38E46] text-xs font-bold uppercase tracking-widest">
            Private Advisory Service
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
            Connect with Our Advisory Desk
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl font-light">
            Whether inquiring about off-plan penthouses or scheduling a private yacht walk-through in Banana Island, our Senior Advisors are at your service.
          </p>
        </motion.div>
      </div>

      {/* Main Grid: Left Form & Right Contact Details + Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        
        {/* Contact Form UI (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-[#D2DCED] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
            Send a Private Message
          </h2>
          <p className="text-slate-500 text-xs mb-6 font-light">
            Please fill in your details below. A Senior Wealth Officer will respond within 2 hours.
          </p>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#C5A059]/20 text-[#B38E46] border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Message Received</h3>
              <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Your inquiry regarding {formData.interest} has been assigned to our Ikoyi Advisory Desk.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#C5A059] text-white font-semibold text-xs rounded-xl hover:bg-[#b58f48] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Chief / Dr. / Mr. / Mrs. Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Area of Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Penthouse Collection">Ikoyi Penthouse Collection</option>
                    <option value="Waterfront Villa">Banana Island Waterfront Villa</option>
                    <option value="Eko Atlantic">Eko Atlantic Oceanfront Suites</option>
                    <option value="Commercial Tower">Commercial Executive Offices</option>
                    <option value="General Investment">Private Wealth Investment Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message or Inquiry *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe your timeline, preferred location, or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b58f48] hover:to-[#c5a059] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Private Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Office Details & Embedded Map Placeholder (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Info Box */}
          <div className="bg-white border border-[#D2DCED] rounded-2xl p-6 shadow-xs space-y-5">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Ikoyi Corporate Headquarters
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Aurelia Tower</span>
                  <span className="text-slate-500">Plot 1204 Kingsway Road, Ikoyi, Lagos, Nigeria</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Advisory Desk Direct</span>
                  <span className="text-slate-500">+234 812 345 6789 / +234 1 234 5678</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Email Concierge</span>
                  <span className="text-slate-500">advisory@aureliadevelopments.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Advisory Desk Hours</span>
                  <span className="text-slate-500">Monday - Saturday: 8:00 AM - 7:00 PM WAT</span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Direct CTA */}
            <a
              href="https://wa.me/2348123456789?text=Hi%2C%20I%20would%20like%20to%20connect%20with%20an%20Aurelia%20Senior%20Advisor."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>

          {/* Embedded Map Box Placeholder */}
          <div className="bg-white border border-[#D2DCED] rounded-2xl p-6 shadow-xs space-y-3">
            <h4 className="font-serif text-sm font-bold text-slate-900">Office Location Map</h4>
            <div className="relative h-48 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 space-y-2">
                <MapPin className="w-8 h-8 text-[#C5A059] mx-auto animate-bounce" />
                <p className="text-xs font-bold text-slate-900">Kingsway Road, Ikoyi, Lagos</p>
                <a
                  href="https://maps.google.com/?q=Kingsway+Road+Ikoyi+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 bg-slate-100 text-[#B38E46] text-[11px] font-bold rounded-md hover:bg-[#C5A059] hover:text-white transition-colors border border-slate-200"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-[#B38E46] text-xs font-bold uppercase tracking-widest">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Common Investor Inquiries
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D2DCED] rounded-xl overflow-hidden transition-colors shadow-2xs"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 focus:outline-none hover:text-[#B38E46]"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C5A059] transition-transform duration-300 shrink-0 ${
                    activeFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-5 pb-5 text-xs text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
