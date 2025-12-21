import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useLanguage } from "@/hooks/use-language";


const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const { t, language } = useLanguage();


  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center py-24">
            <h1 className="font-display text-3xl font-bold mb-4">
              Proyecto no encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              El proyecto que buscas no existe.
            </p>
            <Button asChild>
              <Link to="/projects">Ver todos los proyectos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="py-16">
          <div className="container mx-auto px-6">
            {/* Back Link */}
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === "es" ? "Volver a proyectos" : "Back to projects"}
            </Link>

            {/* Header */}
            <div className="max-w-3xl mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                {language === "es" ? project.titleEs : project.titleEn}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6 opacity-0 animate-fade-up stagger-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up stagger-2">
                {language === "es" ? project.descriptionEs : project.descriptionEn}
                <a className="underline" target="_blank" href={project?.corpLink}> {project.corpName}</a>
              </p>
            </div>

            {/* Image */}
            <div className="aspect-video rounded-xl overflow-hidden bg-secondary mb-12 opacity-0 animate-fade-up stagger-3">
              <img
                src={project.image}
                alt={language === "es" ? project.titleEs : project.titleEn}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
              {/* {project.liveUrl && (
                <Button asChild size="lg" className="rounded-full">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Ver demo en vivo
                  </a>
                </Button>
              )} */}
              {project.githubUrl && (
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    {language === "es" ? "Ver código fuente" : "See source code"}
                  </a>
                </Button>
              )}
              {project.githubUrl2 && (
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a
                    href={project.githubUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    {language === "es" ? "Ver código fuente" : "See source code"}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
