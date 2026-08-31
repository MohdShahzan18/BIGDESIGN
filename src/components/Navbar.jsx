import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    "Services",
    "Technologies",
    "Industries",
    "Work",
    "Contact",
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-black/10 bg-white/80 px-5 py-3 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-black/70">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-xl font-black tracking-[-0.06em]"
          >
            B<span className="opacity-40">BIG</span>DESIGN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-80 dark:bg-white dark:text-black"
            >
              Let's Talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10"
            >
              {darkMode ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10"
              aria-label="Menu"
            >
              {mobileMenu ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="mt-4 border-t border-black/10 pt-4 dark:border-white/10 lg:hidden">
            <div className="flex flex-col">

              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenu(false)}
                  className="border-b border-black/10 py-4 text-sm font-medium text-black/70 dark:border-white/10 dark:text-white/70"
                >
                  {link}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="mt-4 rounded-full bg-black py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-black"
              >
                Let's Talk →
              </a>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;