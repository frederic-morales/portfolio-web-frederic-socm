import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Code2, Briefcase, GraduationCap, Heart } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2022 - Presente",
    description: "Liderando el desarrollo de aplicaciones web modernas con React y TypeScript.",
  },
  {
    title: "Full Stack Developer",
    company: "Startup Digital",
    period: "2020 - 2022",
    description: "Desarrollo de soluciones end-to-end para clientes de diversos sectores.",
  },
  {
    title: "Junior Developer",
    company: "Agencia Creativa",
    period: "2018 - 2020",
    description: "Creación de sitios web y aplicaciones para pequeñas empresas.",
  },
];

const technologies = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Tailwind CSS",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                Sobre <span className="text-gradient">Mí</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up stagger-1">
                Soy un desarrollador apasionado por crear experiencias digitales 
                excepcionales. Con más de 5 años de experiencia, me especializo en 
                construir aplicaciones web modernas, escalables y centradas en el usuario.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold">Experiencia</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold">Tecnologías</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold">Educación</h2>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="font-display font-semibold text-lg">
                  Ingeniería en Sistemas Computacionales
                </h3>
                <span className="text-sm text-primary font-medium">2014 - 2018</span>
              </div>
              <p className="text-muted-foreground">Universidad Tecnológica</p>
            </div>
          </div>
        </section>

        {/* Personal */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Heart className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-bold">Más allá del código</h2>
            </div>

            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
              contribuir a proyectos open source, y compartir conocimiento con la 
              comunidad. También disfruto de la fotografía, los viajes, y el café 
              de especialidad.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
