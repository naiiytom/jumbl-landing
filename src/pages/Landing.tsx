import { Link } from 'react-router-dom';
import ScreenShowcase from '../components/ScreenShowcase';

export default function Landing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
        <div className="flex-1 text-left">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-playfair font-bold text-jumbl-charcoal mb-8 leading-[1.1] tracking-tight">
            Read without <br/>
            distraction.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl font-inter leading-relaxed">
            Jumbl is an alabaster sanctuary for your library. We stripped away the social noise to focus on what matters: your reading, your sessions, and your gathered wisdom.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-jumbl-gold/10 text-jumbl-gold px-8 py-4 rounded-2xl font-semibold cursor-not-allowed border-2 border-jumbl-gold/20 flex flex-col items-start leading-none gap-1 shrink-0">
              <span className="text-xs uppercase tracking-widest opacity-60">iOS App</span>
              <span>Available Later</span>
            </button>
            <a 
              href="https://play.google.com/store/apps/details?id=com.jumbl.app&utm_source=unjumbl_landing&utm_medium=hero_button&utm_campaign=app_install"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-jumbl-charcoal text-white px-8 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all shadow-xl shadow-jumbl-charcoal/20 flex flex-col items-start leading-none gap-1 shrink-0"
            >
              <span className="text-xs uppercase tracking-widest opacity-60">Get it on</span>
              <span>Google Play</span>
            </a>
            <Link to="/#features" className="px-8 py-4 rounded-2xl font-semibold border-2 border-jumbl-charcoal/10 text-jumbl-charcoal hover:bg-jumbl-charcoal/5 transition-all flex items-center shrink-0">
              View Features
            </Link>
          </div>
        </div>
        
        {/* App Showcase */}
        <ScreenShowcase />
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
          "The best tracker is the one that empowers. We built Jumbl to help you organize your library and deep-dive into your reading habits. Our features—like gold heatmaps and achievement milestones—are designed to celebrate your focus, not to distract you."
        </p>
      </section>
    </div>
  );
}
