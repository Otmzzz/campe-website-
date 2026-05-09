import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import campeLogo from '../assets/logos/campe-technologies.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why CampE', href: '#why-campe' },
    { label: 'Process', href: '#process' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <motion.div
        animate={{
          maxWidth: isScrolled ? 1180 : 1280,
          backgroundColor: isScrolled
            ? 'rgba(7, 17, 31, 0.9)'
            : 'rgba(7, 17, 31, 0.72)',
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="mx-auto rounded-[1.9rem] border border-white/10 shadow-2xl shadow-black/20 backdrop-blur-2xl"
      >
        <motion.div
          animate={{ height: isScrolled ? 76 : 86 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="flex items-center justify-between px-5 sm:px-7 lg:px-8"
        >
          {/* BRAND */}
          <a href="#" className="flex min-w-0 items-center">
            <motion.img
               src={campeLogo}
                alt="CampE Technologies"
              className="-mt-7 h-[34px] w-120 max-w-[190px] object-contain brightness-110 sm:h-[40px] sm:max-w-[230px] lg:h-[46px] lg:max-w-[410px]"
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[14px] font-medium tracking-wide text-white/68 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 rounded-full bg-cyan-200 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="#finalcta"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#07111f] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Book Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.06] text-white backdrop-blur-xl transition hover:bg-white/[0.1] lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mx-3 mb-3 rounded-[1.4rem] border border-white/10 bg-[#0b1728]/96 p-3 shadow-2xl backdrop-blur-2xl">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.04 }}
                    className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-white/75 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.a
                  href="#finalcta"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 }}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07111f]"
                >
                  Book Consultation
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}