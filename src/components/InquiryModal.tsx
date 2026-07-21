import { useState, FormEvent } from 'react';
import { X, CheckCircle, Calendar, Phone, Mail, User, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
}

export default function InquiryModal({ isOpen, onClose, propertyTitle }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    investmentBudget: '₦500M - ₦1B',
    message: propertyTitle ? `I would like to schedule a private viewing for ${propertyTitle}.` : 'I am interested in receiving information about Aurelia luxury developments.'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white border border-[#D2DCED] rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 z-10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#C5A059]/20 text-[#B38E46] border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">Private Viewing Scheduled</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.fullName}</span>. Our Senior Private Wealth Advisor will contact you via WhatsApp and phone within 2 hours to confirm your appointment details.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-3 bg-[#C5A059] hover:bg-[#b58f48] text-white font-medium text-sm rounded-lg transition-colors shadow-xs"
                >
                  Return to Website
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[#B38E46] text-xs font-bold tracking-widest uppercase">Private Advisory Service</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                    {propertyTitle ? `Schedule Viewing: ${propertyTitle}` : 'Request Private Portfolio Brochure'}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Experience unmatched luxury firsthand with our discrete personal tour.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Chief / Dr. / Mr. / Mrs. Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Target Investment Range</label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          value={formData.investmentBudget}
                          onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#C5A059]"
                        >
                          <option value="₦500M - ₦1B">₦500M - ₦1B</option>
                          <option value="₦1B - ₦2.5B">₦1B - ₦2.5B</option>
                          <option value="₦2.5B+">₦2.5B+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Requirements or Questions</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b58f48] hover:to-[#c5a059] text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all duration-300 mt-2"
                  >
                    Confirm Private Appointment Request
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
