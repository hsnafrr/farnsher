import { ArrowRight, Sparkles, Code, Bot, Package, Star, ArrowUpRight, Zap } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t } = useApp();

  const pillars = [
    { icon: Code, title: t.home.pillar1Title, desc: t.home.pillar1Desc, gradient: 'from-sky-500 to-blue-600', glow: 'rgba(14,165,233,0.3)', page: 'products' },
    { icon: Bot, title: t.home.pillar2Title, desc: t.home.pillar2Desc, gradient: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.3)', page: 'products' },
    { icon: Package, title: t.home.pillar3Title, desc: t.home.pillar3Desc, gradient: 'from-pink-500 to-rose-600', glow: 'rgba(236,72,153,0.3)', page: 'products' },
  ];

  const selectedWork = [
    { title: 'Morph3D', type: '3D Company Profile', url: 'https://morph3d.vercel.app/' },
    { title: 'Morfosa Transport', type: 'Business Website', url: 'https://morfosatransportrent.netlify.app/' },
    { title: 'Farnsher E-Commerce', type: 'Online Store', url: 'https://Farnsher-ecommerce.vercel.app/' },
    { title: 'Farnsher Hotel', type: 'Booking System', url: 'https://Farnsher-hotel.vercel.app/' },
  ];

  const testimonials = [
    { text: 'Exceptional work — our booking system transformed how we operate.', author: 'Morfosa Transport' },
    { text: 'The website exceeded our expectations. Clean, fast, professional.', author: 'Morph3D' },
    { text: 'Hasan delivered a platform that truly represents our community.', author: 'Forum Anak Mlati' },
  ];

  const stats = [
    { value: '20+', label: 'Projects Delivered' },
    { value: '1+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '3', label: 'Brand Pillars' },
  ];

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.50} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="orb w-[600px] h-[600px] top-[-100px] left-[-200px] opacity-20" style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }} />
        <div className="orb w-[500px] h-[500px] top-[100px] right-[-150px] opacity-15" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
        <div className="orb w-[400px] h-[400px] bottom-[-50px] left-[30%] opacity-10" style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }} />

        <div className="container-max relative z-10 px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            <div className="badge mb-8 animate-fade-up">
              <Sparkles size={14} className="text-sky-500" />
              <span>Available for projects · 2026</span>
            </div>

            <p className="text-lg md:text-xl text-muted font-medium mb-3 animate-fade-up delay-100">
              {t.home.greeting}
            </p>

            <h1
              className="font-black tracking-tight leading-[1.02] mb-6 animate-fade-up delay-200"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.home.name}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8 animate-fade-up delay-300">
              {t.home.subtitle.split(' • ').map((tag, i) => (
                <span key={i} className="px-3 py-1 text-sm font-medium rounded-full border border-sky-500/20 text-sky-600 dark:text-sky-300" style={{ background: 'rgba(14,165,233,0.06)', backdropFilter: 'blur(8px)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-body max-w-2xl mb-10 leading-relaxed animate-fade-up delay-400">
              {t.home.intro}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
              <button onClick={() => onNavigate('book-call')} className="btn-primary">
                {t.home.ctaPrimary} <ArrowRight size={18} />
              </button>
              <button onClick={() => onNavigate('portfolio')} className="btn-secondary">
                {t.home.ctaSecondary}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-up delay-600">
              {stats.map((s, i) => (
                <div key={i} className="card-glass p-4 rounded-xl text-center">
                  <p className="text-2xl font-black grad-text-cyan">{s.value}</p>
                  <p className="text-xs text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad relative z-10 section-alt">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="heading-lg heading-text mb-3">{t.home.pillarsTitle}</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #0ea5e9, #6366f1)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <button
                key={i}
                onClick={() => onNavigate(p.page)}
                className="card-glass p-8 text-left group animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 24px ${p.glow}` }}>
                  <p.icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl font-bold heading-text mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-pad relative z-10">
        <div className="container-max">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-2 block">Services</span>
              <h2 className="heading-lg heading-text">{t.home.featuredServices}</h2>
            </div>
            <button onClick={() => onNavigate('services')} className="hidden md:flex items-center gap-1 text-sm font-semibold text-sky-500 hover:gap-2 transition-all">
              View all <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((s, i) => (
              <button
                key={i}
                onClick={() => onNavigate('services')}
                className="card-glass overflow-hidden text-left group animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.7) 0%, transparent 60%)' }} />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold heading-text mb-1">{s.name}</h3>
                  <p className="text-sm font-semibold grad-text">{s.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-pad relative z-10 section-alt">
        <div className="container-max">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-500 mb-2 block">Work</span>
              <h2 className="heading-lg heading-text">{t.home.selectedWork}</h2>
            </div>
            <button onClick={() => onNavigate('portfolio')} className="hidden md:flex items-center gap-1 text-sm font-semibold text-violet-500 hover:gap-2 transition-all">
              {t.portfolio.viewGithub} <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedWork.map((w, i) => (
              <a
                key={i}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass overflow-hidden group animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden relative flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(139,92,246,0.1) 100%)' }}>
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-float"
                      style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)', boxShadow: '0 0 24px rgba(14,165,233,0.3)' }}>
                      <Zap size={28} className="text-white" />
                    </div>
                    <p className="heading-text font-bold text-lg">{w.title}</p>
                    <p className="text-muted text-sm">{w.type}</p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold heading-text">{w.title}</h3>
                    <p className="text-xs text-muted">{w.type}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-sky-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="section-pad relative z-10">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-2 block">Testimonials</span>
            <h2 className="heading-lg heading-text">{t.home.testimonialStrip}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((tm, i) => (
              <div key={i} className="card-glass p-8 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} size={14} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-muted leading-relaxed italic mb-4">"{tm.text}"</p>
                <p className="text-xs font-bold text-muted uppercase tracking-wider">— {tm.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad relative z-10 overflow-hidden section-alt">
        <div className="orb w-96 h-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }} />
        <div className="container-max text-center relative">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">Let's Build</span>
          <h2 className="heading-lg heading-text mb-4">{t.home.finalCta}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-10">{t.home.finalCtaDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => onNavigate('book-call')} className="btn-primary text-base px-8 py-4">
              {t.home.startProject} <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate('contact')} className="btn-secondary text-base px-8 py-4">
              {t.nav.contact}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
