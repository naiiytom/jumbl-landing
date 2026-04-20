import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import DataProtection from './pages/DataProtection'
import Cookies from './pages/Cookies'
import GetApp from './pages/GetApp'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-jumbl-alabaster">
      <header className="glass-nav">
        <div className="mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-playfair text-jumbl-charcoal tracking-tight">
            Jumbl
          </Link>
          <nav className="flex gap-8 items-center">
            <Link to="/#features" className="text-sm font-medium text-jumbl-charcoal/70 hover:text-jumbl-gold transition-colors">Features</Link>
            <Link to="/#philosophy" className="text-sm font-medium text-jumbl-charcoal/70 hover:text-jumbl-gold transition-colors">Philosophy</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-28">
        {children}
      </main>
      <footer id="legal" className="bg-jumbl-charcoal text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link to="/data-protection" className="text-sm text-gray-400 hover:text-white transition-colors">Data Protection</Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies</Link>
          </div>
          <p className="text-sm text-gray-400">© 2026 Jumbl. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}



function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // If not found, retry after a short delay (for page transitions)
        const timeoutId = setTimeout(scrollToElement, 300);
        return () => clearTimeout(timeoutId);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/get-app" element={<GetApp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
