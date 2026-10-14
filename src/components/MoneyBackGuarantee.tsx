import React from 'react';

interface MoneyBackGuaranteeProps {
  onOpenCheckout: () => void;
}

export const MoneyBackGuarantee: React.FC<MoneyBackGuaranteeProps> = ({ onOpenCheckout }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 my-8 w-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-[#ea580c] to-[#ff6b00] p-6 sm:p-10 text-white shadow-xl">
        {/* Background glow effects */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-3xl text-white material-symbols-filled">
                verified_user
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#facc15] bg-black/20 self-start px-2.5 py-0.5 rounded-full">
                No-Questions Asked Promise
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                100% Money-Back Guarantee
              </h3>
              <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-xl mt-1">
                Try the TikTok Ads masterclass completely risk-free. If you are not completely thrilled with the quality of instruction and actionable strategies, we will refund every single rupee directly to your JazzCash or Bank account. No awkward questions, no fine print.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenCheckout}
              className="w-full md:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#ea580c] font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Start Risk-Free Today</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Guarantee Bullet Points */}
        <div className="relative z-10 mt-6 pt-5 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/90">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#facc15]">check_circle</span>
            <span>30-Day Evaluation Window</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#facc15]">check_circle</span>
            <span>Instant JazzCash / Bank Refund</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#facc15]">check_circle</span>
            <span>Zero Processing Deduction</span>
          </div>
        </div>
      </div>
    </section>
  );
};
