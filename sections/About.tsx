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
            I&apos;m a physicist and data analyst with a background in{" "}
            <strong>Nuclear and Radiation Physics</strong>. My work explores how
            physical modeling and data science intersect — using simulation,
            mathematical modeling, and Python-based computation to interpret and
            visualize complex physical and engineering systems.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p>
            I enjoy extracting meaning from data — whether through field
            measurements, simulation output, or experimental results — and
            transforming those insights into clear, evidence-based narratives.
            Beyond research, I value clarity in communication and enjoy
            mentoring and developing learning strategies that inspire curiosity
            and engagement.
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
        alt="Atom"
        width={500}
        height={500}
        className="absolute bottom-0 -z-10 hidden overflow-clip opacity-10 md:-right-70 md:block"
      />
    </section>
  );
};

export default About;
