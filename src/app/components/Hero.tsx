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
    { value: 95, suffix: '%', label: 'Clearer workflows' },
    { value: 24, suffix: '/7', label: 'Operational visibility' },
    { value: 3, suffix: 'x', label: 'Faster decisions' },
  ];

  const logos = [
    { src: powerBiLogo, label: 'Power BI', position: 'left-[6%] top-[10%]', delay: 0 },
    { src: azureLogo, label: 'Microsoft Azure', position: 'right-[4%] top-[22%]', delay: 0.4 },
    { src: awsLogo, label: 'AWS', position: 'left-[2%] bottom-[22%]', delay: 0.8 },
    { src: fortinetLogo, label: 'Fortinet', position: 'right-[10%] bottom-[14%]', delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07111f] pt-32 text-white sm:pt-36 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111f,#0b1728,#10243d)]" />

      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-[1280px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="mx-auto mb-7 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl lg:mx-0">
              <span className="text-xs font-medium tracking-[0.18em] text-white/70">
                SYSTEMS INTELLIGENCE CONSULTING
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mx-auto max-w-4xl text-[2.85rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:mx-0 lg:text-[5.35rem]">
              Turning business complexity into structured clarity.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg lg:mx-0">
              CampE helps organizations design smarter systems, improve operational
              control, build decision dashboards, and modernize workflows without
              losing human direction.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#solutions"
                className="group inline-flex w-full max-w-[300px] items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] shadow-xl shadow-black/20 transition hover:bg-cyan-50 sm:w-auto"
              >
                Explore Solutions
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#why-campe"
                className="inline-flex w-full max-w-[300px] items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/75 transition hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                Why CampE
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
                <ShieldCheck size={15} className="text-cyan-200" />
                Governance-ready
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
                <Zap size={15} className="text-cyan-200" />
                Execution-focused
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
                <CheckCircle2 size={15} className="text-cyan-200" />
                Built for control
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl sm:gap-4 lg:max-w-none">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl sm:p-5"
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
          <div className="relative mx-auto hidden h-[500px] w-full max-w-xl sm:block lg:h-[600px]">
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <motion.div
              className="absolute left-1/2 top-1/2 z-10 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/[0.07] text-center shadow-2xl shadow-black/30 backdrop-blur-2xl lg:h-80 lg:w-80"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="px-8">
                <p className="text-xs font-semibold tracking-[0.38em] text-cyan-200">
                  CAMPE
                </p>

                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white lg:text-4xl">
                  Systems
                  <span className="block">Control Layer</span>
                </h3>

                <p className="mx-auto mt-5 max-w-[230px] text-sm leading-6 text-white/55">
                  Analytics, cloud, cybersecurity, and workflow design aligned
                  into one operating view.
                </p>
              </div>
            </motion.div>

            {logos.map((logo) => (
              <motion.div
                key={logo.label}
                className={`absolute z-20 flex h-16 w-28 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/95 p-3 shadow-2xl shadow-black/25 sm:h-20 sm:w-32 lg:h-22 lg:w-36 ${logo.position}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: logo.delay,
                }}
                whileHover={{ scale: 1.06 }}
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}