import React from 'react';

interface MobileBottomNavProps {
  onOpenCheckout: () => void;
  activeNavTab: 'bundle' | 'courses' | 'reviews' | 'guarantee';
  onSelectNavTab: (tab: 'bundle' | 'courses' | 'reviews' | 'guarantee') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenCheckout,
  activeNavTab,
  onSelectNavTab,
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden flex flex-col pointer-events-auto">
      {/* Upper Floating Sticky Purchase Bar */}
      <div className="bg-white/95 backdrop-blur-xl px-4 py-2.5 border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-black text-lg text-[#ea580c] leading-tight">
                PKR 5,000
              </span>
              <span className="text-[11px] text-slate-400 line-through font-semibold">
                15,000
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 leading-tight">
              <span className="material-symbols-outlined text-[12px]">verified_user</span>
              <span>100% Money-Back</span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="flex-1 h-11 bg-gradient-to-r from-[#ff6b00] via-[#ea580c] to-[#f59e0b] hover:from-[#ea580c] hover:to-[#c23e08] text-white rounded-full font-heading font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/25 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Claim All-Access</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Bottom 4-Item App Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-xl border-t border-slate-200/60 shadow-[0_-1px_10px_rgba(0,0,0,0.03)] pb-[max(env(safe-area-inset-bottom),4px)]">
        <div className="max-w-md mx-auto flex items-center justify-around h-13 px-2">
          <button
            onClick={() => onSelectNavTab('bundle')}
            className={`flex flex-col items-center justify-center w-14 py-1 transition-colors gap-0.5 cursor-pointer ${
              activeNavTab === 'bundle'
                ? 'text-[#ea580c] font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className="material-symbols-outlined text-xl">school</span>
            <span className="text-[10px] font-heading">Bundle</span>
          </button>

          <button
            onClick={() => onSelectNavTab('courses')}
            className={`flex flex-col items-center justify-center w-14 py-1 transition-colors gap-0.5 cursor-pointer ${
              activeNavTab === 'courses'
                ? 'text-[#ea580c] font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className="material-symbols-outlined text-xl">menu_book</span>
            <span className="text-[10px] font-heading">Courses</span>
          </button>

          <button
            onClick={() => onSelectNavTab('reviews')}
            className={`flex flex-col items-center justify-center w-14 py-1 transition-colors gap-0.5 cursor-pointer ${
              activeNavTab === 'reviews'
                ? 'text-[#ea580c] font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className="material-symbols-outlined text-xl">stars</span>
            <span className="text-[10px] font-heading">Reviews</span>
          </button>

          <button
            onClick={() => onSelectNavTab('guarantee')}
            className={`flex flex-col items-center justify-center w-14 py-1 transition-colors gap-0.5 cursor-pointer ${
              activeNavTab === 'guarantee'
                ? 'text-[#ea580c] font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className="material-symbols-outlined text-xl">verified</span>
            <span className="text-[10px] font-heading">Guarantee</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
