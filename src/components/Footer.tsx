import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Check, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSuccess(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-sans font-bold text-2xl tracking-tight text-slate-950">
                Estately
              </span>
            </Link>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Real estate for living and investments. Premium curated condos, houses, commercial suites, and rentals across top metropolitan cities.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>San Jose, CA & International Headquarters</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>+1 (800) 555-ESTATE</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>hello@estately.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-sans text-xs font-bold text-slate-950 tracking-wider uppercase">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/properties?type=Penthouse" className="hover:text-slate-950 transition-colors">
                  Condos & Penthouses
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Waterfront+Villa" className="hover:text-slate-950 transition-colors">
                  Houses & Villas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Commercial+Tower" className="hover:text-slate-950 transition-colors">
                  Commercial Properties
                </Link>
              </li>
              <li>
                <Link to="/properties?status=Selling+Fast" className="hover:text-slate-950 transition-colors">
                  Properties for Rent
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-sans text-xs font-bold text-slate-950 tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-slate-950 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-950 transition-colors">
                  Contact Advisors
                </Link>
              </li>
              <li>
                <a href="#privacy" className="hover:text-slate-950 transition-colors">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-sans text-xs font-bold text-slate-950 tracking-wider uppercase">
              Newsletter
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get notified of new listings and market updates in your area.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-950"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs rounded-full transition-colors shadow-xs"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Estately Real Estate Inc. All rights reserved.</p>

          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" className="hover:text-slate-950 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-slate-950 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-slate-950 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-slate-950 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

