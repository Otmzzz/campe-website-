import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from './Reveal';

const serviceSlides = [
  {
    src: '/services/PM-1.png',
    title: 'Business Intelligence',
    description: 'Dashboards, analytics, and clearer decision visibility.',
  },
  {
    src: '/services/PM-2.png',
    title: 'Cloud Infrastructure',
    description: 'Cloud control, deployment structure, and IT governance support.',
  },
  {
    src: '/services/PM-3.png',
    title: 'AI Integration',
    description: 'Applied AI and workflow automation aligned with real operations.',
  },
  {
    src: '/services/PM-4.png',
    title: 'Governance & Systems',
    description:
      'Process control, accountability, and structured operating visibility.',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = serviceSlides[currentSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % serviceSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const showPreviousSlide = () => {
    setCurrentSlide(
      (slide) => (slide - 1 + serviceSlides.length) % serviceSlides.length,
    );
  };

  const showNextSlide = () => {
    setCurrentSlide((slide) => (slide + 1) % serviceSlides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-32 text-[#07111f] sm:pt-36 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#ffffff_0%,#f8fbfd_52%,#ecfeff_100%)]" />

      <div className="absolute inset-0 opacity-[0.5]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.035]" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-96px)] flex-col justify-center pb-16">
        <Reveal>
          <>
            <div className="relative w-full max-w-none overflow-hidden bg-white px-0">
              <div className="relative h-[360px] w-full overflow-hidden rounded-none md:h-[480px] lg:h-[560px] xl:h-[620px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.src}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.995 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={activeSlide.src}
                      alt={activeSlide.title}
                      className="h-full w-full object-cover object-[center_40%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/25 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-full items-center justify-between px-4 md:px-6 lg:px-8">
                  <button
                    type="button"
                    onClick={showPreviousSlide}
                    aria-label="Show previous service"
                    className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/85 text-[#07111f] shadow-lg shadow-slate-950/10 backdrop-blur transition hover:bg-white sm:h-12 sm:w-12"
                  >
                    <ChevronLeft size={24} strokeWidth={1.8} />
                  </button>

                  <button
                    type="button"
                    onClick={showNextSlide}
                    aria-label="Show next service"
                    className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/85 text-[#07111f] shadow-lg shadow-slate-950/10 backdrop-blur transition hover:bg-white sm:h-12 sm:w-12"
                  >
                    <ChevronRight size={24} strokeWidth={1.8} />
                  </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-8 lg:p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="max-w-xl"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                        Service Capability
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                        {activeSlide.title}
                      </h2>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-white/82 sm:text-base">
                        {activeSlide.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-6 flex gap-2">
                    {serviceSlides.map((slide, index) => (
                      <button
                        key={slide.title}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Show ${slide.title}`}
                        className={`h-1.5 rounded-full transition-all ${
                          currentSlide === index
                            ? 'w-8 bg-white'
                            : 'w-3 bg-white/45 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-8 h-px max-w-[86%] bg-gradient-to-r from-transparent via-slate-300 to-transparent sm:mt-10" />
            <p className="relative z-10 mt-5 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-800/70 sm:mt-6">
              Business systems and governance consulting
            </p>
          </>
        </Reveal>

        <div className="mx-auto mt-8 max-w-5xl px-5 text-center sm:mt-10 sm:px-8 lg:mt-8 lg:px-10">
          <Reveal delay={0.08}>
            <h1 className="mx-auto max-w-4xl text-[2.35rem] font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl md:text-[3.5rem] lg:text-[3.85rem]">
              Turning operational complexity into controlled systems.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              CampE helps leadership teams align workflow, data, people, and
              execution into structured operating systems with clearer visibility,
              stronger governance, and better decision control.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#solutions"
                className="group inline-flex w-full max-w-[300px] items-center justify-center gap-3 rounded-full bg-[#07111f] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-300/40 transition hover:bg-[#10243d] sm:w-auto"
              >
                Review the approach
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#why-campe"
                className="inline-flex w-full max-w-[300px] items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-800 sm:w-auto"
              >
                See governance fit
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
