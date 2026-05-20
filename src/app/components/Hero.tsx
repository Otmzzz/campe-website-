import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { AnimatedCounter } from './AnimatedCounter';

import awsLogo from '../assets/logos/aws.svg';
import fortinetLogo from '../assets/logos/fortinet.svg';
import azureLogo from '../assets/logos/azure.svg';
import powerBiLogo from '../assets/logos/powerbi.svg';

export function Hero() {
  const stats = [
    { value: 4, suffix: '', label: 'Operating domains aligned' },
    { value: 1, suffix: '', label: 'Leadership control view' },
    { value: 24, suffix: '/7', label: 'Coordination readiness' },
  ];

  const logos = [
    { src: powerBiLogo, label: 'Power BI' },
    { src: azureLogo, label: 'Microsoft Azure' },
    { src: awsLogo, label: 'AWS' },
    { src: fortinetLogo, label: 'Fortinet' },
  ];

  const focusAreas = ['Workflow', 'Data', 'People', 'Execution'];

  const controlLines = [
    'Governance and approval paths',
    'Operational reporting discipline',
    'Emergency coordination visibility',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07111f] pt-32 text-white sm:pt-36 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111f,#0b1728,#10243d)]" />

      <div className="absolute inset-0 opacity-[0.035]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="absolute left-[-120px] top-8 h-[380px] w-[380px] rounded-full bg-cyan-300/8 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-80px] h-[520px] w-[520px] rounded-full bg-blue-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-[1280px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="mx-auto mb-7 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl lg:mx-0">
              <span className="text-[11px] font-medium tracking-[0.14em] text-white/68">
                BUSINESS SYSTEMS & GOVERNANCE CONSULTING
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mx-auto max-w-4xl text-[2.45rem] font-semibold leading-tight tracking-[-0.015em] text-white sm:text-5xl md:text-6xl lg:mx-0 lg:text-[4.35rem]">
              Turning operational complexity into controlled systems.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg lg:mx-0">
              CampE helps leadership teams align workflow, data, people, and
              execution into structured operating systems with clearer visibility,
              stronger governance, and better decision control.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#solutions"
                className="group inline-flex w-full max-w-[300px] items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] shadow-xl shadow-black/20 transition hover:bg-cyan-50 sm:w-auto"
              >
                Review the approach
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#why-campe"
                className="inline-flex w-full max-w-[300px] items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/75 transition hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                See governance fit
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
                <ShieldCheck size={15} className="text-cyan-200" />
                Governance structure
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
                <Zap size={15} className="text-cyan-200" />
                Execution visibility
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
                <CheckCircle2 size={15} className="text-cyan-200" />
                Emergency coordination
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl sm:gap-4 lg:max-w-none">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-5"
                >
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-[11px] leading-4 text-white/50 sm:text-sm">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="relative mx-auto mt-8 w-full max-w-xl sm:mt-0">
            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="border-b border-white/10 px-5 py-4 sm:px-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
                  CampE Operating Architecture
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-3xl">
                  One control view for work that cannot stay scattered.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/56 sm:text-[15px]">
                  A practical structure for operations, reporting, controls, and
                  response coordination before tools are selected or expanded.
                </p>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div key={area} className="bg-[#0a1524]/95 p-5 sm:p-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/38">
                      Aligned domain
                    </p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      {area}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-5 py-5 sm:px-7 sm:py-6">
                <div className="space-y-3">
                  {controlLines.map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/68"
                    >
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-200/80" />
                      {line}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/38">
                    Platform alignment
                  </p>

                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {logos.map((logo) => (
                      <div
                        key={logo.label}
                        className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/95 p-2 shadow-lg shadow-black/15 sm:h-14"
                      >
                        <img
                          src={logo.src}
                          alt={logo.label}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
