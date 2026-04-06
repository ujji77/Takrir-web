import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

const TEAL = '#00cbbf'

function Nav() {
  const { pathname } = useLocation()
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-xl font-semibold" style={{ color: TEAL }}>تكرير</span>
          <span className="text-xl font-semibold text-gray-900">Takrir</span>
        </Link>
        <nav className="flex gap-6 text-sm text-gray-500">
          <Link
            to="/privacy"
            className={`hover:text-gray-900 transition-colors ${pathname === '/privacy' ? 'text-gray-900 font-medium' : ''}`}
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className={`hover:text-gray-900 transition-colors ${pathname === '/terms' ? 'text-gray-900 font-medium' : ''}`}
          >
            Terms
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Takrir. All rights reserved.</span>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
