import {
  ArrowRight,
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
      value: 'System before software',
      label: 'We map the workflow first, then choose the tools that fit.',
    },
    {
      icon: BrainCircuit,
      value: 'AI with purpose',
      label: 'We apply AI only where it improves speed, clarity, or control.',
    },
    {
      icon: Gauge,
      value: 'Measured execution',
      label: 'We define dashboards, KPIs, and operating signals leaders can act on.',
    },
    {
      icon: LockKeyhole,
      value: 'Governed by design',
      label: 'We consider access, accountability, controls, and risk early.',
    },
  ];

  const credibility = [
    'Systems Architecture',
    'Applied AI Workflows',
    'Decision Dashboards',
    'Cloud Readiness',
    'Cybersecurity Control',
    'Operational Governance',
  ];

  return (
    <section
      id="why-campe"
      className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute right-[-140px] top-24 h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute left-[-120px] bottom-10 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                Why CampE
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
              We do not start with tools.
              <span className="block text-white/55">
                We start with control.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
              CampE helps leaders turn scattered work, unclear decisions, and
              disconnected data into structured operating systems that can be
              measured, improved, and scaled.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credibility.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/68"
                >
                  <BadgeCheck size={16} className="text-cyan-200" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#solutions"
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold text-[#07111f] shadow-lg shadow-black/20 transition hover:bg-cyan-50"
            >
              Explore Solutions
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.25rem] bg-cyan-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-7 lg:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                  <Building2 size={24} className="text-cyan-200" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/75">
                    CampE Method
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Clarity → Control → Scale
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <Reveal key={point.value} delay={index * 0.05}>
                      <div className="group min-h-[190px] rounded-[1.5rem] border border-white/10 bg-[#07111f]/55 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08]">
                          <Icon size={20} className="text-cyan-200" />
                        </div>

                        <h4 className="text-lg font-semibold text-white">
                          {point.value}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-white/55">
                          {point.label}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/75">
                  Operating Principle
                </p>
                <p className="mt-3 text-lg font-medium leading-8 text-white/82">
                  Technology becomes powerful only when the business system is
                  already clear.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}