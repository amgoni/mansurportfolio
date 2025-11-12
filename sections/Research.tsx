import Reveal from "@/components/ui/reveal";
import Image from "next/image";

const projects = [
  {
    title: "Analysis of Safety Features in Advanced Boiling Water Reactor",
    description:
      "Conducted simulation and transient safety analysis using PCTRAN simulator. Applied statistical modeling to assess reactivity and operational safety under critical scenarios.",
    img: "/abwr.png",
    alt: "Advanced Boiling Water Reactor simulation thumbnail",
  },
  {
    title: "Atmospheric Effects on Radio Wave Transmission",
    description:
      "Analyzed the influence of temperature and refractive index on radio signal propagation using statistical methods and data modeling.",
    img: "/radio-wave.png",
    alt: "Atmospheric effects on radio wave transmission thumbnail",
  },
];

const Research = () => {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-center text-4xl">My Research</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, index) => (
          <Reveal
            key={proj.title}
            className="group border-border bg-card overflow-hidden rounded-2xl border"
            delay={0.3 + index * 0.1}
          >
            <div className="bg-muted relative aspect-video w-full">
              <Image
                src={proj.img}
                alt={proj.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-primary text-xl font-semibold">
                {proj.title}
              </h3>
              <p className="text-foreground text-base">{proj.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Research;
