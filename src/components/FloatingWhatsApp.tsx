import { useState } from 'react';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWhatsAppProps {
  propertyName?: string;
}

export default function FloatingWhatsApp({ propertyName }: FloatingWhatsAppProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = propertyName
    ? `Hi, I'm interested in ${propertyName}. Please send me more details.`
    : `Hi! I'm browsing Estately and have a question.`;

  const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip Card (Shown on click or if tooltip toggled) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-slate-200 text-slate-900 p-4 rounded-2xl shadow-2xl max-w-xs relative text-sm space-y-2 mb-1"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-800 p-1 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-xs text-slate-900">Estately Concierge</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Have questions about properties, tours, or pricing? Chat directly with an advisor on WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-between px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full transition-colors shadow-xs"
            >
              <span>Start Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Expandable WhatsApp Widget */}
      <div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onTouchStart={() => setIsExpanded(!isExpanded)}
        className="relative group flex items-center justify-end"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-out rounded-full overflow-hidden p-2"
        >
          {/* Online green indicator dot */}
          <span className="absolute top-0.5 right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300 border border-white"></span>
          </span>

          {/* Tiny WhatsApp Icon when idle, expands when hovered */}
          <MessageCircle className="w-4 h-4 fill-white stroke-none shrink-0" />

          {/* Expandable Label on Hover or Touch */}
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                animate={{ opacity: 1, width: 'auto', marginLeft: 4 }}
                exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="whitespace-nowrap text-xs font-medium tracking-wide pr-2 overflow-hidden"
              >
                Chat on WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
        </a>
      </div>
    </div>
  );
}

