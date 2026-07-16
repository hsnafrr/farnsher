import { Sun, Moon, Globe, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t, lang, setLang, theme, setTheme } = useApp();

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'portfolio', label: t.nav.portfolio },
    { key: 'services', label: t.nav.services },
    { key: 'products', label: t.nav.products },
    { key: 'testimonials', label: t.nav.testimonials },
    { key: 'contact', label: t.nav.contact },
    { key: 'book-call', label: t.nav.bookCall },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hasan-aufar-445713354/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/farnsher.tech/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@farnshertech', label: 'YouTube' },
    { icon: Mail, href: 'mailto:hasan.aufar1504@gmail.com', label: 'Email' },
  ];

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t footer-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="Farnsher"
                className="h-10 w-10 object-contain"
                style={{ filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.6))' }}
              />
              <span className="font-black text-lg" style={{
                background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Farnsher
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-md">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon hover:-translate-y-0.5"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">
              {t.footer.quickLinks}
            </h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className="text-sm text-muted hover:text-sky-500 transition-colors text-left footer-link"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">
              {t.contact.infoTitle}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <a href="https://wa.me/6289620928296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-500 transition-colors footer-link">
                <Phone size={14} /> +62 896 2092 8296
              </a>
              <a href="mailto:hasan.aufar1504@gmail.com" className="flex items-center gap-2 hover:text-sky-500 transition-colors break-all footer-link">
                <Mail size={14} /> hasan.aufar1504@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> Yogyakarta, ID
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <button onClick={() => setLang(lang === 'en' ? 'id' : 'en')} className="toggle-btn">
                <Globe size={12} /> {lang.toUpperCase()}
              </button>
              <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="icon-toggle">
                {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t footer-divider flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Hasan Aufar. {t.footer.rights}
          </p>
          <p className="text-xs text-muted">
            {t.footer.builtBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
