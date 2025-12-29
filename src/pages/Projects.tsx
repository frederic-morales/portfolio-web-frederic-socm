import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                {t("projectsPage.titlePrefix")} <span className="text-gradient">{t("projectsPage.titleSuffix")}</span>
              </h1>
              <p className="text-xl text-muted-foreground opacity-0 animate-fade-up stagger-1">
                {t("projectsPage.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index % 4} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;