import { ArrowRight, CalendarDays, CheckCircle2, Mail } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';

export function FinalCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    concern: 'Workflow / Operations',
    preferredDate: '',
    message: '',
  });

  const points = [
    'Understand the current workflow issue',
    'Identify reporting and visibility gaps',
    'Clarify system, data, or control risks',
    'Recommend the next practical move',
  ];

  const concerns = [
    'Workflow / Operations',
    'Dashboards / Reporting',
    'AI Workflow Design',
    'Cloud / Systems Readiness',
    'Cybersecurity / Controls',
    'General Consultation',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('CampE Clarity Consultation Request');

    const body = encodeURIComponent(
      `Hello CampE Technologies,

I would like to request a clarity consultation.

Name: ${form.name}
Email: ${form.email}
Organization: ${form.organization}
Concern Type: ${form.concern}
Preferred Date: ${form.preferredDate}

Message:
${form.message}

Thank you.`
    );

    window.location.href = `mailto:contact@campetechnologies.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="finalcta"
      className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111f,#0b1728,#10243d)]" />

      <div className="absolute inset-0 opacity-[0.045]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:58px_58px]" />
      </div>

      <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-140px] h-[460px] w-[460px] rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT PANEL */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                  Book a Consultation
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
                Start with a clear conversation.
                <span className="block text-white/55">
                  Then decide the next move.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
                Tell us what you want to improve. CampE will review the concern
                from a systems, workflow, reporting, and control perspective.
              </p>

              <div className="mt-9 space-y-3">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/68"
                  >
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-200/80" />
                    {point}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-sm leading-7 text-white/42">
                No hard selling. The first conversation is meant to clarify the
                business issue before proposing any solution.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="border-t border-white/10 bg-[#07111f]/55 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-100">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/70">
                    Appointment Request
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Send consultation details
                  </h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/40 focus:bg-white/[0.08]"
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="Email address"
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/40 focus:bg-white/[0.08]"
                  />
                </div>

                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Organization / Company"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/40 focus:bg-white/[0.08]"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <select
                    name="concern"
                    value={form.concern}
                    onChange={handleChange}
                    className="rounded-2xl border border-white/10 bg-[#0b1728] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200/40"
                  >
                    {concerns.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>

                  <input
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    type="date"
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-200/40 focus:bg-white/[0.08]"
                  />
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Briefly describe what you want to improve..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/40 focus:bg-white/[0.08]"
                />

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] shadow-xl shadow-black/20 transition hover:bg-cyan-50"
                >
                  <Mail size={17} />
                  Prepare Appointment Request
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-white/38">
                  This opens your email app with the request already prepared.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}