import { ArrowRight, CalendarDays, CheckCircle2, Mail } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';

export function FinalCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    concern: 'Workflow Structuring',
    preferredDate: '',
    message: '',
  });

  const points = [
    'Review workflow, governance, or coordination issues',
    'Identify data, reporting, and responsibility gaps',
    'Assess system, implementation, or control risks',
    'Outline a practical first-stage engagement',
  ];

  const concerns = [
    'Workflow Structuring',
    'Governance / Control Systems',
    'Data Visibility / Reporting',
    'Implementation Planning',
    'Emergency / Field Coordination',
    'General Systems Review',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('CampE Systems Review Request');

    const body = encodeURIComponent(
      `Hello CampE Technologies,

I would like to request an initial systems review.

Name: ${form.name}
Email: ${form.email}
Organization: ${form.organization}
Review Area: ${form.concern}
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
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/58">
                  Systems Review Request
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-5xl lg:text-[3.1rem]">
                Start with the operating issue.
                <span className="block text-white/55">
                  Then define the right first step.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
                Share the workflow, governance, reporting, implementation, or
                coordination concern. CampE will review it from a practical
                systems and operating model perspective.
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
                The first conversation is designed to understand the operating
                situation before recommending scope, tools, or implementation work.
              </p>

              <p className="mt-2 text-sm leading-7 text-white/42">
                Paid clarity sessions start at ₱15,000. Full engagements are
                scoped separately after review.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="border-t border-white/10 bg-[#07111f]/55 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-100">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-200/68">
                    Review Intake
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Send systems review details
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
                  placeholder="Organization / office"
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
                  placeholder="Briefly describe the operating issue or review need..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/40 focus:bg-white/[0.08]"
                />

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] shadow-xl shadow-black/20 transition hover:bg-cyan-50"
                >
                  <Mail size={17} />
                  Prepare systems review request
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-white/38">
                  This opens your email app with the review request already prepared.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
