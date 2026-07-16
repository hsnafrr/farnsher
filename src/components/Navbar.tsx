import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const { t, lang, setLang, theme, setTheme, activePage } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'portfolio', label: t.nav.portfolio },
    { key: 'services', label: t.nav.services },
    { key: 'products', label: t.nav.products },
    { key: 'testimonials', label: t.nav.testimonials },
    { key: 'contact', label: t.nav.contact },
  ];

  const navigate = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-header ${scrolled ? 'nav-header-scrolled' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button onClick={() => navigate('home')} className="flex items-center gap-3 group">
          <img
            src="/logo.jpg"
            alt="Farnsher Logo"
            className="h-9 w-9 object-contain group-hover:scale-105 transition-transform duration-300"
            style={{ filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.5))' }}
          />
          <span className="font-black text-base tracking-tight" style={{
            background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Farnsher
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => navigate(item.key)}
              className={`nav-link ${activePage === item.key ? 'nav-link-active' : ''}`}
            >
              {item.label}
              {activePage === item.key && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-500 rounded-full" style={{ boxShadow: '0 0 6px #38bdf8' }} />
              )}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === 'en' ? 'id' : 'en')} className="toggle-btn">
            <Globe size={12} />
            {lang.toUpperCase()}
          </button>

          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="icon-toggle">
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <button onClick={() => navigate('book-call')} className="hidden lg:flex btn-primary text-sm px-5 py-2">
            {t.nav.bookCall}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors mobile-menu-btn"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-b mobile-menu-panel backdrop-blur-2xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                className={`px-4 py-3 text-sm font-medium rounded-xl text-left transition-all duration-200 mobile-menu-item ${activePage === item.key ? 'mobile-menu-item-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => navigate('book-call')} className="mt-2 btn-primary justify-center py-3">
              {t.nav.bookCall}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
