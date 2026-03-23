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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-jumbl-charcoal mb-6 leading-tight">
            Read beautifully, <br/>
            Unpile elegantly.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Jumbl is the distraction-free book tracker designed for avid readers. 
            Keep your reading sessions focused, your history visual, and your quotes organized.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-jumbl-gold text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md">
              Download App
            </button>
            <Link to="/terms" className="px-8 py-3 rounded-full font-medium border border-jumbl-charcoal text-jumbl-charcoal hover:bg-black/5 transition-all">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* App Mockup image */}
        <div className="flex-1 w-full max-w-md aspect-[9/16] bg-black rounded-[2.5rem] shadow-2xl border-8 border-white relative overflow-hidden group">
          {SCREENSHOTS.map((src, index) => (
            <img 
              key={src}
              src={src} 
              alt={`Jumbl Mobile App UI mockup ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-jumbl-alabaster rounded-full flex items-center justify-center mx-auto mb-6 text-jumbl-gold text-2xl">⚡</div>
            <h3 className="text-xl font-bold font-playfair mb-3">Persistent Sessions</h3>
            <p className="text-gray-600 text-sm">Real-time progress across screens with our Focus Mode and Tracker Card.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-jumbl-alabaster rounded-full flex items-center justify-center mx-auto mb-6 text-jumbl-gold text-2xl">🔥</div>
            <h3 className="text-xl font-bold font-playfair mb-3">Smart Streaks</h3>
            <p className="text-gray-600 text-sm">Timezone-aware scheduling and streak reminders to keep your reading consistent.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-jumbl-alabaster rounded-full flex items-center justify-center mx-auto mb-6 text-jumbl-gold text-2xl">🎨</div>
            <h3 className="text-xl font-bold font-playfair mb-3">Premium Design</h3>
            <p className="text-gray-600 text-sm">Alabaster, charcoal, and muted-gold interface built for visual excellence.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
