import React, { useState } from 'react';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose, onOpenCheckout }) => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const faqs = [
    {
      q: 'How will I receive access after paying Rs. 5,000?',
      a: 'Immediately upon completing payment via JazzCash, EasyPaisa, or Bank Transfer, you receive your student Roll Number and LMS login credentials. You are also immediately added to the private 1-on-1 WhatsApp mentorship group.',
    },
    {
      q: 'Is this PKR 5,000 fee one-time or are there monthly charges?',
      a: 'It is strictly a ONE-TIME payment of PKR 5,000. There are zero hidden fees, zero monthly subscriptions, and zero renewals. You get lifetime access to all 15+ current courses plus all future weekly lesson updates.',
    },
    {
      q: 'How does 1-on-1 mentor support work?',
      a: 'Every student gets direct access to our verified Pakistani practitioners on WhatsApp. Whenever you face issues with TikTok pixels, ad account bans, Shopify setups, or creative scripts, our mentors reply directly to help unblock you.',
    },
    {
      q: 'What is the refund procedure if I am not satisfied?',
      a: 'We offer an iron-clad 100% Money-Back Guarantee within 30 days. If you go through the lessons and feel they did not provide immense value, simply message us on WhatsApp (+92 355 5317704) or email ku5558823@gmail.com and we refund 100% of your money. No questions asked.',
    },
    {
      q: 'Can I watch the videos on my Android / iPhone smartphone?',
      a: 'Yes! The entire EcomSkills portal is 100% mobile-optimized. You can stream in full HD on your phone, tablet, or laptop at your own pace anytime.',
    },
    {
      q: 'Do I get verified digital certificates?',
      a: 'Yes, after completing each master course and its practical assignments, you receive a free verified digital certificate that you can attach to your CV, Upwork profile, and LinkedIn.',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl">help</span>
            <div>
              <h3 className="font-heading font-extrabold text-base">
                Frequently Asked Questions
              </h3>
              <p className="text-[11px] text-white/90">
                Everything you need to know before enrolling
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="p-6 flex flex-col gap-3 overflow-y-auto max-h-[70vh]">
          {faqs.map((faq, idx) => {
            const isOpenItem = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpenItem ? -1 : idx)}
                  className="w-full p-3.5 text-left flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-slate-400 text-sm transition-transform ${
                      isOpenItem ? 'rotate-180 text-[#ea580c]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpenItem && (
                  <div className="p-3.5 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <a
            href="https://wa.me/923555317704"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Still have questions? Chat on WhatsApp (0355-5317704)</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="px-5 py-2 bg-[#ea580c] hover:bg-[#d9480f] text-white font-heading font-bold text-xs rounded-xl shadow-xs"
          >
            Enroll Now (Rs. 5,000)
          </button>
        </div>
      </div>
    </div>
  );
};
