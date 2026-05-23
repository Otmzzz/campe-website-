import { Reveal } from './Reveal';

type FinalCTAProps = {
  onConsultationClick?: () => void;
};

export function FinalCTA(_props: FinalCTAProps) {
  return (
    <section
      id="finalcta"
      className="relative border-y border-slate-200 bg-slate-50 px-5 py-20 text-[#07111f] sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(236,254,255,0.35))]" />

      <div className="relative z-10 mx-auto max-w-[1040px]">
        <Reveal>
          <div className="max-w-[760px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/75">
              Operating Clarity
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-4xl lg:text-[2.8rem]">
              Structure before scale.
            </h2>

            <p className="mt-5 max-w-[680px] text-base leading-8 text-slate-600">
              CampE helps teams make ownership, reporting, and governance easier
              to see before complexity turns into daily operating friction.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
