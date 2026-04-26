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
      eyebrow: 'Operations',
      title: 'Business Systems Architecture',
      desc: 'We map messy daily operations into clear workflows, role assignments, control points, SOPs, and execution dashboards.',
      points: ['Workflow Mapping', 'SOP Logic', 'Responsibility Matrix'],
    },
    {
      icon: BrainCircuit,
      eyebrow: 'AI Enablement',
      title: 'Applied AI Workflow Design',
      desc: 'We help teams use AI for documentation, decision support, content structuring, internal knowledge, and repetitive task reduction.',
      points: ['Prompt Systems', 'AI Workflows', 'Knowledge Structuring'],
    },
    {
      icon: BarChart3,
      eyebrow: 'Leadership Visibility',
      title: 'Data Analytics & Dashboards',
      desc: 'We convert raw spreadsheets, POS exports, operations records, and scattered reports into decision-ready dashboards.',
      points: ['Power BI Dashboards', 'KPI Design', 'Executive Reporting'],
    },
    {
      icon: ShieldCheck,
      eyebrow: 'Risk & Controls',
      title: 'Cybersecurity Readiness',
      desc: 'We review users, access, data exposure, control gaps, and practical security procedures before problems become costly.',
      points: ['Access Review', 'Risk Mapping', 'Control Design'],
    },
    {
      icon: Cloud,
      eyebrow: 'Modernization',
      title: 'Cloud & Digital Infrastructure',
      desc: 'We guide organizations in cloud planning, backup discipline, account ownership, access governance, and scalable deployment.',
      points: ['Cloud Planning', 'Backup Readiness', 'Account Governance'],
    },
    {
      icon: DatabaseZap,
      eyebrow: 'Automation',
      title: 'Process Automation & Data Flow',
      desc: 'We connect forms, sheets, databases, dashboards, and approval flows so teams spend less time chasing manual updates.',
      points: ['Data Flow Design', 'Automation Logic', 'Reporting Pipelines'],
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#07111f] px-6 py-28 text-white lg:px-12"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              <CheckCircle2 size={15} />
              CampE Consulting Stack
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Practical systems for
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                leaders who need control.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
              CampE does not just recommend tools. We clarify how the business
              should move, what data should be captured, who should act, and how
              leadership should see progress.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 shadow-lg shadow-cyan-500/20">
                      <Icon size={25} className="text-white" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/70">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/60">
                    {service.desc}
                  </p>

                  <div className="mt-7 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <CheckCircle2 size={16} className="text-cyan-300" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#finalcta"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition group-hover:text-white"
                  >
                    Discuss This Service
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
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