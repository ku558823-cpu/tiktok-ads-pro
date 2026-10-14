import React, { useState } from 'react';
import { Course } from '../data/coursesData';

interface TabsSectionProps {
  course: Course;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenVideoPreview: () => void;
  onOpenCheckout: () => void;
}

export const TabsSection: React.FC<TabsSectionProps> = ({
  course,
  activeTab,
  onSelectTab,
  onOpenVideoPreview,
  onOpenCheckout,
}) => {
  const [expandedModule, setExpandedModule] = useState<string>('m1');

  const toggleModule = (id: string) => {
    setExpandedModule(prev => (prev === id ? '' : id));
  };

  return (
    <section id="curriculum-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
      {/* Segmented Tabs Navigation */}
      <div className="bg-[#eff4ff] p-1.5 rounded-2xl border border-slate-200/80 flex items-center justify-between overflow-x-auto no-scrollbar gap-1 max-w-2xl mx-auto shadow-2xs">
        <button
          onClick={() => onSelectTab('about')}
          className={`flex-1 min-w-[90px] py-2.5 px-3 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'about'
              ? 'bg-white text-[#ea580c] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          About Course
        </button>

        <button
          onClick={() => onSelectTab('audience')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'audience'
              ? 'bg-white text-[#ea580c] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Who Is This For?
        </button>

        <button
          onClick={() => onSelectTab('curriculum')}
          className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'curriculum'
              ? 'bg-white text-[#ea580c] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Curriculum ({course.modules.length} Modules)
        </button>

        <a
          href="#bundle-section"
          onClick={() => onSelectTab('bundle')}
          className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap cursor-pointer ${
            activeTab === 'bundle'
              ? 'bg-white text-[#ea580c] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Bundle Offer 🎉
        </a>
      </div>

      {/* Tab Contents */}
      <div className="mt-8 flex flex-col gap-6">
        {/* Tab 1: About Course */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ff6b00] text-2xl">campaign</span>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0b1c30]">
                    Why TikTok Ads in 2026?
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  TikTok has fundamentally transformed social commerce worldwide. With organic reach declining across older networks, TikTok’s recommendation algorithm gives Pakistani brands, drop-shippers, and freelancers an unprecedented unfair advantage.
                </p>

                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  In this complete masterclass, you will learn everything required to run high-ROI campaigns from scratch — bypassing Pakistani payment restrictions, setting up agency accounts, creating hook-heavy UGC creatives, and scaling budgets safely.
                </p>

                {/* Spec Highlights Grid */}
                <div className="mt-4 pt-4 border-t border-slate-100 bg-[#eff4ff]/60 p-4 rounded-xl flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm text-[#ea580c]">schedule</span>
                      Course Duration:
                    </span>
                    <span className="font-heading font-bold text-slate-900">2 Months (Self-Paced)</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm text-[#ea580c]">translate</span>
                      Video Medium:
                    </span>
                    <span className="font-heading font-bold text-slate-900">100% Urdu Audio + Visuals</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm text-[#ea580c]">history</span>
                      Updates:
                    </span>
                    <span className="font-heading font-bold text-slate-900">Free Weekly Lesson Additions</span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm text-[#ea580c]">workspace_premium</span>
                      Certification:
                    </span>
                    <span className="font-heading font-bold text-emerald-700">Free Verified Digital Certificate</span>
                  </div>
                </div>
              </div>

              {/* What You Will Be Able to Do */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0b1c30]">
                  Practical Capabilities You Will Master
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#eff4ff]/50 border border-slate-200/50">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Right Column */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* Quick Summary Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-4">
                <h3 className="font-heading font-bold text-base text-slate-900 border-b border-slate-100 pb-2">
                  Course Snapshot
                </h3>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ea580c] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Total Curriculum</span>
                    <span className="font-heading font-bold text-sm text-slate-900">38 Video Lessons (8.5 Hours)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Instructor</span>
                    <span className="font-heading font-bold text-sm text-slate-900">{course.instructor}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Support Channel</span>
                    <span className="font-heading font-bold text-sm text-emerald-700">Dedicated WhatsApp Mentor</span>
                  </div>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full mt-2 py-3 bg-[#ea580c] hover:bg-[#d9480f] text-white font-heading font-bold text-sm rounded-xl shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  Enroll Now — Rs. 5,000
                </button>
              </div>

              {/* Sample Lesson Callout */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-md flex flex-col gap-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-base">smart_display</span>
                  <span>Free Preview Available</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Watch Chapter 1: The First 3 Seconds Viral Hook Architecture before paying a single rupee.
                </p>
                <button
                  onClick={onOpenVideoPreview}
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  <span>Play Sample Lesson</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Who Is This For? */}
        {activeTab === 'audience' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤔</span>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0b1c30]">
                Is this course for you?
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you see yourself in any of these roles, this practical roadmap was built directly for your success:
            </p>

            <div className="flex flex-col gap-3.5">
              {/* Item 1 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    Pakistani Business & Brand Owners
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 leading-normal mt-0.5">
                    Expand online reach, bypass retail saturation, and drive direct COD (Cash on Delivery) customer orders nationwide.
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    Shopify & Dropshipping Sellers
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 leading-normal mt-0.5">
                    Test winning impulse-buying items on tiny daily budgets, understand ROAS formulas, and scale winner campaigns.
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    Freelancers & Media Buyers
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 leading-normal mt-0.5">
                    Sell TikTok Ad management to international clients on Upwork, Fiverr & direct outreach for $500–$2,000/mo recurring retainers.
                  </span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    Content Creators & UGC Influencers
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 leading-normal mt-0.5">
                    Understand Spark Ads and partner with domestic & global brands on paid sponsored collaborations that pay $100+ per video.
                  </span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#eff4ff] border border-slate-200/50">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    Students & Career Switchers
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 leading-normal mt-0.5">
                    Add Pakistan’s most in-demand performance marketing capability to your resume in under 60 days.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="font-heading font-bold text-slate-900 text-sm block">
                  Ready to start your digital journey?
                </span>
                <span className="text-xs text-slate-600">
                  Full 100% money back guarantee protects your investment.
                </span>
              </div>
              <button
                onClick={onOpenCheckout}
                className="px-5 py-2.5 bg-[#ea580c] text-white font-heading font-bold text-xs rounded-xl shadow-xs whitespace-nowrap cursor-pointer hover:bg-[#d9480f]"
              >
                Enroll Now — Rs. 5,000
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Curriculum */}
        {activeTab === 'curriculum' && (
          <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div>
                <h2 className="font-heading font-extrabold text-xl text-[#0b1c30]">
                  Course Modules & Syllabus
                </h2>
                <span className="text-xs text-slate-500">
                  Click any module to inspect video lessons and downloadable guides
                </span>
              </div>
              <span className="text-xs font-bold text-[#ea580c] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                6 Modules · 38 Video Lessons
              </span>
            </div>

            {/* Accordion Modules */}
            <div className="flex flex-col gap-3">
              {course.modules.map(mod => {
                const isExpanded = expandedModule === mod.id;
                return (
                  <div
                    key={mod.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading font-bold text-xs shrink-0 ${
                            isExpanded
                              ? 'bg-[#ea580c] text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {mod.moduleNumber}
                        </span>
                        <div>
                          <p className="font-heading font-bold text-sm text-[#0b1c30] leading-snug">
                            {mod.title}
                          </p>
                          <p className="text-xs text-slate-500 font-medium">
                            {mod.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`material-symbols-outlined text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-180 text-[#ea580c]' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 border-t border-slate-100 bg-[#eff4ff]/30 flex flex-col gap-2">
                        {mod.lessons.map(lesson => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between py-2 px-3 rounded-xl bg-white border border-slate-200/60 text-xs text-slate-700 hover:border-orange-200 transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="material-symbols-outlined text-sm text-emerald-600">
                                {lesson.type === 'guide' ? 'description' : lesson.type === 'template' ? 'file_present' : 'play_circle'}
                              </span>
                              <span className="font-medium text-slate-800">
                                {lesson.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              {lesson.isPreviewable && (
                                <button
                                  onClick={e => {
                                    e.stopPropagation();
                                    onOpenVideoPreview();
                                  }}
                                  className="text-[10px] font-bold text-[#ea580c] bg-orange-100 hover:bg-orange-200 px-2 py-0.5 rounded cursor-pointer transition-colors"
                                >
                                  Preview Free
                                </button>
                              )}
                              <span className="text-slate-500 font-semibold text-[11px]">
                                {lesson.duration}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={onOpenCheckout}
                className="px-6 py-3 bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-heading font-bold text-sm rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all"
              >
                Unlock All 38 Lessons + 15 More Courses (Rs. 5,000)
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
