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
      className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute left-[-140px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                  CampE Solutions
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.45rem] lg:leading-[1.05]">
                Services built around control,
                <span className="block text-white/55">not software hype.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg lg:justify-self-end">
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
                <div className="group relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065] sm:p-7">
                  <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-cyan-300/8 blur-3xl transition group-hover:bg-cyan-300/14" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                      <Icon size={22} className="text-cyan-200" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/45">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.02em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/55 sm:text-[15px]">
                    {service.desc}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-white/62"
                      >
                        <CheckCircle2 size={15} className="text-cyan-200" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#finalcta"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100/80 transition group-hover:text-white"
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