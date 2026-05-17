import {
  BarChart3,
  CheckCircle2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function TrustSection() {
  const domains = [
    {
      icon: Workflow,
      label: 'Business workflow',
      detail: 'Process movement, handoffs, approvals, and manual tracking.',
    },
    {
      icon: ShieldCheck,
      label: 'Governance and control',
      detail: 'Accountability, documentation, approval paths, and execution discipline.',
    },
    {
      icon: BarChart3,
      label: 'Data visibility',
      detail: 'Dashboards, reporting layers, KPI signals, and management views.',
    },
    {
      icon: LockKeyhole,
      label: 'Cybersecurity readiness',
      detail: 'Access, ownership, risk exposure, and practical control requirements.',
    },
    {
      icon: Network,
      label: 'Emergency and field coordination',
      detail: 'Incident flow, escalation, status visibility, and lifecycle tracking.',
    },
  ];

  const principles = [
    'Map the operating reality',
    'Define control points',
    'Align visibility with decisions',
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#07111f] sm:px-8 lg:px-10 lg:py-24">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Operating Domains
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                Where CampE applies systems clarity.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              CampE works across the operating areas where complexity usually
              builds: workflow, governance, data, control readiness, and
              coordination under pressure.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
            {domains.map((domain, index) => {
              const Icon = domain.icon;

              return (
                <div
                  key={domain.label}
                  className="grid gap-4 border-b border-slate-200 px-5 py-5 last:border-b-0 sm:grid-cols-[auto_1fr] sm:items-start lg:grid-cols-[0.28fr_1fr_auto] lg:px-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07111f] text-cyan-200">
                      <Icon size={18} />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#07111f]">
                      {domain.label}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500 sm:text-[15px]">
                      {domain.detail}
                    </p>
                  </div>

                  <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 lg:flex">
                    Domain
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-6 grid gap-5 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700/70">
                Operating principle
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#07111f]">
                The domain changes. The discipline stays consistent.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {principles.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-600"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
