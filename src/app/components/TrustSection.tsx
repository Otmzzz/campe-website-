import {
  BarChart3,
  CheckCircle2,
  Cloud,
  Facebook,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function TrustSection() {
  const capabilities = [
    {
      icon: Workflow,
      label: 'Workflow Design',
      detail: 'Operating flow, handoffs, approvals',
    },
    {
      icon: BarChart3,
      label: 'Decision Dashboards',
      detail: 'KPI visibility and executive reporting',
    },
    {
      icon: Cloud,
      label: 'Cloud Readiness',
      detail: 'Accounts, backups, ownership, deployment',
    },
    {
      icon: ShieldCheck,
      label: 'Security Control',
      detail: 'Access, risk, accountability, compliance',
    },
    {
      icon: Network,
      label: 'System Integration',
      detail: 'Data flow across tools and teams',
    },
  ];

  const proofPoints = [
    'Business-first technology planning',
    'Governance-aware system design',
    'Executive visibility through dashboards',
    'Built around real operating conditions',
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-22 text-[#07111f] sm:px-8 lg:px-10 lg:py-28">
      <div className="absolute left-[-140px] top-10 h-[380px] w-[380px] rounded-full bg-cyan-100 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Trust Layer
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
                Practical systems work,
                <span className="block text-slate-500">not presentation theory.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              CampE combines business operations, systems analysis, dashboards,
              cloud readiness, automation, and security control into one
              execution-focused consulting approach.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 0.04}>
                <div className="group h-full rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07111f] text-cyan-200">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-base font-semibold text-[#07111f]">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 grid gap-5 rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 shadow-sm lg:grid-cols-[1fr_1.1fr] lg:p-7">
            <div className="rounded-[1.4rem] bg-[#07111f] p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                <LockKeyhole size={22} className="text-cyan-200" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
                CampE Standard
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                Clarity must be operational before it becomes digital.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {proofPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium leading-6 text-slate-600"
                >
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-5 shadow-sm sm:flex-row">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Server size={18} className="text-cyan-600" />
              <span>
                Built for organizations that need visibility, control, and better execution.
              </span>
            </div>

            <a
              href="https://www.facebook.com/campecomputing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#07111f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10243d]"
            >
              <Facebook size={17} />
              Visit Facebook Page
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}