import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/data/social-links";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold">
              Portfolio<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Construyendo experiencias digitales
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos los derechos reservados. Hecho con{" "}
            <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
