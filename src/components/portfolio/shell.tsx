import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUp, Check, Instagram, Mail, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chapters, themes } from "@/lib/portfolio/content";
export function SocialLinks() {
  return (
    <ul className="social">
      <li>
        <a href="mailto:fadhili98.com@gmail.com" aria-label="Email me">
          <Mail className="ic" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/eunoia.9632/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My Instagram"
        >
          <Instagram className="ic" />
        </a>
      </li>
    </ul>
  );
}
export function PortfolioShell({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("ivory");
  const [themeOpen, setThemeOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    const saved = localStorage.getItem("fw-theme");
    if (saved && themes.some((t) => t[0] === saved)) {
      setTheme(saved);
      document.documentElement.dataset["theme"] = saved;
    }
  }, []);
  useEffect(() => {
    setMenu(false);
    setThemeOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const scroll = () => setTop(window.scrollY > 700);
    const outside = (e: MouseEvent) => {
      if (e.target instanceof Node && !themeRef.current?.contains(e.target)) setThemeOpen(false);
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        setThemeOpen(false);
      }
    };
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("click", outside);
    document.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("click", outside);
      document.removeEventListener("keydown", key);
    };
  }, []);
  return (
    <div className="site">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="top">
        <div className="bar">
          <Link className="brand" to="/" aria-label="Fadhili Wendoh, home">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <circle
                cx="24"
                cy="24"
                r="22.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path d="M8 30c5 6 14 9 22 6" fill="none" stroke="var(--accent2)" strokeWidth="1.2" />
              <text
                x="24"
                y="33"
                textAnchor="middle"
                fontFamily="Cormorant Garamond,serif"
                fontStyle="italic"
                fontSize="30"
                fill="currentColor"
              >
                F
              </text>
              <circle cx="36" cy="11" r="2.2" fill="var(--accent2)" />
            </svg>
            <span>
              Fadhili<small>Belle Ame</small>
            </span>
          </Link>
          <nav id="main-nav" className={menu ? "open" : ""} aria-label="Main">
            <ul>
              {chapters.map((c) => (
                <li key={c.path}>
                  <Link to={c.path} activeProps={{ className: "active" }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="tools">
            <div className="themewrap" ref={themeRef}>
              <Button
                variant="outline"
                className="tbtn"
                onClick={() => setThemeOpen(!themeOpen)}
                aria-expanded={themeOpen}
                aria-controls="theme-panel"
              >
                <Palette />
                Theme
              </Button>
              <div
                className="tpanel"
                id="theme-panel"
                hidden={!themeOpen}
                role="group"
                aria-label="Choose a theme"
              >
                {themes.map(([id, label]) => (
                  <Button
                    key={id}
                    variant="ghost"
                    className="theme-choice"
                    aria-pressed={theme === id}
                    onClick={() => {
                      setTheme(id);
                      document.documentElement.dataset["theme"] = id;
                      localStorage.setItem("fw-theme", id);
                    }}
                  >
                    <span className="sw" data-theme={id} aria-hidden="true" />
                    {label}
                    {theme === id && <Check />}
                  </Button>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              className="tbtn menu"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              aria-controls="main-nav"
              onClick={() => setMenu(!menu)}
            >
              <span />
              <span />
            </Button>
          </div>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer className="foot">
        <div className="wrap">
          <Link to="/" className="sig">
            Belle Ame
          </Link>
          <SocialLinks />
          <p className="footer-name">
            © {new Date().getFullYear()} Fadhili Wendoh · A little corner of my world.
          </p>
        </div>
      </footer>
      {top && (
        <Button
          variant="outline"
          className="totop"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </Button>
      )}
    </div>
  );
}
