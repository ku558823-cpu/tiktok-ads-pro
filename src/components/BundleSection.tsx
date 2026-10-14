import React, { useState } from 'react';
import { Course, ALL_COURSES } from '../data/coursesData';

interface BundleSectionProps {
  onSelectCourse: (course: Course) => void;
  onOpenCheckout: () => void;
}

export const BundleSection: React.FC<BundleSectionProps> = ({
  onSelectCourse,
  onOpenCheckout,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="bundle-section" className="w-full bg-[#eff4ff]/60 py-12 sm:py-16 px-4 sm:px-6 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Pitch Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <span className="inline-block bg-red-100 text-red-700 font-heading text-xs px-3.5 py-1 rounded-full font-bold uppercase tracking-wider border border-red-200">
            Limited Deal • Batch 2026 Ends Soon
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0b1c30] tracking-tight leading-tight">
            Why Buy One Course When You Can{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ea580c]">
              Own Them All? 🎉
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base max-w-xl">
            Enroll right now and gain lifetime access to all 15+ premier money-making skills for a single fee.
          </p>

          {/* Big Price Anchor */}
          <div className="flex items-baseline gap-3 my-2">
            <span className="text-slate-400 line-through text-lg sm:text-2xl font-bold">
              PKR 15,000
            </span>
            <span className="font-heading font-black text-3xl sm:text-5xl text-[#ea580c]">
              PKR 5,000
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff6b00] via-[#ea580c] to-[#d9480f] hover:from-[#ea580c] hover:to-[#c23e08] text-white font-heading font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30 active:scale-98 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">all_inclusive</span>
            <span>Get The Full 15+ Bundle (Rs. 5,000)</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium mt-1">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-emerald-600 font-bold">check</span>
              Lifetime Pass
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-emerald-600 font-bold">check</span>
              1-on-1 Mentors
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-emerald-600 font-bold">check</span>
              No Monthly Fees
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-emerald-600 font-bold">check</span>
              Free Verified Badges
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: 'All Courses (15)' },
              { id: 'ads', label: 'Digital Ads' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'creative', label: 'Creative & Video' },
              { id: 'freelance', label: 'Freelancing & AI' },
              { id: 'finance', label: 'Financial Trading' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#ea580c] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search bundle skills..."
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map(course => {
            const isTikTok = course.id === 'tiktok-ads';
            return (
              <div
                key={course.id}
                className={`bg-white rounded-2xl p-4 border transition-all hover:shadow-md flex flex-col justify-between gap-3 group ${
                  isTikTok
                    ? 'ring-2 ring-[#ea580c] border-transparent shadow-md'
                    : 'border-slate-200/90 shadow-2xs'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden shrink-0 bg-slate-900 relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                          isTikTok
                            ? 'bg-orange-100 text-[#ea580c]'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {isTikTok ? 'This Course' : 'Included Free'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono font-bold">
                        {course.code}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 truncate mt-1 group-hover:text-[#ea580c] transition-colors">
                      {course.shortTitle}
                    </h4>

                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                      {course.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400 font-medium">
                    {course.totalLessons} Lessons · {course.totalDuration}
                  </span>

                  <button
                    onClick={() => onSelectCourse(course)}
                    className="font-heading font-bold text-xs text-[#ea580c] hover:text-[#c23e08] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Outline</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 p-6">
            <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">search_off</span>
            <p className="text-sm font-bold text-slate-700">No courses matching your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#ea580c] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
