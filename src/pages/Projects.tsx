import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                Mis <span className="text-gradient">Proyectos</span>
              </h1>
              <p className="text-xl text-muted-foreground opacity-0 animate-fade-up stagger-1">
                Una colección de proyectos en los que he trabajado, desde aplicaciones 
                web completas hasta experimentos creativos.
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
