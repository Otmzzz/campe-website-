import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  DatabaseZap,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Solutions() {
  const services = [
    {
      icon: Workflow,
      eyebrow: 'OPERATING SYSTEMS',
      title: 'Business Systems Design',
      desc: 'Structure workflows, roles, handoffs, approvals, and control points so the organization moves with less confusion.',
      points: ['Workflow structure', 'Role clarity', 'Control points'],
    },
    {
      icon: BrainCircuit,
      eyebrow: 'AI ENABLEMENT',
      title: 'AI Workflow Systems',
      desc: 'Apply AI where it improves documentation, decision support, reporting, internal knowledge, and repetitive work.',
      points: ['Prompt workflows', 'Knowledge systems', 'Task reduction'],
    },
    {
      icon: BarChart3,
      eyebrow: 'VISIBILITY',
      title: 'Decision Dashboards',
      desc: 'Turn scattered spreadsheets, POS exports, and operating records into dashboards leaders can actually use.',
      points: ['Power BI reports', 'KPI design', 'Executive view'],
    },
    {
      icon: ShieldCheck,
      eyebrow: 'CONTROL',
      title: 'Cybersecurity Readiness',
      desc: 'Identify access risks, data exposure, weak controls, and practical security gaps before they become costly.',
      points: ['Access review', 'Risk mapping', 'Control design'],
    },
    {
      icon: Cloud,
      eyebrow: 'INFRASTRUCTURE',
      title: 'Cloud Readiness',
      desc: 'Plan cloud accounts, backups, ownership, permissions, deployment discipline, and scalable digital infrastructure.',
      points: ['Cloud planning', 'Backup discipline', 'Account governance'],
    },
    {
      icon: DatabaseZap,
      eyebrow: 'AUTOMATION',
      title: 'Data Flow Automation',
      desc: 'Connect forms, sheets, databases, dashboards, and approval flows to reduce manual chasing and reporting delays.',
      points: ['Data pipelines', 'Automation logic', 'Reporting flow'],
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-slate-50 px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute left-[-160px] top-24 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-140px] h-[480px] w-[480px] rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  CampE Solutions
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.45rem] lg:leading-[1.05]">
                Services built around control,
                <span className="block text-slate-500">not software hype.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              CampE helps organizations clarify how work should move, what data
              should be captured, who should act, and how leadership should see
              progress before tools are selected.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl sm:p-7">
                  <div className="absolute right-[-70px] top-[-70px] h-44 w-44 rounded-full bg-cyan-100 blur-3xl transition group-hover:bg-cyan-200/70" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07111f] text-cyan-200 shadow-lg shadow-slate-300/40">
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-slate-400">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="relative mt-7 text-2xl font-semibold tracking-[-0.02em] text-[#07111f]">
                    {service.title}
                  </h3>

                  <p className="relative mt-4 min-h-[112px] text-sm leading-7 text-slate-500 sm:text-[15px]">
                    {service.desc}
                  </p>

                  <div className="relative mt-6 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2 size={15} className="text-cyan-600" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#finalcta"
                    className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#07111f] transition group-hover:text-cyan-700"
                  >
                    Discuss this service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}