import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-[80vh] flex-col items-center justify-center gap-4 px-4"
    >
      <Reveal>
        <h1 className="text-center text-5xl">
          Hi, I&apos;m Mansur Mohammed Bala.
        </h1>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="max-w-2xl text-center text-xl">
          I&apos;m a physicist and data scientist passionate about combining
          physics modeling, simulation, and data science to extract insights
          from complex systems — from nuclear reactors to orbital mechanics.
        </p>
      </Reveal>
      <Reveal
        delay={0.8}
        className="flex flex-col items-center gap-4 md:flex-row"
      >
        <Button asChild size="lg">
          <a
            href="/Mansur Mohammed Bala Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open my resume in a new tab"
          >
            View My Resume <ArrowUpRight size={18} />
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href="#contact" aria-label="Scroll to contact section">
            Get in Touch
          </a>
        </Button>
      </Reveal>
      <ShootingStars starColor="text-primary" trailColor="text-primary" />
      <StarsBackground />
    </section>
  );
};

export default Hero;
