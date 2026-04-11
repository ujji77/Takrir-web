import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TEAL = '#00cbbf'

export default function AuthCallback() {
  const { search } = useLocation()

  useEffect(() => {
    // Forward all OAuth params (code, state, error, etc.) to the app's custom scheme.
    window.location.href = `takrir://auth${search}`
  }, [search])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
      <div
        className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
        style={{ borderColor: `${TEAL} transparent transparent transparent` }}
      />
      <p className="text-gray-500 text-sm">Completing sign in, opening Takrir…</p>
      <p className="text-gray-400 text-xs">
        If the app doesn't open,{' '}
        <a href="/" className="underline" style={{ color: TEAL }}>
          return to home
        </a>
        .
      </p>
    </div>
  )
}
