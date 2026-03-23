import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import DataProtection from './pages/DataProtection'
import Cookies from './pages/Cookies'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/80 backdrop-blur-md border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-playfair text-jumbl-charcoal">
            Jumbl
          </Link>
          <nav className="flex gap-6 items-center">
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-jumbl-charcoal text-white py-8">
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



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
