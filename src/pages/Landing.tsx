import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SCREENSHOTS = [
  '/screenshots/mockup-1.jpg',
  '/screenshots/mockup-2.jpg',
  '/screenshots/mockup-3.jpg',
  '/screenshots/mockup-4.jpg',
  '/screenshots/mockup-5.jpg',
  '/screenshots/mockup-6.jpg',
];

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % SCREENSHOTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-left">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-jumbl-charcoal mb-8 leading-[1.1] tracking-tight">
            Read without <br/>
            distraction.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-xl font-inter leading-relaxed">
            Jumbl is an alabaster sanctuary for your library. We stripped away the social noise to focus on what matters: your reading, your sessions, and your gathered wisdom.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-jumbl-gold/10 text-jumbl-gold px-8 py-4 rounded-2xl font-semibold cursor-not-allowed border-2 border-jumbl-gold/20 flex flex-col items-start leading-none gap-1">
              <span className="text-xs uppercase tracking-widest opacity-60">iOS App</span>
              <span>Available Later</span>
            </button>
            <a 
              href="https://play.google.com/store/apps/details?id=com.jumbl.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-jumbl-charcoal text-white px-8 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all shadow-xl shadow-jumbl-charcoal/20 flex flex-col items-start leading-none gap-1"
            >
              <span className="text-xs uppercase tracking-widest opacity-60">Get it on</span>
              <span>Google Play</span>
            </a>
            <Link to="/#features" className="px-8 py-4 rounded-2xl font-semibold border-2 border-jumbl-charcoal/10 text-jumbl-charcoal hover:bg-jumbl-charcoal/5 transition-all flex items-center">
              View Features
            </Link>
          </div>
        </div>
        
        {/* App Showcase */}
        <div className="flex-1 relative w-full group">
          <div className="absolute -inset-8 bg-gradient-to-tr from-jumbl-gold/20 to-transparent blur-3xl opacity-50 rounded-full" />
          <div className="relative mx-auto w-full max-w-[420px] aspect-[9/19.5] bg-jumbl-charcoal rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-jumbl-charcoal overflow-hidden transform lg:rotate-2">
            {SCREENSHOTS.map((src, index) => (
              <img 
                key={src}
                src={src} 
                alt={`Jumbl UI Mockup ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section id="features" className="bg-white py-32 mt-12 border-t border-jumbl-divider">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-jumbl-alabaster rounded-xl flex items-center justify-center text-jumbl-gold font-jetbrains text-xl">01</div>
              <h3 className="text-3xl font-bold font-playfair text-jumbl-charcoal">Deep Sessions</h3>
              <p className="text-gray-500 leading-relaxed">
                Persistent timers that live with you. Start reading on your tracker, lock your screen, and return to find your progress exactly where you left it. Focus is the priority.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-jumbl-alabaster rounded-xl flex items-center justify-center text-jumbl-gold font-jetbrains text-xl">02</div>
              <h3 className="text-3xl font-bold font-playfair text-jumbl-charcoal">Visual History</h3>
              <p className="text-gray-500 leading-relaxed">
                A gold-gradient heatmap records your commitment. No streaks for the sake of streaks—just a truthful visual archive of your daily reading habits.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-jumbl-alabaster rounded-xl flex items-center justify-center text-jumbl-gold font-jetbrains text-xl">03</div>
              <h3 className="text-3xl font-bold font-playfair text-jumbl-charcoal">Quote Catcher</h3>
              <p className="text-gray-500 leading-relaxed">
                Beautifully formatted cards for the insights you can't afford to forget. Organize your gathered wisdom by book, ready for reflection or export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-jumbl-charcoal mb-8">Reading isn't a social sport.</h2>
        <p className="text-xl text-gray-500 italic font-inter leading-relaxed">
          "The best tracker is the one that disappears. We built Jumbl to help you organize your library, not to steal your attention with feeds, ads, or gamification."
        </p>
      </section>
    </div>
  );
}
