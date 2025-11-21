import Reveal from "@/components/ui/reveal";
import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  bullets: string[];
  github?: string;
  img?: string; // placeholder path to be replaced
  alt?: string;
};

const projects: Project[] = [
  {
    title: "Advanced Boiling Water Reactor Transient Analysis",
    github:
      "https://github.com/mansurby/ABWR-Feed-Water-transient-FSAR-Compliant-",
    bullets: [
      "Simulated reactor transients using PCTRAN and Python, analyzing feed-water scenarios and safety-critical responses.",
      "Applied statistical modeling and visualization to interpret simulation results for operational safety insights.",
    ],
    img: "/projects/abwr.jpg",
    alt: "Advanced Boiling Water Reactor transient analysis simulation graphic",
  },
  {
    title: "Comet Orbit Simulation",
    github: "https://github.com/mansurby/Comet-Orbit-Simulation",
    bullets: [
      "Developed Python simulations of cometary orbits using Newtonian mechanics.",
      "Visualized orbital trajectories and analyzed orbital parameters for accuracy and predictive modeling.",
    ],
    img: "/projects/comet-simulation.jpg",
    alt: "Comet orbit simulation trajectory visualization",
  },
  {
    title: "Calculator",
    github: "https://github.com/mansurby/Calculator",
    bullets: [
      "Built a fully functional Python-based calculator.",
      "Demonstrates programming fundamentals, problem-solving, and interface development.",
    ],
    img: "/projects/calculator.jpg",
    alt: "Python calculator application UI",
  },
  {
    title: "Newton’s Law of Gravitation Simulation",
    github: "https://github.com/mansurby/Newton-s-Law-of-Gravitation",
    bullets: [
      "Modeled gravitational interactions between bodies using Python.",
      "Created interactive plots to explore force dynamics, reinforcing computational and physics modeling skills.",
    ],
    img: "/projects/universal-law-of-gravitation.jpg",
    alt: "Visualization of Newton's law of gravitation simulation",
  },
  {
    title: "Circular Restricted Three Body Problem (CR3BP)",
    github: "https://github.com/mansurby/CR3BP",
    bullets: [
      "Simulated the motion of a small body under the influence of two larger bodies.",
      "Applied Python to solve differential equations and visualize trajectories, demonstrating advanced mathematical modeling and coding proficiency.",
    ],
    img: "/projects/circular-restricted-3-bp.jpg",
    alt: "CR3BP trajectory simulation plot",
  },
  {
    title: "Two Body Problem: Earth-Moon System",
    github: "https://github.com/mansurby/Earth-Moon-Two-Body-Problem",
    bullets: [
      "Simulated Earth-Moon orbital dynamics using Python.",
      "Used data visualization to present results, illustrating the ability to handle complex physical systems computationally.",
    ],
    img: "/projects/2-bp.jpg",
    alt: "Earth-Moon two body orbital dynamics visualization",
  },
  // {
  //   title: "Atmospheric Effects on Radio Wave Transmission",
  //   bullets: [
  //     "Analysed the impact of temperature and refractive index on radio signals.",
  //     "Applied statistical and computational methods in Python to model signal propagation.",
  //     "Created visualizations to communicate findings effectively.",
  //   ],
  //   img: "/projects/radio-wave.png",
  //   alt: "Visualization of atmospheric effects on radio wave transmission",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16">
      <Reveal variant="up">
        <h2 className="mb-8 text-center text-4xl">My Projects</h2>
      </Reveal>
      <div className="grid items-stretch gap-8 sm:grid-cols-2">
        {projects.map((proj, i) => {
          const card = (
            <Reveal
              key={proj.title}
              delay={0.2 + i * 0.05}
              className="group border-border bg-card flex h-full flex-col overflow-hidden rounded-xl border transition-shadow duration-200"
            >
              <div className="bg-muted relative aspect-4/3 w-full">
                {/* Placeholder image area; replace img paths in data with real assets */}
                <Image
                  src={proj.img || "/placeholder.png"}
                  alt={proj.alt || `${proj.title} thumbnail placeholder`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-primary text-xl font-semibold">
                  {proj.title}
                </h3>
                <ul className="text-foreground flex-1 list-disc space-y-0.5 pl-5 text-sm">
                  {proj.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
          return proj.github ? (
            <a
              key={proj.title}
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository for ${proj.title}`}
              className="focus:ring-ring focus:ring-offset-background block h-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              {React.cloneElement(card as any, {
                className: `${(card as any).props.className} hover:shadow-md hover:shadow-primary/10`,
              })}
            </a>
          ) : (
            card
          );
        })}
      </div>
      <Image
        src="/rocket.png"
        alt=""
        aria-hidden="true"
        width={500}
        height={500}
        className="absolute top-250 -z-10 hidden overflow-clip opacity-10 md:right-30 md:block"
      />
    </section>
  );
};

export default Projects;
