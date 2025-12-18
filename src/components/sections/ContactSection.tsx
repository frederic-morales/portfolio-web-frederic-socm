import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: language === "es" ? "Mensaje enviado" : "Message sent",
      description: language === "es" 
        ? "Gracias por contactarme. Te responderé pronto."
        : "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Mail className="w-8 h-8" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {language === "es" ? "¿Tienes un proyecto en mente?" : "Have a project in mind?"}
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              {language === "es"
                ? "Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones."
                : "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {language === "es" ? "Nombre" : "Name"}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={language === "es" ? "Tu nombre" : "Your name"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === "es" ? "Correo electrónico" : "Email"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={language === "es" ? "tu@email.com" : "you@email.com"}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">
                {language === "es" ? "Mensaje" : "Message"}
              </Label>
              <Textarea
                id="message"
                placeholder={language === "es" ? "Cuéntame sobre tu proyecto..." : "Tell me about your project..."}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px] resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-base py-6 rounded-full group"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {isSubmitting 
                ? (language === "es" ? "Enviando..." : "Sending...")
                : (language === "es" ? "Enviar mensaje" : "Send message")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
