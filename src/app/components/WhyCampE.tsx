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
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute right-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-3xl" />
      <div className="absolute left-[-140px] bottom-10 h-[380px] w-[380px] rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Why CampE
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
              We do not start with tools.
              <span className="block text-slate-500">
                We start with control.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              CampE helps leaders turn scattered work, unclear decisions, and
              disconnected data into structured operating systems that can be
              measured, improved, and scaled.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credibility.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm"
                >
                  <BadgeCheck size={16} className="text-cyan-600" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#solutions"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#07111f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:bg-[#10243d]"
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
            <div className="absolute inset-0 rounded-[2.25rem] bg-cyan-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7 lg:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#07111f] text-cyan-200">
                  <Building2 size={24} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700/70">
                    CampE Method
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-[#07111f]">
                    Clarity → Control → Scale
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <Reveal key={point.value} delay={index * 0.05}>
                      <div className="group min-h-[190px] rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg">
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm">
                          <Icon size={20} />
                        </div>

                        <h4 className="text-lg font-semibold text-[#07111f]">
                          {point.value}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {point.label}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700/70">
                  Operating Principle
                </p>
                <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
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