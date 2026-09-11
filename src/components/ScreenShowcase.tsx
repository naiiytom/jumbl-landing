import { useState, useEffect, useRef, useCallback } from 'react';
import { SHOWCASE_SLIDES } from './showcaseData';

export interface ScreenShowcaseProps {
  autoAdvanceInterval?: number;
  className?: string;
}

export default function ScreenShowcase({
  autoAdvanceInterval = 5000,
  className = '',
}: ScreenShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const touchEndYRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Preload all screenshot images for seamless cross-fading
  useEffect(() => {
    SHOWCASE_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % SHOWCASE_SLIDES.length);
      }, autoAdvanceInterval);
    }
  }, [clearTimer, isPaused, autoAdvanceInterval]);

  // Restart timer whenever pause state or interval changes
  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [startTimer, clearTimer]);

  // Manual navigation that restarts the auto-advance countdown
  const handleManualNav = useCallback(
    (action: 'next' | 'prev' | number) => {
      if (action === 'next') {
        setCurrentIndex(prev => (prev + 1) % SHOWCASE_SLIDES.length);
      } else if (action === 'prev') {
        setCurrentIndex(
          prev => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length
        );
      } else {
        setCurrentIndex(action);
      }
      startTimer();
    },
    [startTimer]
  );

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handleManualNav('prev');
    } else if (e.key === 'ArrowRight') {
      handleManualNav('next');
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsPaused(false);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!e.currentTarget.contains(document.activeElement)) {
      setIsPaused(false);
    }
  };

  // Touch swipe support with vertical scroll discrimination
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchStartYRef.current = e.targetTouches[0].clientY;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
    clearTimer();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
    touchEndYRef.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartXRef.current !== null &&
      touchEndXRef.current !== null &&
      touchStartYRef.current !== null &&
      touchEndYRef.current !== null
    ) {
      const deltaX = touchStartXRef.current - touchEndXRef.current;
      const deltaY = touchStartYRef.current - touchEndYRef.current;
      const minSwipeDistance = 45;

      // Only treat as horizontal swipe if horizontal distance exceeds vertical scroll
      if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          handleManualNav('next');
        } else {
          handleManualNav('prev');
        }
      } else {
        startTimer();
      }
    } else {
      startTimer();
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  const handleTouchCancel = () => {
    startTimer();
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  const currentSlide = SHOWCASE_SLIDES[currentIndex];

  return (
    <div
      className={`flex-1 relative w-full flex flex-col items-center py-6 lg:py-0 select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsPaused(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Jumbl app screen showcase"
      aria-live={isPaused ? 'polite' : 'off'}
    >
      {/* Background ambient gold aura */}
      <div className="absolute -inset-8 md:-inset-16 bg-gradient-to-tr from-jumbl-gold/25 via-jumbl-gold/10 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none" />

      {/* Main mockup showcase wrapper: sizes tightly around the device frame so desktop arrows flank the phone */}
      <div className="relative flex items-center justify-center">
        {/* Navigation Arrow: Previous (Desktop / Tablet) */}
        <button
          type="button"
          onClick={() => handleManualNav('prev')}
          aria-label="Previous screenshot"
          className="hidden sm:flex absolute -left-14 md:-left-16 lg:-left-16 z-30 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-jumbl-charcoal hover:text-jumbl-gold shadow-lg shadow-jumbl-charcoal/10 border border-jumbl-divider/80 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-jumbl-gold/50"
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
          className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] xl:w-[380px] aspect-[9/19.5] bg-jumbl-charcoal rounded-[3rem] shadow-[0_25px_70px_-15px_rgba(44,44,44,0.35)] border-[10px] sm:border-[12px] md:border-[14px] border-jumbl-charcoal overflow-hidden ring-1 ring-white/10 transform lg:rotate-2 transition-transform duration-700"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          {/* Screen Glare Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

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
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${SHOWCASE_SLIDES.length}: ${slide.badge}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              />
            );
          })}
        </div>

        {/* Navigation Arrow: Next (Desktop / Tablet) */}
        <button
          type="button"
          onClick={() => handleManualNav('next')}
          aria-label="Next screenshot"
          className="hidden sm:flex absolute -right-14 md:-right-16 lg:-right-16 z-30 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-jumbl-charcoal hover:text-jumbl-gold shadow-lg shadow-jumbl-charcoal/10 border border-jumbl-divider/80 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-jumbl-gold/50"
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

      {/* Screen Context & Feature Caption Card with stable min-height */}
      <div className="mt-8 text-center max-w-sm px-4 min-h-[6.5rem] flex flex-col items-center justify-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jumbl-gold/15 text-jumbl-gold border border-jumbl-gold/30 text-xs font-semibold tracking-wider uppercase mb-2 transition-all duration-300">
          <span className="font-jetbrains">
            0{currentIndex + 1} / 0{SHOWCASE_SLIDES.length}
          </span>
          <span>•</span>
          <span>{currentSlide.badge}</span>
        </div>
        <h2 className="text-xl font-bold font-playfair text-jumbl-charcoal transition-all duration-300">
          {currentSlide.title}
        </h2>
        <p className="text-sm text-gray-600 font-inter mt-1 leading-relaxed transition-all duration-300">
          {currentSlide.description}
        </p>
      </div>

      {/* Interactive Navigation Dots & Mobile Arrow Controls */}
      <div className="mt-4 flex items-center gap-4">
        {/* Mobile-only Previous Arrow */}
        <button
          type="button"
          onClick={() => handleManualNav('prev')}
          aria-label="Previous screenshot"
          className="sm:hidden w-8 h-8 rounded-full bg-white text-jumbl-charcoal border border-jumbl-divider flex items-center justify-center shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-jumbl-gold/50 active:scale-95 transition-transform"
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
                onClick={() => handleManualNav(index)}
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
          onClick={() => handleManualNav('next')}
          aria-label="Next screenshot"
          className="sm:hidden w-8 h-8 rounded-full bg-white text-jumbl-charcoal border border-jumbl-divider flex items-center justify-center shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-jumbl-gold/50 active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
