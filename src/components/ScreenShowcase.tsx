import { useState, useEffect, useRef, useCallback } from 'react';
import { SHOWCASE_SLIDES } from './showcaseData';

interface ScreenShowcaseProps {
  autoAdvanceInterval?: number;
}

export default function ScreenShowcase({
  autoAdvanceInterval = 5000,
}: ScreenShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Preload all screenshot images for seamless cross-fading
  useEffect(() => {
    SHOWCASE_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % SHOWCASE_SLIDES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex(
      prev => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Handle auto-advance interval with pause on hover
  useEffect(() => {
    if (isPaused) {
      resetTimer();
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, autoAdvanceInterval);

    return () => resetTimer();
  }, [isPaused, autoAdvanceInterval, goToNext, resetTimer]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      goToPrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const currentSlide = SHOWCASE_SLIDES[currentIndex];

  return (
    <div
      className="flex-1 relative w-full flex flex-col items-center py-6 lg:py-0 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Jumbl app screen showcase"
    >
      {/* Background ambient gold aura */}
      <div className="absolute -inset-8 md:-inset-16 bg-gradient-to-tr from-jumbl-gold/25 via-jumbl-gold/10 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none" />

      {/* Main mockup showcase wrapper */}
      <div className="relative w-full flex items-center justify-center">
        {/* Navigation Arrow: Previous */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous screenshot"
          className="hidden sm:flex absolute -left-4 lg:-left-7 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-jumbl-charcoal hover:text-jumbl-gold shadow-lg shadow-jumbl-charcoal/10 border border-jumbl-divider/80 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-jumbl-gold/50"
        >
          <svg
            className="w-5 h-5 -ml-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Device Frame */}
        <div
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] aspect-[9/19.5] bg-jumbl-charcoal rounded-[3.25rem] shadow-[0_30px_90px_-20px_rgba(44,44,44,0.35)] border-[11px] md:border-[13px] border-jumbl-charcoal overflow-hidden ring-1 ring-white/20 transform lg:rotate-1 hover:rotate-0 hover:scale-[1.01] transition-all duration-500 ease-out"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Dynamic Island Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-jumbl-charcoal rounded-full z-30 pointer-events-none flex items-center justify-end pr-2.5 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#161616] ring-1 ring-white/10" />
          </div>

          {/* Screen Glare Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.09]" />

          {/* Screenshot Slides */}
          {SHOWCASE_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              />
            );
          })}
        </div>

        {/* Navigation Arrow: Next */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next screenshot"
          className="hidden sm:flex absolute -right-4 lg:-right-7 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-jumbl-charcoal hover:text-jumbl-gold shadow-lg shadow-jumbl-charcoal/10 border border-jumbl-divider/80 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-jumbl-gold/50"
        >
          <svg
            className="w-5 h-5 -mr-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Screen Context & Feature Caption Card */}
      <div className="mt-8 text-center max-w-sm px-4 min-h-[4.5rem]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jumbl-gold/15 text-jumbl-gold border border-jumbl-gold/30 text-xs font-semibold tracking-wider uppercase mb-2">
          <span className="font-jetbrains">0{currentIndex + 1} / 0{SHOWCASE_SLIDES.length}</span>
          <span>•</span>
          <span>{currentSlide.badge}</span>
        </div>
        <h2 className="text-xl font-bold font-playfair text-jumbl-charcoal">
          {currentSlide.title}
        </h2>
        <p className="text-sm text-gray-600 font-inter mt-1 leading-relaxed">
          {currentSlide.description}
        </p>
      </div>

      {/* Interactive Navigation Dots & Mobile Arrow Controls */}
      <div className="mt-4 flex items-center gap-4">
        {/* Mobile-only Previous Arrow */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous screenshot"
          className="sm:hidden w-8 h-8 rounded-full bg-white text-jumbl-charcoal border border-jumbl-divider flex items-center justify-center shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicator Dots */}
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Select screenshot"
        >
          {SHOWCASE_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Jump to slide ${index + 1}: ${slide.badge}`}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-jumbl-gold/50 ${
                  isActive
                    ? 'w-7 h-2 bg-jumbl-gold shadow-sm'
                    : 'w-2 h-2 bg-jumbl-charcoal/20 hover:bg-jumbl-charcoal/40'
                }`}
              />
            );
          })}
        </div>

        {/* Mobile-only Next Arrow */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next screenshot"
          className="sm:hidden w-8 h-8 rounded-full bg-white text-jumbl-charcoal border border-jumbl-divider flex items-center justify-center shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
