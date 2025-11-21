import SkillCard from "@/components/ui/skill-card";
import Reveal from "@/components/ui/reveal";
import Image from "next/image";

const skillGroups = [
  {
    title: "Technical Skills",
    items: [
      { name: "Python – NumPy, Pandas, Matplotlib" },
      { name: "Tools – Jupyter, Excel" },
      { name: "Data Analysis – Cleaning, Statistical, Visualization" },
      { name: "Simulation Data Processing" },
    ],
  },
  {
    title: "Domain Knowledge",
    items: [
      { name: "Nuclear Physics" },
      { name: "Reactor Physics" },
      { name: "Orbital Mechanics" },
      { name: "Physical Modelling & Simulation" },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Problem Solving" },
      { name: "Critical Thinking" },
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Adaptability" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-16">
      <Reveal variant="up">
        <h2 className="mb-8 text-center text-4xl">My Skills</h2>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-3">
        {skillGroups.map((group, groupIdx) => (
          <Reveal key={group.title} variant="up" delay={0.15 + groupIdx * 0.1}>
            <div className="flex flex-col gap-4">
              <h3 className="mb-1 text-2xl font-semibold">{group.title}</h3>
              <div className="grid grid-cols-1 gap-3" role="list">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} variant="up" delay={0.2 + i * 0.03}>
                    <SkillCard name={item.name} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Image
        src="/orbit.png"
        alt=""
        aria-hidden="true"
        width={500}
        height={500}
        className="absolute -bottom-40 -z-10 hidden overflow-clip opacity-10 md:-left-40 md:block"
      />
    </section>
  );
};

export default Skills;
