import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Code2, Briefcase, GraduationCap, Heart } from "lucide-react";
import profilePhoto from "@/assets/perfilphoto2.jpeg"
import { useLanguage } from "@/hooks/use-language";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";

const technologies = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Tailwind CSS",
];

const About = () => {

  const {language} = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image */}
              <div className="shrink-0 opacity-0 animate-fade-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
                  <img
                    src={profilePhoto}
                    alt="Foto de perfil"
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-glow"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up stagger-1">
                  {language === "es" ? "Sobre" : "About"} <span className="text-gradient">{language === "es" ? "Mí" : "Me"}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up stagger-2 max-w-2xl">
                  {language === "es" ? `Soy un Desarrollador apasionado por la tecnología y la programación. 
                  Con casi 2 años de experiencia en desarrollo de software, creando y desarrollando 
                  Aplicaciones Web tanto Frontend como Backend, Aplicaciones de Escritorio, Testing avanzado, etc.` : 
                  `I'm a Developer with a passion for technology and programming. With almost 2 years of 
                  experience in software development, creating and developing Web Applications both Frontend and Backend, 
                  Desktop Applications, Advanced Testing, etc.`}
                </p>
              </div>
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
              <h2 className="font-display text-2xl font-bold">{language === "es" ? "Experiencia" : "Experience"}</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <a
                  key={index}
                  href={exp.linkCorp}
                  target="_blank"
                  className="block p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-lg">{language === "es" ? exp.titleEs : exp.titleEn}</h3>
                    <span className="text-sm text-primary font-medium">{language === "es" ? exp.periodEs : exp.periodEn}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{language === "es" ? exp.descriptionEs : exp.descriptionEn }</p>
                </a>
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
              <h2 className="font-display text-2xl font-bold">{language === "es" ? "Tecnologías" : "Technologies"}</h2>
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
              <h2 className="font-display text-2xl font-bold">{language === "es" ? "Educación" : "Education"}</h2>
            </div>

              {education.map((institute) => (
                <div className="p-6 bg-card rounded-xl border border-border mb-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="font-display font-semibold text-lg">
                    {language === "es" ? institute.titleEs : institute.titleEn}
                  </h3>
                  <span className="text-sm text-primary font-medium">{institute.period}</span>
                </div>
                <p className="text-muted-foreground">{language === "es" ? institute.descriptionEs : institute.descriptionEn}</p>
                </div>
              ))}
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
