import React from 'react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onOpenVideoPreview: () => void;
  seatsRemaining: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCheckout,
  onOpenVideoPreview,
  seatsRemaining,
}) => {
  return (
    <section id="hero" className="w-full flex flex-col">
      {/* Micro Ribbon & Breadcrumb Bar */}
      <div className="bg-[#eff4ff] border-b border-slate-200/70 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-[#ea580c] transition-colors">Home</a>
            <span>/</span>
            <a href="#bundle-section" className="hover:text-[#ea580c] transition-colors">Courses</a>
            <span>/</span>
            <span className="text-slate-900 font-bold">TikTok Ads (C002)</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 bg-orange-100/90 text-[#9d4300] px-3 py-0.5 rounded-full text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-sm text-[#ea580c]">local_fire_department</span>
            <span>Batch 2026 Selling Fast • Only {seatsRemaining} Seats Remaining</span>
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Headlines & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Value Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-orange-200/60 text-[#ea580c] text-xs font-bold shadow-2xs">
              <span className="material-symbols-outlined text-sm text-amber-500 material-symbols-filled">stars</span>
              <span>⭐ Included in the Rs. 5,000 All-Access Membership</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#ffdbca] text-[#783200] text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Course C002
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Updated Weekly · Official Batch 2026
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0b1c30] tracking-tight leading-[1.15]">
                TikTok Ads Mastery{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ea580c]">
                  — Skills for Millionaires.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
                Master the exact playbook for creating viral, high-converting TikTok Ads, campaign scaling, agency setup, and high-ROI local Pakistan dropshipping and global Shopify stores.
              </p>
            </div>

            {/* Quick Stats Bento Grid (2 cols on mobile, 3-4 cols on tablet/desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#eff4ff]">
                <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-[#ea580c] shrink-0">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 font-medium leading-tight">Level</span>
                  <span className="font-heading font-bold text-xs text-slate-900 truncate block">Beg - Advanced</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#eff4ff]">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <span className="material-symbols-outlined text-lg">groups</span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 font-medium leading-tight">Enrolled</span>
                  <span className="font-heading font-bold text-xs text-[#ea580c] truncate block">11,264+ Students</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#eff4ff]">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <span className="material-symbols-outlined text-lg">support_agent</span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 font-medium leading-tight">Mentor Support</span>
                  <span className="font-heading font-bold text-xs text-slate-900 truncate block">1-on-1 WhatsApp</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#eff4ff]">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <span className="material-symbols-outlined text-lg">all_inclusive</span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 font-medium leading-tight">Access</span>
                  <span className="font-heading font-bold text-xs text-slate-900 truncate block">Lifetime Validity</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#eff4ff]">
                <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                  <span className="material-symbols-outlined text-lg">devices</span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 font-medium leading-tight">Learn On</span>
                  <span className="font-heading font-bold text-xs text-slate-900 truncate block">Mobile & PC</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#eff4ff]">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                  <span className="material-symbols-outlined text-lg">verified</span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 font-medium leading-tight">Certificate</span>
                  <span className="font-heading font-bold text-xs text-slate-900 truncate block">Free Verified</span>
                </div>
              </div>
            </div>

            {/* Quick Purchase & Value Callout Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-bold block">
                    Special Bundle Pass
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#ea580c] leading-none">
                      Rs. 5,000
                    </span>
                    <span className="text-slate-400 line-through text-xs font-semibold">
                      Rs. 15,000
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-2.5 py-1 rounded-full border border-emerald-200">
                    Save 67% Today
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">One-time payment</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={onOpenCheckout}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[#ff6b00] via-[#ea580c] to-[#d9480f] hover:from-[#ea580c] hover:to-[#c23e08] text-white font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/30 active:scale-98 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  <span>Enroll Now — Rs. 5,000</span>
                </button>

                <button
                  onClick={onOpenVideoPreview}
                  className="w-full h-12 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-heading font-bold text-sm flex items-center justify-center gap-2 border border-slate-200 active:scale-98 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg text-[#ea580c]">play_circle</span>
                  <span>Watch Free Sample</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  One single payment unlocks TikTok Ads + 15 more courses for life.
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-amber-600 font-bold">
                  ★ 4.9/5 Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Video Visual Card with Preview Trigger */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div
              onClick={onOpenVideoPreview}
              className="relative w-full rounded-2xl overflow-hidden shadow-lg border-2 border-orange-500/40 bg-slate-900 aspect-16/10 group cursor-pointer"
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WP01vZPGmV6FohE_EDFSbp9gYLbeDTyTqOKGIHqQlmI22p5MnkkH8hwb_2UQ-3tD1IUW0MgutiXwDuJ_oFvlS5LLkVfaj2QNDMelGmNVe35ubBCUpdbbXtZHU4Cv1hyLPsaueHd-EECBZZnK5LMwTKHjJlzw0A9jwqYDGlysOhgfUULsg1V4eCuwmEFHCE5woffx4zdeM-xUCpqFDsm1_ud6WdoOBUPNPGZQ7A5NoYRVPWABuaRDY2nyk"
                alt="TikTok Ads Mastery Course Banner"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Dark Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-4">
                {/* Top Badges */}
                <div className="flex items-center justify-between w-full">
                  <span className="bg-[#ff6b00] text-white text-[11px] font-heading uppercase px-2.5 py-1 rounded-full font-bold shadow-xs flex items-center gap-1">
                    <span>Top Performing</span>
                    <span>🔥</span>
                  </span>

                  <span className="bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Urdu Medium</span>
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="self-center my-auto flex flex-col items-center gap-2 group-hover:scale-110 transition-transform">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#ff6b00] to-[#f59e0b] text-white flex items-center justify-center shadow-xl shadow-orange-500/50 ring-4 ring-white/30">
                    <span className="material-symbols-outlined text-3xl material-symbols-filled ml-0.5">play_arrow</span>
                  </div>
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    Click to Preview Lesson (Free)
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="flex items-center justify-between text-white text-xs">
                  <div>
                    <span className="text-amber-400 text-[10px] uppercase font-bold tracking-wider block">
                      Urdu & Hindi HD Masterclass
                    </span>
                    <span className="font-heading font-bold text-sm">38 Video Lessons · 8.5 Hours</span>
                  </div>
                  <span className="text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded backdrop-blur-xs">
                    Case Studies Included
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Practical Trust Card */}
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-lg">verified</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-xs text-slate-900 block leading-tight">
                    100% Practical Demonstration
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Real campaign dashboard screens & live spend
                  </span>
                </div>
              </div>
              <a
                href="#testimonials-section"
                className="text-xs font-bold text-[#ea580c] hover:underline"
              >
                View Proofs →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Attributes Bar Below Hero */}
      <div className="w-full bg-white border-y border-slate-200/80 py-4 px-4 sm:px-6 shadow-2xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ea580c] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">schedule</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">Learning Mode</span>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">Online, Self-Paced</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">devices</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">Learn On</span>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">Mobile & PC Compatible</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">replay</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">Course Replays</span>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">Unlimited Access</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">all_inclusive</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">Access Type</span>
              <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">Lifetime Validity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
