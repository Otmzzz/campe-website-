import { ArrowRight, PlayCircle, ShieldCheck, Zap } from 'lucide-react';
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
    {
      src: powerBiLogo,
      label: 'Power BI',
      className: 'left-[7%] top-[12%] h-24 w-24',
      delay: '0s',
    },
    {
      src: azureLogo,
      label: 'Microsoft Azure',
      className: 'right-[3%] top-[17%] h-24 w-36',
      delay: '0.4s',
    },
    {
      src: awsLogo,
      label: 'left-[3%] bottom-[18%] h-24 w-36',
      className: 'left-[3%] bottom-[18%] h-24 w-36',
      delay: '0.8s',
    },
    {
      src: fortinetLogo,
      label: 'Fortinet',
      className: 'right-[7%] bottom-[14%] h-20 w-44',
      delay: '1.2s',
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#06101e] via-[#0d1c33] to-[#172d4c]">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path
                d="M 42 0 L 0 0 0 42"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] items-center gap-14 px-6 pb-16 pt-28 lg:grid-cols-2 lg:px-12">
        <div>
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-xl backdrop-blur-xl">
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              <span className="text-sm text-white/90">
                Business Systems • AI • Cybersecurity • Dashboards
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Turning Complexity
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
                Profitable Clarity.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              CampE helps organizations modernize operations through structured
              systems, applied AI, cybersecurity readiness, analytics dashboards,
              and execution-focused consulting.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#finalcta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-8 py-4 font-bold text-[#07111f] shadow-2xl shadow-cyan-400/25 transition-all hover:scale-105 hover:bg-white"
              >
                Book Consultation
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20"
              >
                <PlayCircle size={20} />
                See Our Process
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <ShieldCheck size={16} className="text-cyan-200" />
                Governance-ready
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <Zap size={16} className="text-cyan-200" />
                Execution-focused
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-xl backdrop-blur-xl"
                >
                  <p className="text-3xl font-black text-white">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto h-[540px] w-full max-w-2xl">
            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/10" />
            <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-center shadow-2xl backdrop-blur-xl">
              <div>
                <p className="text-sm font-bold tracking-[0.3em] text-cyan-200">
                  CAMPE
                </p>
                <h3 className="mt-3 text-3xl font-black text-white">
                  Technology
                  <span className="block">Ecosystem</span>
                </h3>
                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-white/55">
                  Cloud, analytics, security, and systems connected into one
                  clear execution layer.
                </p>
              </div>
            </div>

            {logos.map((logo) => (
              <div
                key={logo.label}
                className={`absolute z-20 flex items-center justify-center rounded-3xl bg-white/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 ${logo.className}`}
                style={{
                  animation: `floatLogo 5s ease-in-out infinite`,
                  animationDelay: logo.delay,
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}

            <div className="absolute left-[18%] top-[44%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)]" />
            <div className="absolute right-[22%] top-[55%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.9)]" />
            <div className="absolute bottom-[34%] left-[48%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(165,243,252,0.9)]" />

            <style>
              {`
                @keyframes floatLogo {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-16px);
                  }
                }
              `}
            </style>
          </div>
        </Reveal>
      </div>
    </section>
  );
}