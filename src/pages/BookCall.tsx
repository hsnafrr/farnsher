import { useState } from 'react';
import { Send, CheckCircle, Calendar } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import VideoBackground from '../components/VideoBackground';

export default function BookCall() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: '', contact: '', needs: '', service: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*New Booking Request*`, ``,
      `*Name:* ${form.name}`, `*Contact:* ${form.contact}`,
      `*Service:* ${form.service || 'Not specified'}`, ``,
      `*Project Needs:*`, `${form.needs || '-'}`, ``,
      `*Additional Notes:*`, `${form.notes || '-'}`,
    ];
    window.open(`https://wa.me/6289620928296?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const labelClass = 'text-xs font-bold uppercase tracking-wider text-muted mb-2 block';

  return (
    <div className="page-enter relative">
      <VideoBackground opacity={0.00} />

      <section className="section-pad relative z-10 pt-32">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <div className="badge mb-6">
              <Calendar size={14} className="text-sky-500" />
              <span>Free Consultation</span>
            </div>
            <h1 className="heading-lg heading-text mb-4">{t.bookCall.title}</h1>
            <p className="text-body">{t.bookCall.subtitle}</p>
          </div>

          <div className="card-glass p-8 lg:p-10">
            {submitted && (
              <div className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-fade-in"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
                <CheckCircle size={20} className="text-emerald-500 flex-shrink-0" />
                <p className="text-sm font-semibold text-emerald-500">{t.bookCall.successMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={labelClass}>{t.bookCall.name}</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className={labelClass}>{t.bookCall.contactField}</label>
                <input type="text" required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className={labelClass}>{t.bookCall.serviceType}</label>
                <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input-field">
                  <option value="">{t.bookCall.selectService}</option>
                  {t.bookCall.services.map((s) => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>{t.bookCall.needs}</label>
                <textarea required rows={4} value={form.needs} onChange={(e) => setForm({ ...form, needs: e.target.value })} placeholder={t.bookCall.needsPlaceholder} className="input-field resize-none" />
              </div>
              <div>
                <label className={labelClass}>{t.bookCall.notes}</label>
                <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder={t.bookCall.notesPlaceholder} className="input-field resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                {t.bookCall.submit} <Send size={18} />
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-muted mt-6">
            {t.contact.responseTime}: 07:00 – 21:00 WIB · {t.contact.serviceAreaText}
          </p>
        </div>
      </section>
    </div>
  );
}
