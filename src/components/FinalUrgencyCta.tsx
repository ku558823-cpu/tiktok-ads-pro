import React, { useState, useEffect } from 'react';

interface FinalUrgencyCtaProps {
  onOpenCheckout: () => void;
  seatsRemaining: number;
}

export const FinalUrgencyCta: React.FC<FinalUrgencyCtaProps> = ({
  onOpenCheckout,
  seatsRemaining,
}) => {
  // Live countdown to midnight PKT
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#0b0f19] py-14 sm:py-20 px-4 sm:px-6 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#ff6b00]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Hourglass Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center text-3xl shadow-lg relative z-10">
          ⏳
        </div>

        {/* Live Countdown Timer Badges */}
        <div className="relative z-10 flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-4 py-2 rounded-2xl shadow-inner">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            Special Pricing Closes In:
          </span>
          <div className="flex items-center gap-1 font-mono font-bold text-xs text-white">
            <span className="bg-slate-800 px-2 py-1 rounded text-[#ea580c]">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-[#ea580c]">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-[#ea580c]">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="relative z-10 font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl">
          One Year From Now, You'll Wish You Started Today.
        </h2>

        {/* Value Subtitle */}
        <p className="relative z-10 text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl">
          Every top earner you admire was once a beginner who refused to wait. 11,264+ students have already started scaling their digital careers in Pakistan.
        </p>

        {/* Badge Pill */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-heading font-bold text-[#facc15] border border-white/10">
          Your Complete 15+ Course Toolkit • One-Time Rs. 5,000 (Batch 2026: {seatsRemaining} Seats Left)
        </div>

        {/* Big Conversion Button */}
        <div className="relative z-10 w-full sm:w-auto">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] via-[#ea580c] to-[#d9480f] hover:from-[#ea580c] hover:to-[#c23e08] text-white font-heading font-extrabold text-base flex items-center justify-center gap-2 shadow-2xl shadow-orange-500/40 active:scale-98 transition-all cursor-pointer"
          >
            <span>Start Today — Rs. 5,000</span>
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>

        <p className="relative z-10 text-xs text-slate-400">
          Change your mind? Full refund, zero questions. The only risk is waiting.
        </p>

        {/* Trust Badges Footer Row */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-slate-300 pt-6 border-t border-slate-800/80 w-full">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-emerald-400">verified_user</span>
            <span>100% Money-Back Guarantee</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-amber-400">lock_reset</span>
            <span>Pay Once, Learn Forever</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-[#ea580c]">workspace_premium</span>
            <span>Free Verified Certificates</span>
          </span>
        </div>
      </div>
    </section>
  );
};
