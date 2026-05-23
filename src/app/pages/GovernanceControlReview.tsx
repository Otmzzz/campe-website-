import { ArrowRight, CheckCircle2 } from 'lucide-react';

type CampEPageLayoutProps = {
  label: string;
  title: string;
  subtitle: string;
  focusLabel: string;
  focusItems: string[];
  problemTitle: string;
  problemBody: string;
  approachTitle: string;
  approachItems: string[];
  deliverablesTitle: string;
  deliverables: string[];
  bestFitTitle: string;
  bestFit: string[];
};

export function CampEPageLayout({
  label,
  title,
  subtitle,
  focusLabel,
  focusItems,
  problemTitle,
  problemBody,
  approachTitle,
  approachItems,
  deliverablesTitle,
  deliverables,
  bestFitTitle,
  bestFit,
}: CampEPageLayoutProps) {
  return (
    <main className="relative">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-40 sm:pt-44 lg:pt-48">
        <div className="absolute inset-x-0 top-0 h-px bg-cyan-200" />
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-20 sm:px-7 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
              {label}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl lg:text-[56px]">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
              {subtitle}
            </p>
          </div>

          <div className="border-y border-slate-200 py-7 lg:self-end">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan-700/75">
              {focusLabel}
            </p>
            <div className="mt-6 space-y-5">
              {focusItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-[15px] font-semibold text-slate-800">{item}</span>
                  <ArrowRight size={16} className="text-cyan-700/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-7 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
            The Problem
          </p>

          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-[2.25rem]">
              {problemTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600">
              {problemBody}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
                CampE Approach
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-[2.25rem]">
                {approachTitle}
              </h2>
            </div>

            <div className="border-t border-slate-200">
              {approachItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-slate-200 py-5"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-700" />
                  <span className="text-[15px] font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-7 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
              Deliverables
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-[2.25rem]">
              {deliverablesTitle}
            </h2>
          </div>

          <div className="grid gap-x-10 border-t border-slate-200 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="border-b border-slate-200 py-5 text-[15px] font-semibold text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-7 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
              Best Fit
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-[2.25rem]">
              {bestFitTitle}
            </h2>
          </div>

          <div className="border-t border-slate-200">
            {bestFit.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-6 border-b border-slate-200 py-5"
              >
                <span className="text-[15px] font-semibold text-slate-800">
                  {item}
                </span>
                <ArrowRight size={16} className="shrink-0 text-cyan-700/70" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function GovernanceControlReview() {
  return (
    <CampEPageLayout
      label="CAMPE SERVICE LINE"
      title="Governance and Control Review"
      subtitle="CampE reviews workflows, approvals, accountability, and reporting controls so leadership can see where operations are exposed, unclear, or dependent on undocumented practices."
      focusLabel="Control Review Focus"
      focusItems={[
        'Workflow exposure',
        'Approval clarity',
        'Accountability gaps',
        'Reporting controls',
      ]}
      problemTitle="Operations can look stable while control gaps quietly expand."
      problemBody="Teams often rely on informal approvals, undocumented exceptions, spreadsheet handoffs, and individual memory to keep work moving. Leadership may receive updates, but still lack a clear view of who owns decisions, where approvals are bypassed, and which practices create unnecessary operational exposure."
      approachTitle="CampE reviews the operating reality behind the stated process."
      approachItems={[
        'Workflow and approval review',
        'Role and ownership mapping',
        'Reporting control assessment',
        'Exception and escalation review',
        'Documentation gap analysis',
        'Leadership control recommendations',
      ]}
      deliverablesTitle="A practical control view leadership can use."
      deliverables={[
        'Governance review summary',
        'Control gap register',
        'Approval and ownership map',
        'Reporting control observations',
        'Priority improvement actions',
        'Optional governance roadmap',
      ]}
      bestFitTitle="Useful when growth has outpaced formal operating discipline."
      bestFit={[
        'Growing businesses with unclear approvals',
        'Teams dependent on undocumented practices',
        'Owners needing stronger accountability',
        'Operations with recurring exceptions',
        'Leadership teams preparing for better governance',
      ]}
    />
  );
}
