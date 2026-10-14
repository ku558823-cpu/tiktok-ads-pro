import React, { useState } from 'react';
import { Testimonial, STUDENT_TESTIMONIALS } from '../data/testimonialsData';

interface TestimonialsSectionProps {
  onOpenCheckout: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenCheckout }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(STUDENT_TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [newReview, setNewReview] = useState({
    name: '',
    city: 'Gilgit',
    role: '',
    enrolledCourse: 'TikTok Ads Mastery',
    urduMessage: '',
    proofBadge: 'First Order Received',
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.urduMessage) return;

    const item: Testimonial = {
      id: `custom-${Date.now()}`,
      name: newReview.name,
      city: newReview.city,
      role: newReview.role || 'EcomSkills Student',
      enrolledCourse: newReview.enrolledCourse,
      avatarInitial: newReview.name.charAt(0).toUpperCase(),
      avatarBg: 'bg-orange-600',
      timeAgo: 'Just now',
      urduMessage: `"${newReview.urduMessage}"`,
      proofBadge: newReview.proofBadge,
      badgeType: 'feedback',
      rating: 5,
    };

    setTestimonials([item, ...testimonials]);
    setShowReviewModal(false);
    setNewReview({
      name: '',
      city: 'Lahore',
      role: '',
      enrolledCourse: 'TikTok Ads Mastery',
      urduMessage: '',
      proofBadge: 'First Order Received',
    });
  };

  return (
    <section id="testimonials-section" className="w-full bg-[#0b1120] py-14 sm:py-20 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
          <span className="text-[#ea580c] font-heading text-xs font-bold uppercase tracking-wider">
            Real Students • Real Screenshots & Results
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            Don't Just Take Our Word —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#ea580c]">
              Hear It From Students
            </span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            These are unedited messages and earnings proofs from Pakistani students who started right where you are now.
          </p>

          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full mt-1">
            <span className="text-amber-400">★★★★★</span>
            <span>Rated 5 stars by 92% of 11,264+ students</span>
          </div>
        </div>

        {/* WhatsApp Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map(item => (
            <div
              key={item.id}
              className="bg-[#1e293b]/90 rounded-2xl p-4 sm:p-5 border border-slate-700/60 shadow-lg flex flex-col justify-between gap-3.5 hover:border-[#ea580c]/50 transition-colors"
            >
              {/* WhatsApp Header */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full ${item.avatarBg} text-white flex items-center justify-center font-heading font-bold text-xs shrink-0 shadow-xs`}
                  >
                    {item.avatarInitial}
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-bold text-xs text-white block truncate leading-tight">
                      {item.name} ({item.city})
                    </span>
                    <span className="text-[10px] text-slate-400 truncate block">
                      {item.role} · {item.enrolledCourse}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                  {item.timeAgo}
                </span>
              </div>

              {/* Chat Bubble Message */}
              <div className="bg-[#128c7e]/25 border border-[#128c7e]/40 p-3 rounded-xl text-xs text-slate-100 leading-relaxed">
                {item.urduMessage}
              </div>

              {/* Bottom Proof Badge & Double Check */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800">
                <span className="font-heading font-bold text-emerald-400 flex items-center gap-1.5 text-[11px]">
                  <span className="material-symbols-outlined text-sm">
                    {item.badgeType === 'revenue'
                      ? 'payments'
                      : item.badgeType === 'client'
                      ? 'verified'
                      : item.badgeType === 'orders'
                      ? 'local_shipping'
                      : 'star'}
                  </span>
                  <span>{item.proofBadge}</span>
                </span>

                <div className="flex items-center gap-1 text-sky-400">
                  <span className="material-symbols-outlined text-sm">done_all</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setShowReviewModal(true)}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-heading font-bold text-xs rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">rate_review</span>
            <span>Are you a student? Submit Your Screenshot / Review</span>
          </button>

          <button
            onClick={onOpenCheckout}
            className="px-6 py-2.5 bg-[#ea580c] hover:bg-[#d9480f] text-white font-heading font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Start Your Journey — Rs. 5,000</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <h3 className="font-heading font-bold text-base text-white">
                Submit Your Result / Review
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddReview} className="flex flex-col gap-3.5 mt-4">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Asad Naveed"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">
                    City
                  </label>
                  <select
                    value={newReview.city}
                    onChange={e => setNewReview({ ...newReview, city: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none"
                  >
                    <option value="Gilgit">Gilgit (Gilgit-Baltistan)</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Multan">Multan</option>
                    <option value="Sialkot">Sialkot</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">
                    Proof Result
                  </label>
                  <input
                    type="text"
                    value={newReview.proofBadge}
                    onChange={e => setNewReview({ ...newReview, proofBadge: e.target.value })}
                    placeholder="e.g. PKR 35,000 Sales"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Your Review / Result Message (Urdu or English)
                </label>
                <textarea
                  required
                  rows={3}
                  value={newReview.urduMessage}
                  onChange={e => setNewReview({ ...newReview, urduMessage: e.target.value })}
                  placeholder="Sir, course ke TikTok Ads module se mere store par daily orders start ho gaye..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#ea580c]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#ea580c] hover:bg-[#d9480f] text-white font-heading font-bold text-xs rounded-xl shadow-xs"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
