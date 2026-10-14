import React from 'react';

interface FooterProps {
  onOpenCheckout: () => void;
  onOpenFaq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout, onOpenFaq }) => {
  return (
    <footer className="w-full bg-[#070b14] text-white pt-12 pb-24 sm:pb-12 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          {/* Col 1: Platform Overview */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c] flex items-center justify-center text-white font-bold">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                Ecom<span className="text-[#ea580c]">Skills</span>
              </span>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                PAKISTAN
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Pakistan's all-in-one platform for actionable money-making digital skills. Learn directly from practitioners who earn in international currencies every day.
            </p>

            {/* Platform Stats Counters */}
            <div className="flex items-center gap-4 pt-2 text-xs">
              <div>
                <span className="font-heading font-extrabold text-white text-base block">11,264+</span>
                <span className="text-[11px] text-slate-400">Active Students</span>
              </div>
              <div className="w-px h-7 bg-slate-800"></div>
              <div>
                <span className="font-heading font-extrabold text-white text-base block">15+</span>
                <span className="text-[11px] text-slate-400">Master Courses</span>
              </div>
              <div className="w-px h-7 bg-slate-800"></div>
              <div>
                <span className="font-heading font-extrabold text-emerald-400 text-base block">95%</span>
                <span className="text-[11px] text-slate-400">5-Star Feedback</span>
              </div>
            </div>
          </div>

          {/* Col 2: Course Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Popular Programs
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-[#ea580c] transition-colors flex items-center justify-between">
                  <span>TikTok Ads Mastery (Urdu)</span>
                  <span className="text-[10px] text-orange-400 font-bold">Top Pick</span>
                </a>
              </li>
              <li>
                <a href="#bundle-section" className="hover:text-[#ea580c] transition-colors">
                  Shopify & Local Pakistan COD
                </a>
              </li>
              <li>
                <a href="#bundle-section" className="hover:text-[#ea580c] transition-colors">
                  Meta (Facebook & Insta) Ads
                </a>
              </li>
              <li>
                <a href="#bundle-section" className="hover:text-[#ea580c] transition-colors">
                  Premiere Pro & CapCut Video Editing
                </a>
              </li>
              <li>
                <a href="#bundle-section" className="hover:text-[#ea580c] transition-colors">
                  Amazon FBA Wholesale & PL
                </a>
              </li>
              <li>
                <a href="#bundle-section" className="hover:text-[#ea580c] transition-colors">
                  Fiverr & Upwork Freelancing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & FAQ */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenCheckout}
                  className="hover:text-[#ea580c] transition-colors text-left"
                >
                  All-Access Rs. 5,000 Bundle
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFaq}
                  className="hover:text-[#ea580c] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Student FAQ & Refund Terms</span>
                  <span className="material-symbols-outlined text-xs">help_outline</span>
                </button>
              </li>
              <li>
                <a href="#testimonials-section" className="hover:text-[#ea580c] transition-colors">
                  Student Earning Proofs
                </a>
              </li>
              <li>
                <a href="https://wa.me/923555317704" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  Contact Admissions Mentor (+92 355 5317704)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Human Support Contact Card */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Talk To A Human
            </h4>

            {/* Location Card */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-orange-600/20 text-[#ea580c] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-base">location_on</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xs text-white block">
                  Campus &amp; Operations
                </span>
                <span className="text-[11px] text-slate-400">Gilgit, Gilgit-Baltistan, Pakistan</span>
              </div>
            </div>

            <a
              href="https://wa.me/923555317704?text=Hi%2C%20I%20have%20questions%20about%20the%20EcomSkills%20Rs.%205000%20All-Access%20Bundle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#25d366] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">chat</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-xs text-white block">
                    WhatsApp — Quick Reply
                  </span>
                  <span className="text-[11px] text-slate-400">+92 355 5317704 (0355-5317704)</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors text-sm">
                arrow_forward
              </span>
            </a>

            <a
              href="mailto:ku5558823@gmail.com"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">mail</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-xs text-white block">
                    Email Support
                  </span>
                  <span className="text-[11px] text-slate-400">ku5558823@gmail.com</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Popular Tags & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 EcomSkills Pakistan (Gilgit Office). All Rights Reserved. 100% Secure Checkout.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Built with 💛 in Gilgit, Pakistan — for hustlers everywhere.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
