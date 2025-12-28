import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function FeaturedProjects() {
  const { t } = useTranslation();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="featured" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              {t("featuredProjects.title")}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              {t("featuredProjects.description")}
            </p>
          </div> 
          <Button asChild variant="ghost" className="group">
            <Link to="/projects" className="flex items-center gap-2">
              {t("featuredProjects.viewAll")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}