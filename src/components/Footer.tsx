import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-surface-dark text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/jammate-icon.png"
                alt="JamMate"
                className="h-9 w-9 rounded-lg"
              />
              <span className="text-lg font-semibold text-white">JamMate</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
              By musicians for musicians. Find your next jam partner, match
              with local talent, and make music together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Product
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#download" className="hover:text-white">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/support" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:jamatemusic@gmail.com"
                    className="hover:text-white"
                  >
                    jamatemusic@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {year} JamMate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
