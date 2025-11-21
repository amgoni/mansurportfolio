import Reveal from "@/components/ui/reveal";

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal variant="up">
        <h2 className="mb-8 text-center text-4xl">My Experience</h2>
      </Reveal>

      <div className="space-y-8">
        <Reveal variant="up" delay={0.1}>
          <div className="flex items-start gap-4">
            <span
              className="bg-primary mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
              aria-hidden
            />
            <div>
              <h3 className="text-xl font-semibold">
                PhD Researcher – São Paulo State University (UNESP), Brazil
                (2025–Present)
              </h3>
              <p className="text-foreground text-base">
                Run numerical simulations in Python for orbital and asteroid
                dynamics; analyze mean motion resonances and long-term orbital
                behavior; build and test computational models to support
                research tasks; prepare and curate data for meetings and discuss
                results with my supervisor; collaborate with the research group
                on shared projects and scientific objectives; review scientific
                papers to refine research direction and methodology.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal variant="up" delay={0.15}>
          <div className="flex items-start gap-4">
            <span
              className="bg-primary mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
              aria-hidden
            />
            <div>
              <h3 className="text-xl font-semibold">
                Assistant Lecturer – Nigerian Defence Academy (2023–2025)
              </h3>
              <p className="text-foreground text-base">
                Conducts research in computational and nuclear physics. Analyzes
                experimental data using statistical and computational techniques
                and develops instructional lab materials.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.25}>
          <div className="flex items-start gap-4">
            <span
              className="bg-primary mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
              aria-hidden
            />
            <div>
              <h3 className="text-xl font-semibold">
                Boot camp on Effective Grant Application Writing for Researchers
                – CRISAT, Nigerian Defence Academy, Kaduna (2020)
              </h3>
              <p className="text-foreground text-base">
                Participated in an intensive workshop focused on crafting
                competitive research grant proposals, emphasizing clarity,
                structure, and funder alignment.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.35}>
          <div className="flex items-start gap-4">
            <span
              className="bg-primary mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
              aria-hidden
            />
            <div>
              <h3 className="text-xl font-semibold">
                Physics Instructor – NYSC, Dutse (2017–2018)
              </h3>
              <p className="text-foreground text-base">
                Designed and implemented lessons combining theoretical and
                experimental approaches to improve comprehension and engagement.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
