import { motion } from 'framer-motion';

const techLogos = [
  { src: '/tech/ANGULAR.jpg', alt: 'Angular' },
  { src: '/tech/HOSTINGER.jpg', alt: 'Hostinger' },
  { src: '/tech/JAVASCRIPT.jpg', alt: 'JavaScript' },
  { src: '/tech/MYSQL.jpg', alt: 'MySQL' },
  { src: '/tech/POWERBI-2.jpg', alt: 'Power BI' },
  { src: '/tech/REACT.jpg', alt: 'React' },
  { src: '/tech/SUPABASE.jpg', alt: 'Supabase' },
  { src: '/tech/VERCEL.jpg', alt: 'Vercel' },
];

const marqueeLogos = [...techLogos, ...techLogos];

export function TechMotionStrip() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-20 text-[#07111f] sm:py-24">
      <p className="mb-12 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        Technology and systems execution stack
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <motion.div
          className="flex w-max items-center gap-16 sm:gap-20 lg:gap-24"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto shrink-0 object-contain opacity-95 transition duration-300 hover:scale-105 hover:opacity-100 sm:h-14 lg:h-20"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
