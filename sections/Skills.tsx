import SkillCard from "@/components/ui/skill-card";
import Reveal from "@/components/ui/reveal";
import {
  Code2,
  Brain,
  Sigma,
  Database,
  LineChart,
  BarChart3,
  FlaskConical,
  Atom,
  FileSpreadsheet,
  FileText,
  Satellite,
  Monitor,
  Users,
  MessageSquare,
  Lightbulb,
  Presentation,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const skillGroups = [
  {
    title: "Data Science & Programming",
    items: [
      { name: "Python", Icon: Code2 },
      { name: "NumPy", Icon: Sigma },
      { name: "Pandas", Icon: Database },
      { name: "Matplotlib", Icon: LineChart },
    ],
  },
  {
    title: "Physics & Modeling",
    items: [
      { name: "Nuclear Physics", Icon: Atom },
      { name: "Reactor Physics", Icon: Atom },
      { name: "Orbital Mechanics", Icon: Satellite },
      { name: "Simulation", Icon: FlaskConical },
    ],
  },
  {
    title: "Tools & Visualization",
    items: [
      { name: "PCTRAN", Icon: Monitor },
      { name: "OriginPro", Icon: BarChart3 },
      { name: "Excel", Icon: FileSpreadsheet },
      { name: "Jupyter", Icon: FileText },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Communication", Icon: MessageSquare },
      { name: "Teamwork", Icon: Users },
      { name: "Problem Solving", Icon: Lightbulb },
      { name: "Critical Thinking", Icon: Brain },
      { name: "Presentation", Icon: Presentation },
      { name: "Continuous Learning", Icon: BookOpen },
      { name: "Adaptability", Icon: Sparkles },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-16">
      <Reveal variant="up">
        <h2 className="mb-8 text-center text-4xl">My Skills</h2>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-2">
        {skillGroups.map((group, groupIdx) => (
          <Reveal key={group.title} variant="up" delay={0.15 + groupIdx * 0.1}>
            <div>
              <h3 className="mb-3 text-2xl font-semibold">{group.title}</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} variant="up" delay={0.2 + i * 0.05}>
                    <SkillCard name={item.name} Icon={(item as any).Icon} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Image
        src="/orbit.png"
        alt="Orbit"
        width={500}
        height={500}
        className="absolute -bottom-40 -z-10 hidden overflow-clip opacity-10 md:-left-40 md:block"
      />
    </section>
  );
};

export default Skills;
