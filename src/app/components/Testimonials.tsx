import { Quote, Star, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'CampE helped streamline our operations and gave management clearer visibility across sales, inventory, and daily performance.',
      author: 'Operations Executive',
      role: 'Regional Retail Group',
      result: 'Improved reporting clarity',
    },
    {
      quote:
        'Their structured approach to systems and security gave us confidence to modernize without disrupting operations.',
      author: 'Technology Decision Maker',
      role: 'Healthcare Organization',
      result: 'Safer digital transition',
    },
    {
      quote:
        'The dashboards and workflow improvements helped leadership make faster, better-informed decisions.',
      author: 'Business Owner',
      role: 'Manufacturing Sector',
      result: 'Faster executive decisions',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] py-28">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Trusted Results
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-[#07111f] md:text-5xl lg:text-6xl">
              Trusted by leaders who value
              <span className="block text-blue-600">
                clarity and execution
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              Organizations work with CampE when they need practical systems,
              measurable improvement, and reliable implementation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-cyan-300 hover:shadow-2xl hover:shadow-blue-100">
                <div className="absolute right-8 top-8 opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-15">
                  <Quote size={58} className="text-blue-600" />
                </div>

                <div className="relative z-10">
                  <div className="mb-5 flex gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>

                  <p className="text-[17px] leading-8 text-[#07111f]">
                    "{item.quote}"
                  </p>

                  <div className="mt-7 rounded-2xl bg-slate-50 p-4 transition-all duration-300 group-hover:bg-blue-50/60">
                    <p className="font-semibold text-[#07111f]">
                      {item.author}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.role}
                    </p>

                    <div className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                      {item.result}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl bg-[#07111f] px-8 py-10 text-center text-white shadow-2xl">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Ready to improve your operations?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Let’s discuss where friction exists and how CampE can turn it into progress.
            </p>

            <a
              href="#finalcta"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#07111f] transition-all hover:scale-105 hover:shadow-xl"
            >
              Book Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}