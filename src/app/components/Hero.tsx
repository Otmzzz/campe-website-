import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

import powerbiLogo from '../assets/logos/powerbi.svg';
import azureLogo from '../assets/logos/azure.svg';
import awsLogo from '../assets/logos/aws.svg';
import fortinetLogo from '../assets/logos/fortinet.svg';

export function Hero() {
  const logoVisuals = [
    {
      src: powerbiLogo,
      label: 'Power BI',
      size: 'w-16 sm:w-20 md:w-24 lg:w-28',
      imageClass: 'drop-shadow-[0_22px_48px_rgba(250,204,21,0.18)]',
      delay: 0,
    },
    {
      src: azureLogo,
      label: 'Microsoft Azure',
      size: 'w-28 sm:w-32 md:w-40 lg:w-48',
      imageClass: 'drop-shadow-[0_22px_48px_rgba(56,189,248,0.2)]',
      delay: 0.35,
    },
    {
      src: awsLogo,
      label: 'AWS',
      size: 'w-20 sm:w-24 md:w-28 lg:w-36',
      imageClass: 'brightness-0 invert opacity-85',
      delay: 0.7,
    },
    {
      src: fortinetLogo,
      label: 'Fortinet',
      size: 'w-36 sm:w-44 md:w-56 lg:w-72',
      imageClass: 'brightness-0 invert opacity-82',
      delay: 1.05,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07111f] pt-32 text-white sm:pt-36 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#06101d_0%,#0b1728_48%,#10243d_100%)]" />

      <div className="absolute inset-0 opacity-[0.035]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[1360px] flex-col justify-center px-5 pb-16 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[1180px] overflow-hidden py-12 sm:py-14 lg:py-16">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-100/20 to-transparent" />
            <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-x-0 top-1/3 h-1/2 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.1),rgba(59,130,246,0.08),transparent)]" />

            <div className="relative z-10 mx-auto grid max-w-[360px] grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:flex sm:max-w-[760px] sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-9 lg:max-w-[1040px] lg:gap-x-16">
              {logoVisuals.map((logo) => (
                <motion.img
                  key={logo.label}
                  src={logo.src}
                  alt={logo.label}
                  className={`max-h-20 object-contain sm:max-h-24 lg:max-h-32 ${logo.size} ${logo.imageClass}`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: logo.delay,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 mx-auto mt-10 h-px max-w-[86%] bg-gradient-to-r from-transparent via-white/18 to-transparent sm:mt-12" />
            <p className="relative z-10 mt-5 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-100/62 sm:mt-6">
              Business systems and governance consulting
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 max-w-5xl text-center sm:mt-10 lg:mt-8">
          <Reveal delay={0.08}>
            <h1 className="mx-auto max-w-4xl text-[2.35rem] font-semibold leading-tight tracking-[-0.01em] text-white sm:text-5xl md:text-[3.5rem] lg:text-[3.85rem]">
              Turning operational complexity into controlled systems.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              CampE helps leadership teams align workflow, data, people, and
              execution into structured operating systems with clearer visibility,
              stronger governance, and better decision control.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </div>
      </div>
    </section>
  );
}
