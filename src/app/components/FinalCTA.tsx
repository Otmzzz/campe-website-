import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  User,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCTA() {
  const benefits = [
    '30-minute discovery consultation',
    'No obligation initial discussion',
    'Systems, AI, dashboards, cybersecurity',
    'Clear next-step recommendations',
  ];

  return (
    <section
      id="finalcta"
      className="relative overflow-hidden bg-gradient-to-b from-[#07111f] via-[#0b1728] to-[#07111f] px-6 py-28 text-white lg:px-12"
    >
      <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT SIDE */}
        <Reveal>
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              Book Consultation
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Let’s build clarity
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                into your operations.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              If your business has workflow confusion, reporting gaps,
              scaling issues, or outdated systems — CampE can help structure
              the next move.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3"
                >
                  <CheckCircle2 size={18} className="text-cyan-300" />
                  <span className="text-white/75">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                CampE Note
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Great systems reduce friction, confusion, and wasted effort.
              </p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE FORM */}
        <Reveal delay={0.12}>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <h3 className="text-3xl font-black text-white">
              Request a Consultation
            </h3>

            <p className="mt-3 text-white/55">
              Tell us a little about your needs.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-3">
                    <User size={18} className="text-cyan-200" />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent outline-none placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Company
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-3">
                    <Building2 size={18} className="text-cyan-200" />
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full bg-transparent outline-none placeholder:text-white/30"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Email
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-3">
                    <Mail size={18} className="text-cyan-200" />
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full bg-transparent outline-none placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Phone
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-3">
                    <Phone size={18} className="text-cyan-200" />
                    <input
                      type="text"
                      placeholder="+63"
                      className="w-full bg-transparent outline-none placeholder:text-white/30"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Preferred Schedule
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-3">
                  <CalendarDays size={18} className="text-cyan-200" />
                  <input
                    type="text"
                    placeholder="Preferred day / time"
                    className="w-full bg-transparent outline-none placeholder:text-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  What do you need help with?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us your current challenge..."
                  className="w-full rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-3 outline-none placeholder:text-white/30"
                />
              </div>

              <button
                type="button"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-8 py-4 font-bold text-[#07111f] shadow-2xl shadow-cyan-400/20 transition-all hover:scale-[1.02] hover:bg-white"
              >
                Submit Request
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}