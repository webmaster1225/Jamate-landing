import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/#features', label: 'Features', isHash: true },
  { to: '/#download', label: 'Download', isHash: true },
  { to: '/support', label: 'Support', isHash: false },
  { to: '/privacy', label: 'Privacy', isHash: false },
  { to: '/terms', label: 'Terms', isHash: false },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#800020]">
            <img
              src="/jammate-logo.png"
              alt=""
              className="h-6 w-6 object-contain"
              aria-hidden
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            JamMate
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.isHash ? (
              <a
                key={link.to}
                href={link.to}
                className="text-sm font-medium text-gray-600 transition hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-100 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-sm font-medium text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
