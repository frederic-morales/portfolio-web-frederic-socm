import { ArrowDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";
import profileImage from "@/assets/perfilphoto2.jpeg";

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-4 sm:mb-8 opacity-0 animate-fade-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
              <img
                src={profileImage}
                alt={language === "es" ? "Foto de perfil" : "Profile photo"}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-glow"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 sm:mb-8 opacity-0 animate-fade-up stagger-1">
            <Rocket className="w-4 h-4" />
            {"Frederic Soc Morales"}
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 opacity-0 animate-fade-up stagger-2">
            {t("hero.greeting")}{" "}
            <span className="text-gradient">
              {language === "es" ? "Desarrollador" : "Developer"}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-24  leading-relaxed opacity-0 animate-fade-up stagger-3">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-4 pt-6 sm:pt-0">
            <Button asChild size="lg" className="text-base px-8 py-6 rounded-full">
              <Link to="/projects">
                {t("hero.cta.projects")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-full">
              <Link to="/about">
                {t("nav.about")}
              </Link>
            </Button>
          </div>
        </div> 

        {/* Scroll Indicator */}
        <div className="absolute bottom-[116px] sm:bottom-[68px] left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-4">
          <a
            href="#featured"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">
              {language === "es" ? "Descubre más" : "Discover more"}
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
