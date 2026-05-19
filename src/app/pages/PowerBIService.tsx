import { ArrowRight, CheckCircle2 } from 'lucide-react';

const approachItems = [
  'Data source review',
  'KPI definition',
  'Data model structuring',
  'Dashboard design',
  'Refresh and reporting flow',
  'Leadership review format',
];

const deliverables = [
  'Power BI dashboard pages',
  'KPI structure',
  'Data model logic',
  'Refresh workflow guide',
  'Basic user handover notes',
  'Optional improvement roadmap',
];

const bestFit = [
  'Retail businesses',
  'Inventory-heavy operations',
  'Management teams using Excel manually',
  'Owners who need clearer control reports',
  'Teams preparing for better governance and accountability',
];

export function PowerBIService() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#06101d] pt-40 sm:pt-44 lg:pt-48">
        <div className="absolute inset-x-0 top-0 h-px bg-cyan-200/30" />
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-20 sm:px-7 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200/85">
              CAMPE SERVICE LINE
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Power BI Development for Operational Control
            </h1>

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-slate-300 sm:text-[18px]">
              CampE builds Power BI reporting systems that help leadership see
              sales, inventory, workflow, and performance issues before they
              become hidden operational problems.
            </p>

            <a
              href="#finalcta"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-bold text-[#06101d] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Book Consultation
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="border-y border-white/10 py-7 lg:self-end">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-100/70">
              Reporting Focus
            </p>
            <div className="mt-6 space-y-5">
              {['Sales visibility', 'Inventory movement', 'Workflow status', 'Leadership control'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[15px] font-bold text-white">{item}</span>
                    <ArrowRight size={16} className="text-cyan-200/70" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#07111f]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-7 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200/75">
            The Problem
          </p>

          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Data exists. Control is still missing.
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-300">
              Many businesses already have data from Excel, POS, Shopify,
              accounting files, receiving reports, and manual trackers. The
              problem is not always a lack of information. It is that leadership
              still lacks one reliable control view that shows what is happening,
              what is drifting, and where attention is needed.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#081625]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200/75">
                CampE Approach
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                From scattered sources to a usable review system.
              </h2>
            </div>

            <div className="border-t border-white/10">
              {approachItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 py-5"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-200" />
                  <span className="text-[15px] font-bold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#07111f]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-7 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200/75">
              Deliverables
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Practical assets your team can review and maintain.
            </h2>
          </div>

          <div className="grid gap-x-10 border-t border-white/10 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="border-b border-white/10 py-5 text-[15px] font-bold text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#081625]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-7 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200/75">
              Best Fit
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Built for teams that need clearer operating signals.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {bestFit.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-6 border-b border-white/10 py-5"
              >
                <span className="text-[15px] font-bold text-slate-100">
                  {item}
                </span>
                <ArrowRight size={16} className="shrink-0 text-cyan-200/70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06101d]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-16 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-200/75">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Need a clearer control view?
            </h2>
          </div>

          <a
            href="#finalcta"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-bold text-[#06101d] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
          >
            Book Consultation
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
