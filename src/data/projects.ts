import { Project } from "@/types";
import wellcoImg from "../assets/wellco_login.png"
import marvelApp from "../assets/marvelApp.jpg"

export const projects: Project[] = [
  {
    id: "1",
    titleEs: "Productos Farmacéuticos",
    titleEn: "Pharmaceutical Products",
    descriptionEs: "Plataforma para registro, control y creación de nuevos productos farmacéuticos",
    descriptionEn: "Platform for registration, control and creation of new pharmaceutical products",
    image: wellcoImg,
    tags: ["React", "Node.js", "SQL Server","JavaScript","Express"],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/frederic-morales/nuevosProductosReact",
    githubUrl2: "https://github.com/frederic-morales/nuevosProductoAPI",
    corpLink: "https://wellcopharma.com/",
    corpName: "Wellco Corporation",
    featured: true,
  },
  {
    id: "2",
    titleEs: "Marvel APP",
    titleEn: "Marvel APP",
    descriptionEs: "Aplicación de una sola página con Angular 17 usando la API de Marvel.",
    descriptionEn: "Single page application with Angular 17 using the Marvel API",
    image: marvelApp,
    tags: ["Angular 17", "TypeScript", "NodeJS", "TailwindCSS"],
    githubUrl: "https://github.com/frederic-morales/MarvelApp-Angular-MarvelAPI",
    featured: true,
  },
  {
    id: "ai-dashboard",
    titleEs: "AI Analytics Dashboard",
    descriptionEs: "Dashboard interactivo para visualización de datos con integración de modelos de IA para predicciones.",
    image: "/placeholder.svg",
    tags: ["Python", "React", "TensorFlow", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  }
];
