import { Link } from 'react-router-dom'

const TEAL = '#00cbbf'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      {/* Logo / wordmark */}
      <div className="mb-8">
        <span className="text-6xl font-light tracking-wide" style={{ color: TEAL }}>تكرير</span>
        <h1 className="text-4xl font-semibold text-gray-900 mt-3 mb-0">Takrir</h1>
        <p className="text-gray-400 text-lg mt-1 tracking-widest uppercase text-sm">Repetition · Memorisation</p>
      </div>

      {/* Tagline */}
      <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto mb-4">
        A focused Quran memorisation app. Build playlists of verses, set repeat counts, and listen with the world's finest reciters.
      </p>

      {/* Hackathon badge */}
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-10 border" style={{ color: TEAL, borderColor: TEAL + '40', backgroundColor: TEAL + '0d' }}>
        <span>🏆</span>
        <span>Built at the <a href="https://launch.provisioncapital.com/quran-hackathon" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Quran Foundation Hackathon</a> with Provision Capital</span>
      </div>

      {/* App Store badge */}
      <div className="flex justify-center mb-20">
        <div
          className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-white font-medium text-lg shadow-lg"
          style={{ backgroundColor: TEAL }}
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Coming to the App Store
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        {[
          {
            icon: '📖',
            title: 'Any Surah, Any Range',
            desc: 'Select any chapter and verse range for focused, targeted memorisation sessions.',
          },
          {
            icon: '🔁',
            title: 'Custom Repetition',
            desc: 'Set individual repeat counts per verse. Hear each ayah as many times as you need.',
          },
          {
            icon: '🎙️',
            title: 'World-Class Reciters',
            desc: 'Switch between Sudais, Husary, Afasy, and more — mid-session, instantly.',
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-left">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">Built by</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {[
            {
              name: 'Uzair Khan',
              url: 'https://www.linkedin.com/in/spatial-uzair',
            },
            {
              name: 'Zainab Dawood',
              url: 'https://www.linkedin.com/in/zainab-dawood/',
            },
          ].map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0" style={{ backgroundColor: TEAL }}>
                {name[0]}
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:underline">{name}</p>
                <p className="text-xs text-gray-400">LinkedIn ↗</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Legal links */}
      <div className="flex justify-center gap-6 mt-16 text-sm text-gray-400">
        <Link to="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
        <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
      </div>
    </div>
  )
}
