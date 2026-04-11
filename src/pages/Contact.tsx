const TEAL = '#00cbbf'

const TEAM = [
  {
    name: 'Uzair Khan',
    linkedin: 'https://www.linkedin.com/in/spatial-uzair',
  },
  {
    name: 'Zainab Dawood',
    linkedin: 'https://www.linkedin.com/in/zainab-dawood/',
  },
]

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact</h1>
      <p className="text-gray-500 mb-12 leading-relaxed">
        Have a question, feedback, or want to get in touch? We'd love to hear from you.
      </p>

      {/* Email */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-1">Email</h2>
        <p className="text-sm text-gray-500 mb-3">The quickest way to reach us.</p>
        <a
          href="mailto:spatialuzair@gmail.com"
          className="inline-flex items-center gap-2 font-medium text-sm"
          style={{ color: TEAL }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          spatialuzair@gmail.com
        </a>
      </div>

      {/* LinkedIn */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-1">LinkedIn</h2>
        <p className="text-sm text-gray-500 mb-4">Message either of us directly.</p>
        <div className="flex flex-col gap-3">
          {TEAM.map(({ name, linkedin }) => (
            <a
              key={name}
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                style={{ backgroundColor: TEAL }}
              >
                {name[0]}
              </div>
              <span className="font-medium text-gray-800 group-hover:underline text-sm">{name} ↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Hackathon context */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-base font-semibold text-gray-900 mb-1">About Takrir</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Takrir was built during the{' '}
          <a
            href="https://launch.provisioncapital.com/quran-hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: TEAL }}
          >
            Quran Foundation Hackathon
          </a>{' '}
          organised by Provision Capital — a global hackathon focused on building innovative tools, AI applications, and platforms centred around the Quran.
        </p>
      </div>
    </div>
  )
}
