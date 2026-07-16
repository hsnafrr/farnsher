import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, ArrowUpRight, Zap } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export default function Portfolio() {
  const { t } = useApp();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/hsnafrr/repos?sort=updated&per_page=30')
      .then((res) => { if (!res.ok) throw new Error('Failed'); return res.json(); })
      .then((data: Repo[]) => { setRepos(data.filter((r) => !r.name.startsWith('.'))); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const featuredProjects = [
    { title: 'Morph3D', type: '3D Company Profile', url: 'https://morph3d.vercel.app/' },
    { title: 'Morfosa Transport', type: 'Business Website', url: 'https://morfosatransportrent.netlify.app/' },
    { title: 'Farnsher E-Commerce', type: 'Online Store', url: 'https://Farnsher-ecommerce.vercel.app/' },
    { title: 'Farnsher Hotel', type: 'Booking System', url: 'https://Farnsher-hotel.vercel.app/' },
    { title: 'POS Digital Cashier', type: 'Point of Sale', url: 'https://pos-digital-cashier-Farnsher.vercel.app/' },
    { title: 'Olive Fried Chicken', type: 'Company Profile', url: 'https://olive-fried-chicken.vercel.app/' },
  ];

  const gradients = [
    'from-sky-500 to-blue-600', 'from-violet-500 to-purple-600',
    'from-pink-500 to-rose-600', 'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600', 'from-cyan-500 to-sky-600',
  ];

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.30} />

      <section className="section-pad relative z-10 pt-32">
        <div className="container-max">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">Portfolio</span>
          <h1 className="heading-lg heading-text mb-4">{t.portfolio.title}</h1>
          <p className="text-body max-w-2xl mb-16">{t.portfolio.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                className="card-glass overflow-hidden group animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="aspect-[16/10] overflow-hidden relative flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(139,92,246,0.1) 100%)' }}>
                  <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br ${gradients[i % gradients.length]}`}
                    style={{ boxShadow: '0 0 24px rgba(14,165,233,0.3)' }}>
                    <Zap size={28} className="text-white" />
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold heading-text">{p.title}</h3>
                    <p className="text-xs text-muted">{p.type}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-sky-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-500 mb-2 block">Open Source</span>
              <h2 className="heading-md heading-text">GitHub Repositories</h2>
            </div>
            <a href="https://github.com/hsnafrr?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-violet-500 hover:gap-3 transition-all">
              <Github size={16} /> {t.portfolio.viewGithub}
            </a>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
              <span className="ml-3 text-sm text-muted">{t.portfolio.loading}</span>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-muted mb-4">{t.portfolio.noRepos}</p>
              <a href="https://github.com/hsnafrr?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Github size={16} /> {t.portfolio.viewGithub}
              </a>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((r, i) => (
                <a key={r.name} href={r.html_url} target="_blank" rel="noopener noreferrer"
                  className="card-glass p-5 group animate-fade-up" style={{ animationDelay: `${Math.min(i, 10) * 50}ms` }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm font-bold heading-text group-hover:text-sky-500 transition-colors">{r.name}</h3>
                    <ExternalLink size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2 min-h-[2rem]">
                    {r.description || 'No description provided.'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    {r.language && (<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-500" /> {r.language}</span>)}
                    <span className="flex items-center gap-1"><Star size={12} /> {r.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {r.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
