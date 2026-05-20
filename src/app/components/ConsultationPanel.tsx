import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { supabase } from '../lib/supabaseClient';
import campeLogo from '../assets/logos/campe-technologies.png';

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
  'w-full rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/15';

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
        <div className="fixed inset-0 z-[90] flex items-center justify-center px-0 py-6 sm:px-4">
          <motion.button
            type="button"
            aria-label="Close consultation request"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-panel-title"
            className="relative z-10 flex max-h-[88vh] w-[calc(100%-24px)] max-w-[740px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f] text-white shadow-2xl shadow-black/45 sm:w-full"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex h-[96px] items-center justify-center border-b border-white/10 px-6">
              <img
                src={campeLogo}
                alt="CampE Technologies"
                className="block h-auto w-[300px] object-contain sm:w-[360px]"
              />

              <button
                type="button"
                onClick={onClose}
                className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white/80 transition hover:border-cyan-400/40 hover:text-white"
                aria-label="Close consultation request panel"
              >
                X
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
              <div className="mx-auto w-full max-w-[620px]">
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

                <div className="mt-8 flex flex-col items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[56px] w-full max-w-[420px] items-center justify-center rounded-2xl bg-white px-8 text-base font-semibold text-slate-950 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting
                      ? 'Submitting request...'
                      : 'Prepare consultation request'}
                  </button>

                  {submitStatus && (
                    <p
                      role={submitStatus.type === 'error' ? 'alert' : 'status'}
                      className={`mx-auto max-w-[560px] rounded-2xl border px-5 py-4 text-center text-sm leading-6 ${
                        submitStatus.type === 'success'
                          ? 'border-cyan-300/20 bg-cyan-300/10 text-cyan-50'
                          : 'border-red-300/25 bg-red-400/10 text-red-100'
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}

                  <p className="max-w-[520px] text-center text-sm leading-6 text-white/45">
                    This prepares your consultation request. CampE will review the
                    details before confirming the next step.
                  </p>
                </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
