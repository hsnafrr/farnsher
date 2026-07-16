import { useState } from 'react';
import { Target, DollarSign, Users, Gift, ListChecks, ExternalLink, ArrowRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

// 1. Import gambar secara manual dari folder src/images (Sudah tepat dan aman untuk proses build)
import landingImg from '../images/landing.jpg';
import companyImg from '../images/company.jpg';
import bisnisImg from '../images/bisnis.jpg';
import ecomImg from '../images/ecom.jpg';
import cafeImg from '../images/cafe.jpg';
import bookImg from '../images/book.jpg';
import posImg from '../images/pos.jpg';

// Gambar cadangan
const FALLBACK_IMAGE = 'https://picsum.photos/seed/services/800/600';

// 2. Gabungkan data statis (Gambar & Prototype) ke dalam Array yang urutannya SAMA PERSIS 
// dengan urutan data layanan (services) di file JSON/translasi Anda.
// Ini mencegah error gambar hilang jika nama (s.name) berubah karena pergantian bahasa.
const serviceStaticData = [
  {
    image: landingImg,
    prototypes: ['https://hsnafrrlearningcourse.vercel.app/'],
  },
  {
    image: companyImg,
    prototypes: ['https://morph3d.vercel.app/', 'https://olive-fried-chicken.vercel.app/'],
  },
  {
    image: bisnisImg,
    prototypes: ['https://morfosatransportrent.netlify.app/'],
  },
  {
    image: ecomImg,
    prototypes: ['https://Farnsher-ecommerce.vercel.app/'],
  },
  {
    image: cafeImg,
    prototypes: ['https://restaurant-prototype-Farnsher.vercel.app/'],
  },
  {
    image: bookImg,
    prototypes: ['https://Farnsher-hotel.vercel.app/'],
  },
  {
    image: posImg,
    prototypes: ['https://pos-digital-cashier-Farnsher.vercel.app/'],
  },
];

type TabKey = 'objective' | 'price' | 'suitableFor' | 'benefit' | 'features';

export default function Services() {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<TabKey>('objective');
  const [activeService, setActiveService] = useState(0);

  const tabs: { key: TabKey; label: string; icon: typeof Target }[] = [
    { key: 'objective', label: t.services.objective, icon: Target },
    { key: 'price', label: t.services.price, icon: DollarSign },
    { key: 'suitableFor', label: t.services.suitableFor, icon: Users },
    { key: 'benefit', label: t.services.benefit, icon: Gift },
    { key: 'features', label: t.services.features, icon: ListChecks },
  ];

  const services = t.services.services;
  const current = services[activeService];
  
  // Ambil gambar dan prototype berdasarkan index (activeService), bukan berdasarkan nama
  const currentStaticData = serviceStaticData[activeService] || {};
  const img = currentStaticData.image || FALLBACK_IMAGE;
  const prototypes = currentStaticData.prototypes || [];

  const bookService = (serviceName: string) => {
    const msg = `Hello Hasan, I'm interested in your "${serviceName}" service. Can we discuss further?`;
    window.open(`https://wa.me/6289620928296?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.20} />

      <section className="section-pad relative z-10 pt-32">
        <div className="container-max">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">Services</span>
          <h1 className="heading-lg heading-text mb-4">{t.services.title}</h1>
          <p className="text-body max-w-2xl mb-16">{t.services.subtitle}</p>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((s: any, i: number) => (
              <button 
                key={i} 
                onClick={() => setActiveService(i)}
                className={`card-glass overflow-hidden text-left group transition-all duration-300
                  ${activeService === i ? 'ring-2 ring-sky-500/60 -translate-y-1' : ''}`}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    // Gunakan index 'i' untuk mengambil gambar dari array static data
                    src={serviceStaticData[i]?.image || FALLBACK_IMAGE} 
                    alt={s.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold heading-text mb-1">{s.name}</h3>
                  <p className="text-xs font-semibold grad-text">{s.price}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail View */}
          <div className="card-glass overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                <img 
                  src={img} 
                  alt={current.name} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
              </div>

              <div className="lg:col-span-3 p-8 lg:p-10">
                <h2 className="heading-md heading-text mb-6">{current.name}</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tabs.map((tab) => (
                    <button 
                      key={tab.key} 
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full transition-all duration-200 service-tab
                        ${activeTab === tab.key ? 'service-tab-active' : ''}`}
                    >
                      <tab.icon size={12} /> {tab.label}
                    </button>
                  ))}
                </div>

                <div className="min-h-[8rem]">
                  {activeTab === 'objective' && <p className="text-body animate-fade-in">{current.objective}</p>}
                  {activeTab === 'price' && (
                    <div className="animate-fade-in">
                      <p className="text-2xl font-black grad-text">{current.price}</p>
                      <p className="text-sm text-muted mt-2">Final pricing depends on scope, complexity, and custom features.</p>
                    </div>
                  )}
                  {activeTab === 'suitableFor' && <p className="text-body animate-fade-in">{current.suitableFor}</p>}
                  {activeTab === 'benefit' && <p className="text-body animate-fade-in">{current.benefit}</p>}
                  {activeTab === 'features' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fade-in">
                      {current.features.map((f: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" style={{ boxShadow: '0 0 6px #38bdf8' }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {prototypes.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-sky-500/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">{t.services.viewPrototype}</p>
                    <div className="flex flex-wrap gap-2">
                      {prototypes.map((p: string, i: number) => (
                        <a 
                          key={i} 
                          href={p} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border text-muted hover:border-sky-400/50 hover:text-sky-500 transition-all social-icon" 
                          style={{ borderRadius: '9999px', width: 'auto' }}
                        >
                          <ExternalLink size={12} /> Demo {i + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <button onClick={() => bookService(current.name)} className="btn-primary mt-8">
                  {t.services.bookService} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
