import Reveal from "@/components/ui/reveal";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="text-foreground relative mx-auto -my-4 max-w-4xl px-6 pb-16"
    >
      <Reveal>
        <h2 className="mb-8 text-center text-4xl font-bold">About Me</h2>
      </Reveal>

      <div className="space-y-6 text-lg">
        <Reveal delay={0.2}>
          <p>
            I&apos;m a data scientist and Python developer with a strong
            foundation in physics modelling and simulation. I specialize in
            analysing complex datasets, building predictive models, and
            transforming simulation or experimental data into actionable
            insights. I leverage Python, statistical modelling, and data
            visualization to extract meaningful patterns from complex systems,
            from nuclear reactors to orbital mechanics. My work combines
            computational rigor, problem-solving, and clear communication to
            deliver insights that drive informed decisions.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p>
            I&apos;m motivated by the challenge of turning complex results into
            clear, evidence-based narratives, whether they come from
            simulations, measurements, or experiments. I focus on presenting
            insights in ways that are intuitive, practical, and useful for
            decision-making. I also enjoy mentoring and helping others build
            strong analytical and problem-solving skills.
          </p>
        </Reveal>
      </div>

      {/* Subsections */}
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <Reveal delay={0.4}>
          <div className="rounded-xl md:p-6">
            <h3 className="mb-3 text-2xl font-semibold">Interests</h3>
            <ul className="disc list-disc space-y-1 pl-5 text-lg leading-relaxed tracking-wide">
              <li>Physical fitness and outdoor activity</li>
              <li>Watching films and documentaries</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="rounded-xl md:p-6">
            <h3 className="mb-3 text-2xl font-semibold">
              Community & Volunteering
            </h3>
            <p className="text-lg">
              I volunteer with <em>Essence International School</em> in Kaduna —
              my alma mater — supporting initiatives that provide food,
              clothing, and educational resources to underprivileged families
              and orphans.
            </p>
          </div>
        </Reveal>
      </div>

      <Image
        src="/atom.png"
        alt=""
        aria-hidden="true"
        width={500}
        height={500}
        className="absolute bottom-0 -z-10 hidden overflow-clip opacity-10 md:-right-70 md:block"
      />
    </section>
  );
};

export default About;
