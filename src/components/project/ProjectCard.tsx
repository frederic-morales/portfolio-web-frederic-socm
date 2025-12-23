import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t, language } = useLanguage()

  return (
    <article
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border",
        "hover:shadow-glow hover:border-primary/30 transition-all duration-500",
        "opacity-0 animate-fade-up",
        index === 0 && "stagger-1",
        index === 1 && "stagger-2",
        index === 2 && "stagger-3",
        index === 3 && "stagger-4"
      )}
      style={{ animationFillMode: "forwards" }}
    >
      <div className="aspect-video overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.titleEs}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {language === "es" ? project.titleEs : project.titleEn}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
        {language === "es" ? project.descriptionEs : project.descriptionEn}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Ver código"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
             {project.githubUrl2 && (
              <a
                href={project.githubUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Ver código"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
           {language === "es" ? "Ver más" : "See more"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
