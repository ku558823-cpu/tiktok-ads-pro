/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ALL_COURSES, Course } from './data/coursesData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TabsSection } from './components/TabsSection';
import { MoneyBackGuarantee } from './components/MoneyBackGuarantee';
import { BundleSection } from './components/BundleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalUrgencyCta } from './components/FinalUrgencyCta';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { CourseOutlineModal } from './components/CourseOutlineModal';
import { VideoPreviewModal } from './components/VideoPreviewModal';
import { FaqModal } from './components/FaqModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [activeNavTab, setActiveNavTab] = useState<'bundle' | 'courses' | 'reviews' | 'guarantee'>('bundle');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isVideoPreviewOpen, setIsVideoPreviewOpen] = useState<boolean>(false);
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);
  const [seatsRemaining] = useState<number>(14);
  const [viewMode, setViewMode] = useState<'responsive' | 'mobile-mock' | 'desktop-mock'>('responsive');

  const mainFeaturedCourse = ALL_COURSES.find(c => c.id === 'tiktok-ads') || ALL_COURSES[0];

  const handleSelectNavTab = (tab: 'bundle' | 'courses' | 'reviews' | 'guarantee') => {
    setActiveNavTab(tab);
    if (tab === 'bundle') {
      setActiveTab('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'courses') {
      setActiveTab('curriculum');
      const el = document.getElementById('curriculum-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'reviews') {
      const el = document.getElementById('testimonials-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'guarantee') {
      setIsCheckoutOpen(true);
    }
  };

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'bundle') {
      const el = document.getElementById('bundle-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col items-center">
      {/* Viewport Presets Switcher Bar on Desktop */}
      <div className="w-full bg-slate-900 text-slate-300 py-1.5 px-4 text-xs hidden md:flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-bold text-white">EcomSkills Studio Preview:</span>
          <span className="text-slate-400">Toggle views to inspect Image 1 (Mobile) and Image 3 (Desktop Web)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('responsive')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'responsive'
                ? 'bg-[#ea580c] text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Responsive (Auto)
          </button>
          <button
            onClick={() => setViewMode('mobile-mock')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'mobile-mock'
                ? 'bg-[#ea580c] text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            📱 Mobile App Screen (Image 1)
          </button>
          <button
            onClick={() => setViewMode('desktop-mock')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'desktop-mock'
                ? 'bg-[#ea580c] text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            💻 Web Standard (Image 3)
          </button>
        </div>
      </div>

      {/* Screen Frame Container */}
      <div
        className={`w-full transition-all duration-300 ${
          viewMode === 'mobile-mock'
            ? 'max-w-[430px] my-6 rounded-[40px] shadow-2xl border-[10px] border-slate-900 overflow-hidden ring-1 ring-slate-800 relative bg-[#f8f9ff]'
            : viewMode === 'desktop-mock'
            ? 'max-w-7xl mx-auto my-4 shadow-xl border border-slate-200 rounded-2xl overflow-hidden'
            : 'max-w-full'
        }`}
      >
        {/* Mobile Viewport Speaker Grill Simulation (when in mobile mock) */}
        {viewMode === 'mobile-mock' && (
          <div className="bg-slate-900 py-1.5 flex items-center justify-center">
            <div className="w-16 h-1 bg-slate-700 rounded-full"></div>
          </div>
        )}

        <Header
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenFaq={() => setIsFaqOpen(true)}
          onOpenVideoPreview={() => setIsVideoPreviewOpen(true)}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          viewMode={viewMode}
          onChangeViewMode={setViewMode}
        />

        <main className="flex-1 flex flex-col w-full pb-20 lg:pb-0">
          {/* Hero Section */}
          <HeroSection
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onOpenVideoPreview={() => setIsVideoPreviewOpen(true)}
            seatsRemaining={seatsRemaining}
          />

          {/* Interactive Syllabus, About & Outcomes Tabs */}
          <TabsSection
            course={mainFeaturedCourse}
            activeTab={activeTab}
            onSelectTab={handleSelectTab}
            onOpenVideoPreview={() => setIsVideoPreviewOpen(true)}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />

          {/* 100% Money-Back Guarantee Hero Card */}
          <MoneyBackGuarantee onOpenCheckout={() => setIsCheckoutOpen(true)} />

          {/* 15+ Course All-Access Bundle Showcase */}
          <BundleSection
            onSelectCourse={setSelectedCourse}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />

          {/* Real Students WhatsApp Proofs & Reviews */}
          <TestimonialsSection onOpenCheckout={() => setIsCheckoutOpen(true)} />

          {/* Urgency Closing Call To Action with Countdown */}
          <FinalUrgencyCta
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            seatsRemaining={seatsRemaining}
          />
        </main>

        {/* Platform Footer */}
        <Footer
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenFaq={() => setIsFaqOpen(true)}
        />

        {/* Floating WhatsApp Quick Support Pill */}
        <FloatingWhatsApp />

        {/* Mobile Bottom Sticky Purchase & Tab Bar (Image 1) */}
        <MobileBottomNav
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          activeNavTab={activeNavTab}
          onSelectNavTab={handleSelectNavTab}
        />
      </div>

      {/* Modals & Overlays */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <CourseOutlineModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <VideoPreviewModal
        isOpen={isVideoPreviewOpen}
        onClose={() => setIsVideoPreviewOpen(false)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />
    </div>
  );
}
