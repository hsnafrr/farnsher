import { Code, Bot, Package, ArrowUpRight, Target, Eye, Palette, Workflow, Layers } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

export default function Products() {
  const { t } = useApp();

  const techStack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'];
  const aiTools = ['Supabase', 'n8n', 'Make', 'OpenAI', 'Claude'];
  const integrations = ['WhatsApp', 'Google Sheets', 'Stripe', 'Supabase'];

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.10} />

      <section className="section-pad relative z-10 pt-32">
        <div className="container-max">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">Products</span>
          <h1 className="heading-lg heading-text mb-4">{t.products.title}</h1>
          <p className="text-body max-w-2xl mb-16">{t.products.subtitle}</p>
        </div>
      </section>

      {/* Farnsher Studio */}
      <section className="section-pad relative z-10 section-alt">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #2563eb)', boxShadow: '0 0 24px rgba(14,165,233,0.4)' }}>
                  <Code size={26} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold heading-text">{t.products.studio.label}</h2>
                  <p className="text-xs text-sky-500 font-semibold">{t.products.studio.tagline}</p>
                </div>
              </div>
              <p className="text-body text-sm">{t.products.studio.desc}</p>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card-glass p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={16} className="text-sky-500" />
                    <h3 className="text-sm font-bold uppercase tracking-wider heading-text">Mission</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{t.products.studio.mission}</p>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye size={16} className="text-sky-500" />
                    <h3 className="text-sm font-bold uppercase tracking-wider heading-text">Vision</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{t.products.studio.vision}</p>
                </div>
              </div>

              <div className="card-glass p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Palette size={16} className="text-sky-500" />
                  <h3 className="text-sm font-bold uppercase tracking-wider heading-text">{t.products.studio.philosophy}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{t.products.studio.philosophyText}</p>
              </div>

              <div className="card-glass p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Workflow size={16} className="text-sky-500" />
                  <h3 className="text-sm font-bold uppercase tracking-wider heading-text">{t.products.studio.process}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.products.studio.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center"
                        style={{ background: 'rgba(14,165,233,0.12)', color: '#0ea5e9', border: '1px solid rgba(14,165,233,0.25)' }}>{i + 1}</span>
                      <span className="text-sm font-medium heading-text">{step}</span>
                      {i < t.products.studio.steps.length - 1 && <span className="text-slate-300 dark:text-slate-700">→</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glass p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={16} className="text-sky-500" />
                  <h3 className="text-sm font-bold uppercase tracking-wider heading-text">{t.products.studio.techStack}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farnsher Tech */}
      <section className="section-pad relative z-10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)', boxShadow: '0 0 24px rgba(139,92,246,0.4)' }}>
                  <Bot size={26} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold heading-text">{t.products.tech.label}</h2>
                  <p className="text-xs text-violet-500 font-semibold">{t.products.tech.tagline}</p>
                </div>
              </div>
              <p className="text-body text-sm">{t.products.tech.desc}</p>
              <a href="https://www.instagram.com/Farnsher.tech/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-violet-500 hover:gap-2 transition-all">
                Visit Farnsher Tech <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="card-glass p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider heading-text mb-4">{t.products.tech.aiTools}</h3>
                <div className="flex flex-wrap gap-2">
                  {aiTools.map((tool) => <span key={tool} className="tech-tag" style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)' }}>{tool}</span>)}
                </div>
              </div>
              <div className="card-glass p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider heading-text mb-4">{t.products.tech.integrations}</h3>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((int) => <span key={int} className="tech-tag">{int}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Products */}
      <section className="section-pad relative z-10 section-alt">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #f43f5e)', boxShadow: '0 0 24px rgba(236,72,153,0.4)' }}>
                  <Package size={26} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold heading-text">{t.products.digital.label}</h2>
                  <p className="text-xs text-pink-500 font-semibold">{t.products.digital.tagline}</p>
                </div>
              </div>
              <p className="text-body text-sm">{t.products.digital.desc}</p>
              <a href="https://lynk.id/hsnafrr" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                {t.products.digital.visitStore} <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="card-glass p-8">
                <h3 className="text-sm font-bold uppercase tracking-wider heading-text mb-6">Product Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.products.digital.categories.map((cat, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-sky-500/10 hover:border-pink-400/40 transition-colors animate-fade-up"
                      style={{ background: 'rgba(255,255,255,0.02)', animationDelay: `${i * 80}ms` }}>
                      <span className="w-8 h-8 rounded-lg text-sm font-bold flex items-center justify-center"
                        style={{ background: 'rgba(236,72,153,0.12)', color: '#ec4899' }}>{i + 1}</span>
                      <span className="text-sm font-medium heading-text">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
