import { Reveal } from './Reveal';

type FinalCTAProps = {
  onConsultationClick: () => void;
};

export function FinalCTA({ onConsultationClick }: FinalCTAProps) {
  return (
    <section
      id="finalcta"
      className="relative border-y border-white/10 bg-[#07111f] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-[1040px]">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[680px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/68">
                Systems Review Request
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-4xl lg:text-[2.8rem]">
                Bring the operating issue into focus.
              </h2>

              <p className="mt-5 max-w-[620px] text-base leading-8 text-white/62">
                Share the reporting gap, workflow issue, or governance concern.
                CampE will review the details before recommending the right next
                step.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:min-w-[260px]">
              <button
                type="button"
                onClick={onConsultationClick}
                className="rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-[#07111f] transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200/50 focus:ring-offset-2 focus:ring-offset-[#07111f]"
              >
                Book Consultation
              </button>

              <p className="text-sm leading-6 text-white/44">
                CampE reviews each request before confirming timing, scope, or
                next steps.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
