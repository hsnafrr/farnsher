import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

export default function Contact() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Hasan,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/6289620928296?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const labelClass = 'text-xs font-bold uppercase tracking-wider text-muted mb-2 block';

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.00} />

      <section className="section-pad relative z-10 pt-32">
        <div className="container-max">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 mb-4 block">Contact</span>
          <h1 className="heading-lg heading-text mb-4">{t.contact.title}</h1>
          <p className="text-body max-w-2xl mb-16">{t.contact.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <a href="https://wa.me/6289620928296" target="_blank" rel="noopener noreferrer" className="card-glass p-6 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 16px rgba(16,185,129,0.3)' }}>
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t.contact.whatsapp}</p>
                  <p className="text-sm font-semibold heading-text group-hover:text-sky-500 transition-colors">+62 896 2092 8296</p>
                </div>
              </a>

              <a href="mailto:hasan.aufar1504@gmail.com" className="card-glass p-6 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', boxShadow: '0 0 16px rgba(14,165,233,0.3)' }}>
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t.contact.email}</p>
                  <p className="text-sm font-semibold heading-text group-hover:text-sky-500 transition-colors break-all">hasan.aufar1504@gmail.com</p>
                </div>
              </a>

              <a href="mailto:hyvestudio1504@gmail.com" className="card-glass p-6 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', boxShadow: '0 0 16px rgba(245,158,11,0.3)' }}>
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t.contact.businessEmail}</p>
                  <p className="text-sm font-semibold heading-text group-hover:text-sky-500 transition-colors break-all">hyvestudio1504@gmail.com</p>
                </div>
              </a>

              <div className="card-glass p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(128,128,128,0.1)' }}>
                  <MapPin size={20} className="text-muted" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t.contact.location}</p>
                  <p className="text-sm font-semibold heading-text">Yogyakarta, Indonesia</p>
                </div>
              </div>

              <div className="card-glass p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(128,128,128,0.1)' }}>
                  <Clock size={20} className="text-muted" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t.contact.responseTime}</p>
                  <p className="text-sm font-semibold heading-text">07:00 – 21:00 WIB</p>
                </div>
              </div>

              <div className="card-glass p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(128,128,128,0.1)' }}>
                  <MapPin size={20} className="text-muted" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t.contact.serviceArea}</p>
                  <p className="text-sm font-semibold heading-text">{t.contact.serviceAreaText}</p>
                </div>
              </div>

              <a href="https://wa.me/6289620928296" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-2xl text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 24px rgba(16,185,129,0.3)' }}>
                <MessageCircle size={18} /> {t.contact.chatWhatsapp}
              </a>
            </div>

            {/* Form */}
            <div className="card-glass p-8">
              <h3 className="heading-md heading-text mb-6">{t.contact.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClass}>{t.contact.name}</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
                </div>
                <div>
                  <label className={labelClass}>{t.contact.emailField}</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
                </div>
                <div>
                  <label className={labelClass}>{t.contact.message}</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  {sent ? 'Redirecting...' : t.contact.send} <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h3 className="heading-md heading-text mb-6">{t.contact.mapTitle}</h3>
            <div className="card-glass overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63232.68977688472!2d110.3166656!3d-7.8030089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x217202fd33e5e8e3!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1700000000000"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Location Map" className="map-iframe" />
            </div>
            <a href="https://maps.app.goo.gl/3eEVjfviCvs9R58DA" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-sky-500 hover:gap-2 transition-all">
              <MapPin size={14} /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
