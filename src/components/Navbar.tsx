import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Sparkles } from 'lucide-react';
import InquiryModal from './InquiryModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Condos', path: '/properties?type=Penthouse' },
    { name: 'Houses', path: '/properties?type=Waterfront Villa' },
    { name: 'Commercial', path: '/properties?type=Commercial Tower' },
    { name: 'For rent', path: '/properties?status=Selling Fast' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/60 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-sans font-bold text-2xl tracking-tight text-slate-950">
              Estately
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-slate-950 ${
                    isActive ? 'text-slate-950 font-semibold' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <span className="text-slate-300 font-bold">•</span>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors hover:text-slate-950 ${
                  isActive ? 'text-slate-950 font-semibold' : 'text-slate-600'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors hover:text-slate-950 ${
                  isActive ? 'text-slate-950 font-semibold' : 'text-slate-600'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Currency Pill Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {showCurrencyDropdown && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-slate-200 rounded-2xl shadow-lg py-1.5 z-50 text-xs font-medium">
                  {['USD', 'NGN', 'EUR', 'GBP'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setShowCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-1.5 hover:bg-slate-50 ${
                        currency === curr ? 'font-bold text-slate-950 bg-slate-50' : 'text-slate-600'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Log in Button */}
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-5 py-2 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              Log in
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 font-medium text-slate-800 text-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-slate-950"
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-slate-950"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-slate-950"
              >
                Contact
              </NavLink>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold">Currency:</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="text-xs bg-slate-100 border border-slate-200 rounded-lg px-2 py-1 font-bold text-slate-800"
                >
                  <option value="USD">USD</option>
                  <option value="NGN">NGN</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInquiryModalOpen(true);
                }}
                className="px-5 py-2 bg-slate-950 text-white font-semibold text-xs rounded-full"
              >
                Log in
              </button>
            </div>
          </div>
        )}
      </header>

      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </>
  );
}

