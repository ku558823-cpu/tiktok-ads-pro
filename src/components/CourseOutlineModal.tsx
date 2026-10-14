import React from 'react';
import { Course } from '../data/coursesData';

interface CourseOutlineModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const CourseOutlineModal: React.FC<CourseOutlineModalProps> = ({
  course,
  onClose,
  onOpenCheckout,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Header with Course Media */}
        <div className="relative h-44 sm:h-52 bg-slate-900 overflow-hidden shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-between p-4 sm:p-6 text-white">
            <div className="flex items-center justify-between w-full">
              <span className="bg-[#ea580c] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                {course.code} · {course.categoryLabel}
              </span>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight">
                {course.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                {course.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Course Info Bar */}
        <div className="bg-[#eff4ff] px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-[10px] text-slate-500 block">Duration</span>
              <span className="font-heading font-bold text-slate-900">{course.totalDuration}</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div>
              <span className="text-[10px] text-slate-500 block">Lessons</span>
              <span className="font-heading font-bold text-slate-900">{course.totalLessons} Videos</span>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div>
              <span className="text-[10px] text-slate-500 block">Instructor</span>
              <span className="font-heading font-bold text-slate-900">{course.instructor}</span>
            </div>
          </div>

          <span className="text-emerald-700 bg-emerald-100 font-bold px-2.5 py-0.5 rounded-full text-[11px]">
            Included in Rs. 5,000 Bundle
          </span>
        </div>

        {/* Scrollable Outline Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          {/* About */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-900 mb-1.5">
              Program Description
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Key Learning Outcomes */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-900 mb-2">
              What You Will Learn
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.keyOutcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                  <span className="material-symbols-outlined text-xs text-emerald-600 mt-0.5">
                    check_circle
                  </span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modules List */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-900 mb-2">
              Curriculum Modules
            </h4>
            <div className="flex flex-col gap-2">
              {course.modules.map(mod => (
                <div
                  key={mod.id}
                  className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xs text-slate-900">
                      Module {mod.moduleNumber}: {mod.title}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {mod.lessons.length} Lessons
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {mod.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-[11px] text-slate-500 block">All 15 Courses Included</span>
            <span className="font-heading font-black text-xl text-[#ea580c]">Rs. 5,000 (Lifetime)</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c23e08] text-white font-heading font-bold text-xs rounded-xl shadow-md cursor-pointer"
            >
              Enroll In All 15+ Courses (Rs. 5,000)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
