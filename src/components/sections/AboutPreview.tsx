import { Code2, Palette, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// 1. Usamos useTranslation
import { useTranslation } from "react-i18next";

export function AboutPreview() {
  const { t } = useTranslation();

  const skills = [
    {
      icon: Code2,
      title: t("aboutPreview.skills.development.title"),
      description: t("aboutPreview.skills.development.description"),
    },
    {
      icon: Palette,
      title: t("aboutPreview.skills.design.title"),
      description: t("aboutPreview.skills.design.description"),
    },
    {
      icon: Zap,
      title: t("aboutPreview.skills.performance.title"),
      description: t("aboutPreview.skills.performance.description"),
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {t("aboutPreview.titleMain")}{" "}
              <span className="text-gradient">
                {t("aboutPreview.titleHighlight")}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t("aboutPreview.description1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("aboutPreview.description2")}
            </p>
            <Button asChild className="group">
              <Link to="/about" className="flex items-center gap-2">
                {t("aboutPreview.cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}