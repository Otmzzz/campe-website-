import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { AnimatedCounter } from './AnimatedCounter';

import awsLogo from '../assets/logos/aws.svg';
import fortinetLogo from '../assets/logos/fortinet.svg';
import azureLogo from '../assets/logos/azure.svg';
import powerBiLogo from '../assets/logos/powerbi.svg';

export function Hero() {
  const stats = [
    { value: 95, suffix: '%', label: 'Process clarity' },
    { value: 24, suffix: '/7', label: 'Systems mindset' },
    { value: 3, suffix: 'x', label: 'Faster visibility' },
  ];

  const logos = [
    { src: powerBiLogo, label: 'Power BI', position: 'left-[8%] top-[8%]', delay: 0 },
    { src: azureLogo, label: 'Microsoft Azure', position: 'right-[2%] top-[20%]', delay: 0.4 },
    { src: awsLogo, label: 'AWS', position: 'left-[0%] bottom-[20%]', delay: 0.8 },
    { src: fortinetLogo, label: 'Fortinet', position: 'right-[8%] bottom-[12%]', delay: 1.2 },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#07111f] pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.2),transparent_35%),linear-gradient(135deg,#07111f,#0b1b32,#102747)]" />

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-[1440px] items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:px-14">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 shadow-xl backdrop-blur-xl">
              <Sparkles size={16} className="text-cyan-200" />
              <span className="text-xs font-semibold tracking-wide text-white/85 sm:text-sm">
                Systems Intelligence for Modern Organizations
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:mx-0 lg:text-8xl">
              Turning
              <span className="block">Complexity</span>
              <span className="block bg-gradient-to-r from-cyan-200 via-sky-200 to-white bg-clip-text text-transparent">
                Into Profitable
              </span>
              <span className="block text-cyan-100">Clarity.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg md:text-xl lg:mx-0">
              CampE helps organizations modernize operations through structured systems,
              applied AI, cybersecurity readiness, analytics dashboards, and
              execution-focused consulting.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex justify-center lg:justify-start">
              <a
                href="#solutions"
                className="group relative inline-flex w-full max-w-xs items-center justify-center gap-3 overflow-hidden rounded-full bg-cyan-300 px-8 py-4 text-base font-black text-[#07111f] shadow-2xl shadow-cyan-400/30 transition-all duration-300 hover:scale-105 hover:bg-white sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Explore Solutions</span>
                <ArrowRight size={20} className="relative transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/75 backdrop-blur-xl">
                <ShieldCheck size={16} className="text-cyan-200" />
                Governance-ready
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/75 backdrop-blur-xl">
                <Zap size={16} className="text-cyan-200" />
                Execution-focused
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/75 backdrop-blur-xl">
                <CheckCircle2 size={16} className="text-cyan-200" />
                Built for clarity
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 shadow-xl backdrop-blur-xl"
                >
                  <p className="text-3xl font-black text-white">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/55">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="relative mx-auto h-[430px] w-full max-w-xl sm:h-[560px] lg:h-[620px] lg:max-w-2xl">
            <motion.div
              className="absolute inset-10 rounded-full border border-cyan-200/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="absolute inset-20 rounded-full border border-blue-200/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 z-10 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.09] text-center shadow-2xl backdrop-blur-2xl sm:h-80 sm:w-80"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="px-8">
                <p className="text-xs font-black tracking-[0.45em] text-cyan-200">
                  CAMPE
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Technology
                  <span className="block">Ecosystem</span>
                </h3>
                <p className="mx-auto mt-4 max-w-[230px] text-sm leading-6 text-white/55">
                  Cloud, analytics, security, and systems connected into one
                  clear execution layer.
                </p>
              </div>
            </motion.div>

            {logos.map((logo) => (
              <motion.div
                key={logo.label}
                className={`absolute z-20 flex h-20 w-32 items-center justify-center rounded-[1.7rem] bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:h-24 sm:w-40 ${logo.position}`}
                animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: logo.delay,
                }}
                whileHover={{ scale: 1.12, rotate: 0 }}
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}

            <motion.div
              className="absolute left-[18%] top-[42%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_28px_rgba(103,232,249,1)]"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            <motion.div
              className="absolute right-[20%] top-[54%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,1)]"
              animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
              className="absolute bottom-[30%] left-[48%] h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_24px_rgba(165,243,252,1)]"
              animate={{ scale: [1, 1.7, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}