import React, { useEffect, useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-blue-100 dark:border-blue-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and AirGuard */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              src="/images/airguard-logo-clearbg.png"
              alt="AirGuard"
              className="h-8 w-auto"
            />
            <span className="hidden sm:inline text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              AirGuard
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Home
            </a>
            <a
              href="/dashboard"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Dashboard
            </a>
            <button
              aria-label="Toggle dark/light theme"
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 text-blue-600 dark:text-blue-200 hover:shadow-md dark:hover:shadow-blue-900/50 transition-all duration-300"
              title="Toggle light/dark theme"
            >
              {isDark ? (
                <span className="text-lg" aria-hidden>
                  🌙
                </span>
              ) : (
                <span className="text-lg" aria-hidden>
                  ☀️
                </span>
              )}
            </button>
          </nav>

          {/* Mobile menu button + theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              aria-label="Toggle dark/light theme"
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 text-blue-600 dark:text-blue-200 hover:shadow-md dark:hover:shadow-blue-900/50 transition-all duration-300"
              title="Toggle light/dark theme"
            >
              {isDark ? (
                <span className="text-lg" aria-hidden>
                  🌙
                </span>
              ) : (
                <span className="text-lg" aria-hidden>
                  ☀️
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 transition"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Home
            </a>
            <a
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Dashboard
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
