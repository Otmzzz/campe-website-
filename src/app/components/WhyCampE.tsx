import {
  BadgeCheck,
  BrainCircuit,
  Building2,
  Gauge,
  LockKeyhole,
  Network,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function WhyCampE() {
  const trustPoints = [
    {
      icon: Network,
      value: 'Systems-first',
      label: 'We structure the whole workflow before choosing the tool.',
    },
    {
      icon: BrainCircuit,
      value: 'AI-ready',
      label: 'We apply AI where it creates real operational advantage.',
    },
    {
      icon: Gauge,
      value: 'Measurable',
      label: 'We define KPIs, dashboards, and execution indicators.',
    },
    {
      icon: LockKeyhole,
      value: 'Secure by design',
      label: 'We consider access, controls, risk, and governance early.',
    },
  ];

  const credibility = [
    'Business Systems Intelligence',
    'Applied AI Architecture',
    'Data Analytics & Dashboards',
    'Cybersecurity Readiness',
    'Cloud Modernization',
    'Operational Governance',
  ];

  return (
    <section
      id="why-campe"
      className="relative overflow-hidden bg-[#07111f] px-6 py-28 text-white lg:px-12"
    >
      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-10 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              Why CampE
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Built for leaders who need
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                clarity before execution.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              CampE is not just about adding technology. We help organizations
              understand their pain points, structure their workflow, secure
              their operations, and measure what matters.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credibility.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/75"
                >
                  <BadgeCheck size={17} className="text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 shadow-lg shadow-cyan-500/20">
                  <Building2 size={26} className="text-white" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
                    CampE Standard
                  </p>
                  <h3 className="text-2xl font-black text-white">
                    Structured Transformation
                  </h3>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {trustPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <Reveal key={point.value} delay={index * 0.05}>
                      <div className="group rounded-[1.7rem] border border-white/10 bg-[#07111f]/55 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                          <Icon size={22} className="text-cyan-200" />
                        </div>

                        <h4 className="text-xl font-black text-white">
                          {point.value}
                        </h4>

                        <p className="mt-3 leading-7 text-white/55">
                          {point.label}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="mt-7 rounded-[1.7rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                  CampE Principle
                </p>
                <p className="mt-3 text-lg font-semibold leading-8 text-white">
                  Technology works best when the business system is already clear.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}