import React, { useState } from 'react';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenFaq: () => void;
  onOpenVideoPreview: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  viewMode: 'responsive' | 'mobile-mock' | 'desktop-mock';
  onChangeViewMode: (mode: 'responsive' | 'mobile-mock' | 'desktop-mock') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCheckout,
  onOpenFaq,
  onOpenVideoPreview,
  activeTab,
  onSelectTab,
  viewMode,
  onChangeViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-[#f8f9ff]/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
      {/* Top Urgency / Flash Deal Announcement Ribbon */}
      <div className="bg-gradient-to-r from-[#ff6b00] via-[#ea580c] to-[#f59e0b] px-4 py-2 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="material-symbols-outlined text-sm animate-pulse">local_fire_department</span>
            <span className="tracking-wide">
              Flash Deal: <span className="line-through opacity-75">Rs. 15,000</span>{' '}
              <span className="text-[#facc15] font-extrabold text-sm">Rs. 5,000</span> — ALL 15+ Courses (11,264+ Enrolled)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] font-medium opacity-95">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-[#facc15]">verified_user</span>
              100% Money-Back Guarantee
            </span>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-[#25d366]">headset_mic</span>
              1-on-1 WhatsApp Mentorship
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#ea580c] flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#0b1c30]">
                  Ecom<span className="text-[#ea580c]">Skills</span>
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-emerald-200">
                  PRO
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 -mt-0.5 hidden sm:block">
                Academy · Gilgit, Pakistan
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a
            href="#hero"
            onClick={() => onSelectTab('about')}
            className="hover:text-[#ea580c] transition-colors py-1 border-b-2 border-transparent hover:border-[#ea580c]"
          >
            Overview
          </a>
          <a
            href="#curriculum-section"
            onClick={() => onSelectTab('curriculum')}
            className="hover:text-[#ea580c] transition-colors py-1 border-b-2 border-transparent hover:border-[#ea580c]"
          >
            Curriculum
          </a>
          <a
            href="#bundle-section"
            onClick={() => onSelectTab('bundle')}
            className="text-[#ea580c] font-bold py-1 border-b-2 border-[#ea580c] flex items-center gap-1"
          >
            <span>All 15+ Courses</span>
            <span className="text-[10px] bg-orange-100 text-[#ea580c] px-1.5 py-0.2 rounded-full">
              Save 67%
            </span>
          </a>
          <a
            href="#testimonials-section"
            className="hover:text-[#ea580c] transition-colors py-1 border-b-2 border-transparent hover:border-[#ea580c]"
          >
            Student Proofs
          </a>
          <button
            onClick={onOpenFaq}
            className="hover:text-[#ea580c] transition-colors py-1 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Right: Actions, View Mode Selector, Profile Avatar & Enroll Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Screen Preset Toggle (Mobile View / Desktop Standard) */}
          <div className="hidden xl:flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200">
            <button
              onClick={() => onChangeViewMode('responsive')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === 'responsive'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
              title="Fluid responsive web app layout"
            >
              <span className="material-symbols-outlined text-sm">devices</span>
              <span>Responsive</span>
            </button>
            <button
              onClick={() => onChangeViewMode('mobile-mock')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === 'mobile-mock'
                  ? 'bg-white text-[#ea580c] shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
              title="Mobile view matching Image 1"
            >
              <span className="material-symbols-outlined text-sm">smartphone</span>
              <span>Mobile Tab View</span>
            </button>
            <button
              onClick={() => onChangeViewMode('desktop-mock')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                viewMode === 'desktop-mock'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
              title="Standard desktop matching Image 3"
            >
              <span className="material-symbols-outlined text-sm">desktop_windows</span>
              <span>Desktop Standard</span>
            </button>
          </div>

          <button
            onClick={onOpenVideoPreview}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-sm text-[#ea580c]">play_circle</span>
            <span>Free Sample Video</span>
          </button>

          <button
            onClick={onOpenCheckout}
            className="h-10 px-4 sm:px-5 bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#d9480f] text-white rounded-full font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Enroll Now — Rs. 5,000</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>

          <div
            className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-orange-200 shrink-0 cursor-pointer"
            title="Logged in as student"
            onClick={onOpenCheckout}
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1XonSIQ-P4-SZzMH8jFJkh9m9vQT73_xkAkLKxFTtIHQQikZDlN3MXt_0R4RWcy_0zsNjdAMko-A6jc_Hs1UyOkVmDQZM4fgt1Ryt_q2pLxskJnSjBBVj-Ic7PgfOJgLpNstp6Np4d5ZJ244E04vX6RziCTE7TOwtxGDJM7XkvLkEOXJaywDmDj1RREk9xfprHlhFjnetWZA4Ij3TozH2fGZGYuuGwdXIPyuwXfOpvJO4R3FL5y03ORM-w"
              alt="Student Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 shadow-xl">
          <div className="flex flex-col gap-2">
            <div className="p-3 bg-orange-50 rounded-xl mb-2 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-orange-900 block">Flash All-Access Deal</span>
                <span className="text-[11px] text-orange-700">15+ Master Courses for PKR 5,000</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="px-3 py-1.5 bg-[#ea580c] text-white text-xs font-bold rounded-lg"
              >
                Claim Now
              </button>
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
              Screen View Presets
            </div>
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              <button
                onClick={() => {
                  onChangeViewMode('responsive');
                  setMobileMenuOpen(false);
                }}
                className={`p-2 text-center text-xs rounded-lg border ${
                  viewMode === 'responsive'
                    ? 'border-[#ea580c] bg-orange-50 text-[#ea580c] font-bold'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                Responsive
              </button>
              <button
                onClick={() => {
                  onChangeViewMode('mobile-mock');
                  setMobileMenuOpen(false);
                }}
                className={`p-2 text-center text-xs rounded-lg border ${
                  viewMode === 'mobile-mock'
                    ? 'border-[#ea580c] bg-orange-50 text-[#ea580c] font-bold'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                Mobile View
              </button>
              <button
                onClick={() => {
                  onChangeViewMode('desktop-mock');
                  setMobileMenuOpen(false);
                }}
                className={`p-2 text-center text-xs rounded-lg border ${
                  viewMode === 'desktop-mock'
                    ? 'border-[#ea580c] bg-orange-50 text-[#ea580c] font-bold'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                Desktop
              </button>
            </div>

            <a
              href="#hero"
              onClick={() => {
                onSelectTab('about');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Course Overview</span>
              <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
            </a>
            <a
              href="#curriculum-section"
              onClick={() => {
                onSelectTab('curriculum');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Curriculum & Lessons</span>
              <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
            </a>
            <a
              href="#bundle-section"
              onClick={() => {
                onSelectTab('bundle');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-sm font-bold text-[#ea580c] rounded-lg bg-orange-50/50 flex items-center justify-between"
            >
              <span>Full 15+ Course Bundle</span>
              <span className="text-[10px] bg-[#ea580c] text-white px-1.5 py-0.5 rounded font-extrabold">
                Rs. 5,000
              </span>
            </a>
            <a
              href="#testimonials-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Student Earnings Proofs</span>
              <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFaq();
              }}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Frequently Asked Questions</span>
              <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
            </button>
            <a
              href="https://wa.me/923555317704"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-semibold text-[#128c7e] rounded-lg bg-emerald-50 flex items-center gap-2 mt-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Admission Advisor (+92 355 5317704)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
