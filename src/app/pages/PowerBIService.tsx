import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const dashboardImages = [
  {
    src: '/powerbi/dashboardV2-1.png',
    alt: 'Power BI dashboard reference showing business performance metrics',
  },
  {
    src: '/powerbi/dashboardV2-2.png',
    alt: 'Power BI dashboard reference showing operational reporting views',
  },
  {
    src: '/powerbi/dashboardV2-3.png',
    alt: 'Power BI dashboard reference showing executive KPI reporting',
  },
];

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

function DashboardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % dashboardImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? dashboardImages.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % dashboardImages.length);
  };

  return (
    <div className="mt-10 lg:mt-0">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/20">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
          {dashboardImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-contain p-1.5 transition-all duration-700 ease-out sm:p-2 ${
                index === activeIndex
                  ? 'translate-x-0 opacity-100'
                  : index < activeIndex
                    ? '-translate-x-4 opacity-0'
                    : 'translate-x-4 opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3 sm:px-5">
          <button
            type="button"
            aria-label="Show previous dashboard reference"
            onClick={showPrevious}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#06101d]/85 text-white transition hover:border-cyan-200/60 hover:bg-[#0b1a2d] focus:outline-none focus:ring-2 focus:ring-cyan-200/60 sm:h-11 sm:w-11"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Show next dashboard reference"
            onClick={showNext}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#06101d]/85 text-white transition hover:border-cyan-200/60 hover:bg-[#0b1a2d] focus:outline-none focus:ring-2 focus:ring-cyan-200/60 sm:h-11 sm:w-11"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <p className="mt-4 max-w-4xl text-[12px] leading-6 text-slate-500">
        Temporary visual references only. Images are sourced from publicly
        available Google Images and will be replaced with actual CampE Power BI
        dashboard samples.
      </p>
    </div>
  );
}

export function PowerBIService() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-40 sm:pt-44 lg:pt-48">
        <div className="absolute inset-x-0 top-0 h-px bg-cyan-200" />
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-20 sm:px-7 lg:max-w-[1320px] lg:grid-cols-[minmax(360px,0.74fr)_minmax(0,1.36fr)] lg:items-center lg:gap-10 lg:px-10 lg:pb-24 xl:max-w-[1380px]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
              CAMPE SERVICE LINE
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl lg:text-[56px]">
              Power BI Development for Operational Control
            </h1>

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
              CampE builds Power BI reporting systems that help leadership see
              sales, inventory, workflow, and performance issues before they
              become hidden operational problems.
            </p>
          </div>

          <div className="lg:self-center">
            <DashboardCarousel />
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
              Data exists. Control is still missing.
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600">
              Many businesses already have data from Excel, POS, Shopify,
              accounting files, receiving reports, and manual trackers. The
              problem is not always a lack of information. It is that leadership
              still lacks one reliable control view that shows what is happening,
              what is drifting, and where attention is needed.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
              CampE Approach
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-[2.25rem]">
              From scattered sources to a usable review system.
            </h2>
            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              We begin with the way decisions are actually made, then work back
              into the data structure, refresh logic, and dashboard pages needed
              to support that review rhythm.
            </p>
          </div>

          <div className="mt-10 max-w-4xl border-t border-slate-200">
            {approachItems.map((item, index) => (
              <div
                key={item}
                className="flex flex-col gap-2 border-b border-slate-200 py-5 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan-700/70 sm:w-16">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
              Deliverables
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-[2.25rem]">
              Practical assets your team can review and maintain.
            </h2>
            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              Each engagement is shaped around the dashboards, definitions, and
              handover material your team needs to keep reporting useful after
              launch.
            </p>
          </div>

          <div className="mt-10 max-w-4xl border-t border-slate-200">
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
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
              Best Fit
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-[2.25rem]">
              Built for teams that need clearer operating signals.
            </h2>
            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              This service is strongest where day-to-day activity already
              produces useful data, but management still depends on manual
              consolidation or delayed reporting.
            </p>
          </div>

          <div className="mt-10 max-w-4xl border-t border-slate-200">
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
