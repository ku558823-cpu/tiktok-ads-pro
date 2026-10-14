import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-28 lg:bottom-6 right-4 sm:right-6 z-40">
      <a
        href="https://wa.me/923555317704?text=Aslam-o-alikum%20EcomSkills!%20I%20want%20to%20enroll%20in%20the%20Rs.%205000%20All%20Access%20Bundle."
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 px-4 sm:px-5 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full shadow-xl flex items-center gap-2 font-heading font-bold text-xs sm:text-sm active:scale-95 transition-all hover:scale-105"
        title="Chat with Admissions Mentor on WhatsApp (0355-5317704)"
      >
        <span className="material-symbols-outlined text-xl">chat</span>
        <span>WhatsApp</span>
        <span className="w-2 h-2 rounded-full bg-white animate-ping hidden sm:inline-block"></span>
      </a>
    </aside>
  );
};
