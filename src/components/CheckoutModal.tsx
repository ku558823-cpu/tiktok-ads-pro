import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<'jazzcash' | 'easypaisa' | 'bank' | 'card'>('jazzcash');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: 'ku5558823@gmail.com',
    city: 'Gilgit',
    tid: '',
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [generatedRollNo, setGeneratedRollNo] = useState('');

  if (!isOpen) return null;

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rollNo = `ECS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedRollNo(rollNo);
    setOrderConfirmed(true);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setStep(1);
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl">shopping_cart_checkout</span>
            <div>
              <h3 className="font-heading font-extrabold text-base leading-tight">
                All-Access Membership Checkout
              </h3>
              <p className="text-[11px] text-white/90">
                15+ Master Programs • Lifetime Pass • 1-on-1 Mentors
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

        {/* Pricing Anchor Banner */}
        <div className="bg-[#eff4ff] px-6 py-3 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-500 font-bold block">TOTAL DUE TODAY</span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-black text-2xl text-[#ea580c]">PKR 5,000</span>
              <span className="text-slate-400 line-through text-xs font-semibold">PKR 15,000</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-100/70 border border-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span>100% Money-Back Guarantee</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!orderConfirmed ? (
            <>
              {/* Stepper Indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-heading font-bold text-xs ${
                      step >= 1 ? 'bg-[#ea580c] text-white' : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    1
                  </div>
                  <span className={`text-xs font-bold ${step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>
                    Student Details
                  </span>
                </div>

                <div className="h-0.5 w-12 bg-slate-200"></div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-heading font-bold text-xs ${
                      step >= 2 ? 'bg-[#ea580c] text-white' : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    2
                  </div>
                  <span className={`text-xs font-bold ${step >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>
                    Payment & Activation
                  </span>
                </div>
              </div>

              {/* Step 1: Student Information */}
              {step === 1 && (
                <form onSubmit={handleStep1Submit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Muhammad Zeeshan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="03xx-xxxxxxx"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        Course portal login will be sent here
                      </span>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lahore / Karachi"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c23e08] text-white font-heading font-bold text-sm rounded-xl shadow-md active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Payment (Rs. 5,000)</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </form>
              )}

              {/* Step 2: Payment Gateway Choice & Transaction ID */}
              {step === 2 && (
                <form onSubmit={handleFinalSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Select Payment Method in Pakistan:
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('jazzcash')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          paymentMethod === 'jazzcash'
                            ? 'border-[#ea580c] bg-orange-50/70 text-slate-900 font-bold ring-2 ring-[#ea580c]/30'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full border flex items-center justify-center">
                          {paymentMethod === 'jazzcash' && <span className="w-2 h-2 rounded-full bg-[#ea580c]"></span>}
                        </span>
                        <div>
                          <span className="text-xs font-bold block">JazzCash</span>
                          <span className="text-[10px] text-slate-500">Instant Mobile Account</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('easypaisa')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          paymentMethod === 'easypaisa'
                            ? 'border-[#ea580c] bg-orange-50/70 text-slate-900 font-bold ring-2 ring-[#ea580c]/30'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full border flex items-center justify-center">
                          {paymentMethod === 'easypaisa' && <span className="w-2 h-2 rounded-full bg-[#ea580c]"></span>}
                        </span>
                        <div>
                          <span className="text-xs font-bold block">EasyPaisa</span>
                          <span className="text-[10px] text-slate-500">Mobile Wallet</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          paymentMethod === 'bank'
                            ? 'border-[#ea580c] bg-orange-50/70 text-slate-900 font-bold ring-2 ring-[#ea580c]/30'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full border flex items-center justify-center">
                          {paymentMethod === 'bank' && <span className="w-2 h-2 rounded-full bg-[#ea580c]"></span>}
                        </span>
                        <div>
                          <span className="text-xs font-bold block">Bank / SadaPay</span>
                          <span className="text-[10px] text-slate-500">Meezan, Nayapay, SadaPay</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          paymentMethod === 'card'
                            ? 'border-[#ea580c] bg-orange-50/70 text-slate-900 font-bold ring-2 ring-[#ea580c]/30'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full border flex items-center justify-center">
                          {paymentMethod === 'card' && <span className="w-2 h-2 rounded-full bg-[#ea580c]"></span>}
                        </span>
                        <div>
                          <span className="text-xs font-bold block">Debit / Credit Card</span>
                          <span className="text-[10px] text-slate-500">Visa & Mastercard</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Payment Details Box */}
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl text-xs flex flex-col gap-1.5 font-mono">
                    {paymentMethod === 'jazzcash' && (
                      <>
                        <span className="text-amber-400 font-bold font-sans">🟢 JazzCash Account Details (Gilgit HQ):</span>
                        <div>Account Title: <span className="text-emerald-400 font-bold">EcomSkills Academy</span></div>
                        <div>Account Number: <span className="text-white font-bold bg-white/20 px-1.5 py-0.5 rounded">0355-5317704</span></div>
                        <div className="text-[10px] text-slate-400 font-sans mt-1">Open JazzCash App → Send Money → Mobile Account → Enter 03555317704 → Amount: Rs. 5000</div>
                      </>
                    )}

                    {paymentMethod === 'easypaisa' && (
                      <>
                        <span className="text-emerald-400 font-bold font-sans">🟢 EasyPaisa Account Details (Gilgit HQ):</span>
                        <div>Account Title: <span className="text-emerald-400 font-bold">EcomSkills Academy</span></div>
                        <div>Account Number: <span className="text-white font-bold bg-white/20 px-1.5 py-0.5 rounded">0355-5317704</span></div>
                        <div className="text-[10px] text-slate-400 font-sans mt-1">Open EasyPaisa App → EasyPaisa Transfer → Enter 03555317704 → Amount: Rs. 5000</div>
                      </>
                    )}

                    {paymentMethod === 'bank' && (
                      <>
                        <span className="text-sky-400 font-bold font-sans">🏛️ Meezan Bank & SadaPay Details:</span>
                        <div>Bank: <span className="text-white font-bold">Meezan Bank Ltd</span></div>
                        <div>Title: <span className="text-emerald-400 font-bold">EcomSkills Private Ltd</span></div>
                        <div>IBAN: <span className="text-white font-bold bg-white/20 px-1 py-0.5 rounded text-[11px]">PK64MEZN0001000123456789</span></div>
                      </>
                    )}

                    {paymentMethod === 'card' && (
                      <>
                        <span className="text-purple-400 font-bold font-sans">💳 Card Instant Gateway:</span>
                        <div className="text-slate-300 font-sans text-xs">Direct 3D-Secure payment processor enabled for all Pakistani and International cards.</div>
                      </>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {paymentMethod === 'card' ? 'Card Number or TID' : 'Transaction ID (TID) / Screenshot Reference *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.tid}
                      onChange={e => setFormData({ ...formData, tid: e.target.value })}
                      placeholder="e.g. TID 04981729381 or Uploaded"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                    <span className="text-[10px] text-slate-400 mt-0.5 block">
                      You can also verify instantly via WhatsApp after submitting
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c23e08] text-white font-heading font-bold text-sm rounded-xl shadow-md active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>Confirm & Activate Access</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Step 3: Success Confirmation State */
            <div className="flex flex-col items-center text-center gap-4 py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-4xl font-bold">check</span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Enrollment Successful 🎉
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mt-2">
                  Welcome to EcomSkills, {formData.name}!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mt-1">
                  Your payment verification request has been queued. You now have lifetime access to TikTok Ads Mastery and all 15+ master courses!
                </p>
              </div>

              {/* Order Credentials Box */}
              <div className="w-full bg-[#eff4ff] p-4 rounded-2xl border border-slate-200/80 text-left flex flex-col gap-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Student Roll Number:</span>
                  <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {generatedRollNo}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Enrolled Program:</span>
                  <span className="font-bold text-slate-900">15+ Master Course Bundle</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">WhatsApp Access:</span>
                  <span className="font-bold text-emerald-700">{formData.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Amount Paid:</span>
                  <span className="font-heading font-bold text-[#ea580c]">PKR 5,000 (Lifetime)</span>
                </div>
              </div>

              {/* Instant WhatsApp Verification Button */}
              <a
                href={`https://wa.me/923555317704?text=Hi%20EcomSkills%20Team!%20I%20just%20enrolled%20in%20the%20Rs.%205000%20Bundle.%20Roll%20Number:%20${generatedRollNo}%2C%20Name:%20${encodeURIComponent(
                  formData.name
                )}%2C%20TID:%20${encodeURIComponent(formData.tid || 'Pending')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25d366] hover:bg-[#128c7e] text-white font-heading font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Send TID to Mentor on WhatsApp (+92 355 5317704)</span>
              </a>

              <button
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close & Return to Course Catalog
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
