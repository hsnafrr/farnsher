import { Star, ArrowUpRight, Quote } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

export default function Testimonials() {
  const { t } = useApp();

  const testimonials = [
    {
      author: 'Morfosa Transport', role: 'Transportation & Rental Service', rating: 5,
      text: 'Hasan transformed our entire digital operation. The booking website and workflow automation system he built reduced our manual workload by 70%. Our customers can now book vehicles online seamlessly, and our team manages everything from one dashboard. Truly game-changing.',
      project: 'Business Website + Workflow Automation',
      links: ['https://morfosatransportrent.netlify.app/', 'https://morfosatransportworkflow.netlify.app/'],
      impact: '70% reduction in manual workload', gradient: 'from-sky-500 to-blue-600',
    },
    {
      author: 'Forum Anak Mlati', role: 'Youth Community Organization', rating: 5,
      text: 'The platform Hasan built for our youth forum is exactly what we needed. It\'s clean, fast, and represents our community perfectly. The content management system makes it easy for our team to update information. We\'ve seen a significant increase in community engagement since launch.',
      project: 'Community Platform',
      links: ['https://forumanakmlati.vercel.app/'],
      impact: 'Increased community engagement', gradient: 'from-violet-500 to-purple-600',
    },
    {
      author: 'Morph3D', role: '3D Visualization Studio', rating: 5,
      text: 'Working with Hasan was a masterclass in web development. The 3D company profile he built is immersive, performant, and visually stunning. It perfectly captures our brand identity and has helped us land several high-value clients. The attention to detail is remarkable.',
      project: '3D Interactive Company Profile',
      links: ['https://morph3d.vercel.app/'],
      impact: 'Helped secure high-value clients', gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.00} />

      <section className="section-pad relative z-10 pt-32">
        <div className="container-max">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">Testimonials</span>
          <h1 className="heading-lg heading-text mb-4">{t.testimonials.title}</h1>
          <p className="text-body max-w-2xl mb-16">{t.testimonials.subtitle}</p>

          <div className="space-y-8">
            {testimonials.map((tm, i) => (
              <div key={i} className="card-glass overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 aspect-[16/10] lg:aspect-auto overflow-hidden relative flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(139,92,246,0.08) 100%)' }}>
                    <div className="text-center p-8">
                      <div className={`w-20 h-20 rounded-3xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${tm.gradient}`}
                        style={{ boxShadow: '0 0 32px rgba(14,165,233,0.25)' }}>
                        <Quote size={36} className="text-white" />
                      </div>
                      <p className="heading-text font-bold text-lg">{tm.author}</p>
                      <p className="text-muted text-sm">{tm.role}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(tm.rating)].map((_, s) => <Star key={s} size={16} className="fill-amber-400 text-amber-400" />)}
                      </div>
                      <Quote size={28} className="text-slate-200 dark:text-slate-800" />
                    </div>

                    <p className="text-base text-muted leading-relaxed italic mb-6">"{tm.text}"</p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="font-bold text-sm heading-text">{tm.author}</p>
                        <p className="text-xs text-muted">{tm.role}</p>
                      </div>
                      <div className="px-3 py-1.5 rounded-full" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
                        <span className="text-xs font-semibold text-emerald-500">{tm.impact}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-sky-500/10">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">{tm.project}</p>
                      <div className="flex flex-wrap gap-2">
                        {tm.links.map((link, j) => (
                          <a key={j} href={link} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border text-muted hover:border-sky-400/50 hover:text-sky-500 transition-all social-icon" style={{ borderRadius: '9999px', width: 'auto' }}>
                            {t.testimonials.viewProject} {tm.links.length > 1 ? j + 1 : ''} <ArrowUpRight size={12} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
