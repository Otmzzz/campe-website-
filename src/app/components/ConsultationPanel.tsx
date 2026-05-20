import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { supabase } from '../lib/supabaseClient';

type ConsultationPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ConsultationForm = {
  fullName: string;
  email: string;
  organization: string;
  contactNumber: string;
  concern: string;
  preferredDate: string;
  message: string;
};

type SubmitStatus = {
  type: 'success' | 'error';
  message: string;
};

const concerns = [
  'Power BI / Dashboard Development',
  'Governance and Control Review',
  'Cloud and IT Advisory',
  'Systems Architecture',
  'Process Mapping',
  'General Consultation',
];

const initialForm: ConsultationForm = {
  fullName: '',
  email: '',
  organization: '',
  contactNumber: '',
  concern: concerns[0],
  preferredDate: '',
  message: '',
};

const fieldBase =
  'w-full rounded-md border border-white/12 bg-white/[0.07] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/45 focus:bg-white/[0.09]';

const labelBase = 'mb-2 block text-[12px] font-medium text-white/72';

export function ConsultationPanel({ isOpen, onClose }: ConsultationPanelProps) {
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setSubmitStatus(null);
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase.from('consultation_requests').insert({
        full_name: form.fullName.trim(),
        email: form.email.trim(),
        organization: form.organization.trim() || null,
        contact_number: form.contactNumber.trim() || null,
        area_of_concern: form.concern,
        preferred_date: form.preferredDate || null,
        message: form.message.trim(),
        source_page: window.location.pathname,
      });

      if (error) {
        throw error;
      }

      setSubmitStatus({
        type: 'success',
        message:
          'Your consultation request has been submitted. CampE will review the details before confirming the next step.',
      });
      setForm({ ...initialForm });
    } catch (error) {
      const message =
        error && typeof error === 'object' && 'message' in error
          ? String(error.message)
          : 'The request could not be submitted. Please review the details and try again.';

      setSubmitStatus({
        type: 'error',
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90]">
          <motion.button
            type="button"
            aria-label="Close consultation request"
            className="absolute inset-0 bg-slate-950/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-panel-title"
            className="absolute right-0 top-0 flex h-full w-full max-w-[560px] flex-col border-l border-white/10 bg-[#07111f] text-white shadow-2xl shadow-black/40"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
                CampE Intake
              </p>

              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-white/14 px-3 py-2 text-sm font-medium text-white/72 transition hover:border-white/28 hover:bg-white/[0.06] hover:text-white"
                aria-label="Close consultation request panel"
              >
                X
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
              <div className="max-w-[440px]">
                <h2
                  id="consultation-panel-title"
                  className="text-3xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-[2.1rem]"
                >
                  Request a systems review
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/62 sm:text-[15px]">
                  Share the operating issue, reporting gap, or governance concern
                  you want CampE to review.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="consultation-full-name" className={labelBase}>
                    Full name
                  </label>
                  <input
                    id="consultation-full-name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={fieldBase}
                  />
                </div>

                <div>
                  <label htmlFor="consultation-email" className={labelBase}>
                    Email address
                  </label>
                  <input
                    id="consultation-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    autoComplete="email"
                    className={fieldBase}
                  />
                </div>

                <div>
                  <label htmlFor="consultation-organization" className={labelBase}>
                    Organization / company
                  </label>
                  <input
                    id="consultation-organization"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    autoComplete="organization"
                    className={fieldBase}
                  />
                </div>

                <div>
                  <label htmlFor="consultation-contact-number" className={labelBase}>
                    Contact number
                  </label>
                  <input
                    id="consultation-contact-number"
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={handleChange}
                    type="tel"
                    autoComplete="tel"
                    className={fieldBase}
                  />
                </div>

                <div>
                  <label htmlFor="consultation-concern" className={labelBase}>
                    Area of concern
                  </label>
                  <select
                    id="consultation-concern"
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/15 bg-slate-900 px-3.5 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                  >
                    {concerns.map((concern) => (
                      <option
                        key={concern}
                        value={concern}
                        className="bg-slate-950 text-white"
                      >
                        {concern}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="consultation-preferred-date" className={labelBase}>
                    Preferred date
                  </label>
                  <input
                    id="consultation-preferred-date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    type="date"
                    className={fieldBase}
                  />
                </div>

                <div>
                  <label htmlFor="consultation-message" className={labelBase}>
                    Message / operating issue
                  </label>
                  <textarea
                    id="consultation-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${fieldBase} resize-none leading-7`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-white px-5 py-3.5 text-sm font-semibold text-[#07111f] transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200/50 focus:ring-offset-2 focus:ring-offset-[#07111f] disabled:cursor-not-allowed disabled:bg-white/65 disabled:text-[#07111f]/70"
                >
                  {isSubmitting ? 'Submitting request...' : 'Prepare consultation request'}
                </button>

                {submitStatus && (
                  <p
                    role={submitStatus.type === 'error' ? 'alert' : 'status'}
                    className={`rounded-md border px-4 py-3 text-sm leading-6 ${
                      submitStatus.type === 'success'
                        ? 'border-cyan-200/20 bg-cyan-200/10 text-cyan-50'
                        : 'border-red-300/25 bg-red-400/10 text-red-100'
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                )}

                <p className="text-sm leading-6 text-white/48">
                  This prepares your consultation request. CampE will review the
                  details before confirming the next step.
                </p>
              </form>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
