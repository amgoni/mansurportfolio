import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-16 text-center"
    >
      <Reveal>
        <h2 className="mb-6 text-center text-4xl">Get in Touch</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-foreground mx-auto mb-8 max-w-2xl text-lg">
          Interested in research collaboration, supervision, or data science
          projects? I’m open to meaningful work and conversations.
        </p>
      </Reveal>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Reveal delay={0.15}>
          <a href="mailto:mbbala36@gmail.com" aria-label="Send me an email">
            <Button size="lg">Email Me</Button>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="https://www.linkedin.com/in/mansur-bala-b17093179"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open my LinkedIn profile"
          >
            <Button variant="secondary" size="lg">
              LinkedIn
            </Button>
          </a>
        </Reveal>
      </div>
      <Image
        src="/data.png"
        alt="Data"
        width={500}
        height={500}
        className="absolute bottom-0 -z-10 hidden overflow-clip opacity-10 md:right-0 md:block"
      />
    </section>
  );
};

export default Contact;
