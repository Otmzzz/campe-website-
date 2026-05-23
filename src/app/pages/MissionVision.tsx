export function MissionVision() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#07111f]">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#ffffff_0%,#f8fbfd_54%,#ecfeff_100%)]" />
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <section className="relative z-10 px-5 pb-24 pt-40 sm:px-8 sm:pt-44 lg:px-10 lg:pb-32 lg:pt-48">
        <div className="mx-auto max-w-[860px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Mission & Vision
          </p>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl lg:text-[3.65rem]">
            Measurable answers for organizations facing complexity and change.
          </h1>

          <div className="mt-12 space-y-12 text-[17px] leading-9 text-slate-600">
            <section>
              <h2 className="text-2xl font-semibold leading-tight text-[#07111f]">
                Our Vision
              </h2>

              <p className="mt-5">
                By 2030, CampE Technologies aims to become a preferred BI and
                systems development partner for organizations that need
                measurable, sustainable answers to business vulnerability,
                uncertainty, complexity, and ambiguity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold leading-tight text-[#07111f]">
                Mission Statement
              </h2>

              <p className="mt-5">
                CampE Technologies exists to help organizations and communities
                solve practical problems through the combined strength of human
                judgment, structured systems thinking, business intelligence,
                and Applied AI.
              </p>

              <p className="mt-8">
                Our mission is to design services that remain relevant to real
                operational needs — improving visibility, strengthening
                workflows, supporting better decisions, and creating measurable
                value for the people and communities we serve.
              </p>
            </section>

            <p className="text-xl font-semibold leading-9 text-[#07111f]">
              Turning operational complexity into controlled systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
