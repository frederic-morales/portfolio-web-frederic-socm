import { Code2, Palette, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const skills = [
  {
    icon: Code2,
    title: "Desarrollo",
    description: "React, TypeScript, Node.js, y más tecnologías modernas.",
  },
  {
    icon: Palette,
    title: "Diseño",
    description: "Interfaces limpias, accesibles y centradas en el usuario.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimización para velocidad y experiencia de usuario.",
  },
];

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Transformando ideas en{" "}
              <span className="text-gradient">experiencias digitales</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Con años de experiencia en desarrollo web, me especializo en crear 
              aplicaciones modernas que no solo se ven bien, sino que también 
              funcionan de manera excepcional.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mi enfoque combina las últimas tecnologías con principios de diseño 
              sólidos para entregar productos que superan las expectativas.
            </p>
            <Button asChild className="group">
              <Link to="/about" className="flex items-center gap-2">
                Conocer más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {skills.map((skill, index) => (
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
