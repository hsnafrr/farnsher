import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Code, Bot, Package, Check } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

export default function About() {
  const { t } = useApp();

  const skills = [
    'React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
    'Supabase', 'n8n / Make', 'OpenAI / Claude', 'Vercel / Netlify',
    'Stripe Integration', 'WhatsApp API', 'UI/UX Design', 'SEO Optimization',
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hasan-aufar-445713354/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/farnsher.tech/' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@farnshertech' },
  ];

  const extraLinks = [
    { label: 'Lynk.id', href: 'https://lynk.id/hsnafrr' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@farnsher.tech' },
  ];

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.40} />

      {/* Hero */}
      <section className="section-pad relative z-10 pt-32">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 animate-fade-up">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl opacity-60 blur-md"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6, #ec4899)' }} />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-sky-500/20">
                  <img src="/profil.jpg" alt="Hasan Aufar" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 animate-fade-up delay-200">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">{t.about.title}</span>
              <h1 className="heading-lg heading-text mb-6">{t.about.subtitle}</h1>
              <div className="space-y-4">
                <p className="text-body">{t.about.philosophyText}</p>
                <p className="text-body">{t.about.philosophyText2}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { v: '20+', l: 'Projects' },
                  { v: '4+', l: 'Years' },
                  { v: '3', l: 'Brands' },
                ].map((s, i) => (
                  <div key={i} className="card-glass p-4 rounded-xl text-center">
                    <p className="text-2xl font-black grad-text-cyan">{s.v}</p>
                    <p className="text-xs text-muted mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-pad relative z-10 section-alt">
        <div className="container-max">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-2 block">Expertise</span>
            <h2 className="heading-md heading-text">{t.about.skills}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((s, i) => (
              <div key={i} className="card-glass px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <Check size={14} className="text-sky-500 flex-shrink-0" />
                <span className="text-sm font-medium heading-text">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ecosystem */}
      <section className="section-pad relative z-10">
        <div className="container-max">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-500 mb-2 block">Ecosystem</span>
            <h2 className="heading-md heading-text">{t.about.ecosystem}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: 'Farnsher Studio', desc: 'Creative web development studio focused on performance and business solutions.', grad: 'from-sky-500 to-blue-600', glow: 'rgba(14,165,233,0.3)' },
              { icon: Bot, title: 'Farnsher Tech', desc: 'Frontend engineering integrated with AI automation and workflow systems.', grad: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.3)' },
              { icon: Package, title: 'Digital Products', desc: 'Marketplace for templates, prompt packs, starter kits, and learning guides.', grad: 'from-pink-500 to-rose-600', glow: 'rgba(236,72,153,0.3)' },
            ].map((b, i) => (
              <div key={i} className="card-glass p-8 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.grad} flex items-center justify-center mb-4`}
                  style={{ boxShadow: `0 0 20px ${b.glow}` }}>
                  <b.icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-bold heading-text mb-2">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-pad relative z-10 section-alt">
        <div className="container-max">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-2 block">Connect</span>
            <h2 className="heading-md heading-text">{t.about.contact}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://wa.me/6289620928296" target="_blank" rel="noopener noreferrer" className="card-glass p-6 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 16px rgba(16,185,129,0.3)' }}>
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">WhatsApp</p>
                <p className="text-sm font-semibold heading-text group-hover:text-sky-500 transition-colors">+62 896 2092 8296</p>
              </div>
            </a>

            <a href="mailto:hasan.aufar1504@gmail.com" className="card-glass p-6 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', boxShadow: '0 0 16px rgba(14,165,233,0.3)' }}>
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Personal Email</p>
                <p className="text-sm font-semibold heading-text group-hover:text-sky-500 transition-colors break-all">hasan.aufar1504@gmail.com</p>
              </div>
            </a>

            <a href="mailto:hyvestudio1504@gmail.com" className="card-glass p-6 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', boxShadow: '0 0 16px rgba(245,158,11,0.3)' }}>
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Business Email</p>
                <p className="text-sm font-semibold heading-text group-hover:text-sky-500 transition-colors break-all">hyvestudio1504@gmail.com</p>
              </div>
            </a>

            <div className="card-glass p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(128,128,128,0.1)' }}>
                <MapPin size={20} className="text-muted" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t.about.location}</p>
                <p className="text-sm font-semibold heading-text">Yogyakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">{t.about.socialLinks}</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border text-muted hover:border-sky-400/50 hover:text-sky-500 hover:-translate-y-0.5 transition-all social-icon" style={{ borderRadius: '9999px', width: 'auto' }}>
                  <s.icon size={16} />
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
              {extraLinks.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border text-muted hover:border-sky-400/50 hover:text-sky-500 hover:-translate-y-0.5 transition-all social-icon" style={{ borderRadius: '9999px', width: 'auto' }}>
                  <span className="text-sm font-medium">{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
