import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas 
            o oportunidades para ser parte de tus visiones.
          </p>
          
          <Button asChild size="lg" className="text-base px-8 py-6 rounded-full group">
            <a href="mailto:hello@example.com" className="flex items-center gap-2">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Contáctame
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
