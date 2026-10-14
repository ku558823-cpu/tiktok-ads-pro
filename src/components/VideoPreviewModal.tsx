import React, { useState, useEffect } from 'react';

interface VideoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(24);
  const [speed, setSpeed] = useState<string>('1x');
  const [activeChapter, setActiveChapter] = useState<number>(0);

  const chapters = [
    {
      title: 'Chapter 1: The First 3 Seconds Viral Hook Architecture',
      duration: '24:18',
      summary: 'Why 80% of dropshippers fail on TikTok: Missing the psychological pattern interrupt in the opening 90 frames.',
    },
    {
      title: 'Chapter 2: Sourcing Agency Accounts from Pakistan',
      duration: '18:45',
      summary: 'Setting up verified Business Centers with direct Pakistani debit/credit cards without getting flagged.',
    },
    {
      title: 'Chapter 3: CBO vs ABO Campaign Scaling Rules',
      duration: '31:50',
      summary: 'How to scale winning creatives from Rs. 2,000/day to Rs. 100k/day without burning ROAS.',
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress(p => (p >= 100 ? 0 : p + 0.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0b1120] text-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-700 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <h3 className="font-heading font-bold text-sm text-white">
                TikTok Ads Mastery — Free Lesson Preview
              </h3>
              <p className="text-[11px] text-slate-400">
                100% Urdu Audio + Visual Screen Recordings
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Video Player Mockup */}
        <div className="relative aspect-16/9 bg-slate-950 flex flex-col justify-between p-4 sm:p-6 overflow-hidden select-none">
          {/* Animated Background Simulation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#1e293b] to-slate-900 opacity-90"></div>

          {/* Simulated Screen Recording Graphics */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center gap-3">
            <div className="p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/80 max-w-md w-full shadow-xl">
              <div className="flex items-center justify-between text-xs text-amber-400 font-mono pb-2 border-b border-slate-800">
                <span>TIKTOK ADS MANAGER // LIVE DEMO</span>
                <span className="text-emerald-400 font-bold">ROAS 4.6x</span>
              </div>

              {/* Simulated Audio Waveform Bar */}
              <div className="flex items-center justify-center gap-1.5 py-4">
                {[40, 75, 90, 50, 100, 65, 85, 30, 95, 70, 55, 80, 60, 90, 45, 100, 65, 80, 40, 75].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${isPlaying ? (h * 0.4) : 10}px` }}
                    className="w-1 bg-[#ea580c] rounded-full transition-all duration-300"
                  ></div>
                ))}
              </div>

              <p className="text-xs text-slate-200 font-medium">
                "{chapters[activeChapter].summary}"
              </p>
              <span className="text-[10px] text-slate-400 block mt-1">
                Instructor Usman Ali explaining TikTok Creative Hook Formula in Urdu
              </span>
            </div>
          </div>

          {/* Video Player Controls Bar */}
          <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/60 flex flex-col gap-2">
            {/* Progress Bar */}
            <div
              className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden cursor-pointer"
              onClick={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(pos * 100);
              }}
            >
              <div
                style={{ width: `${progress}%` }}
                className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] h-full rounded-full transition-all"
              ></div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-lg bg-[#ea580c] text-white flex items-center justify-center cursor-pointer hover:bg-[#d9480f]"
                >
                  <span className="material-symbols-outlined text-lg">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <span className="font-mono text-slate-300 text-[11px]">
                  05:42 / {chapters[activeChapter].duration}
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-400 truncate max-w-xs">
                  {chapters[activeChapter].title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSpeed(s => (s === '1x' ? '1.5x' : s === '1.5x' ? '2x' : '1x'))}
                  className="px-2 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-300 hover:text-white"
                >
                  {speed}
                </button>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                  1080p HD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters & Lesson Notes */}
        <div className="p-5 sm:p-6 flex flex-col gap-4 bg-[#0f172a]">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Preview Chapters
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveChapter(idx);
                  setProgress(10);
                }}
                className={`p-3 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                  activeChapter === idx
                    ? 'border-[#ea580c] bg-orange-950/40 text-white font-bold ring-1 ring-[#ea580c]'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-[10px] text-[#ea580c] font-bold block mb-0.5">
                  Part {idx + 1} ({ch.duration})
                </span>
                <span className="line-clamp-2">{ch.title}</span>
              </button>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-2 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              <span>Ready to access all 38 TikTok lessons + 15 additional master courses?</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] text-white font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
            >
              <span>Unlock Full All-Access Pass (Rs. 5,000)</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
