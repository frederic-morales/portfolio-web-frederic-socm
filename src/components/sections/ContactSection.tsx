import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { t } = useTranslation();
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
    
    // Simulación de envío a API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      // 3. Traducimos también los mensajes del Toast
      title: t("contactSection.toast.successTitle"),
      description: t("contactSection.toast.successDescription"),
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
              {t("contactSection.title")}
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              {t("contactSection.description")}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {t("contactSection.form.name")}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("contactSection.form.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">
                  {t("contactSection.form.email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contactSection.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">
                {t("contactSection.form.message")}
              </Label>
              <Textarea
                id="message"
                placeholder={t("contactSection.form.messagePlaceholder")}
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
                ? t("contactSection.form.sending")
                : t("contactSection.form.send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}