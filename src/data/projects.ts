import { Project } from "@/types";
import wellcoImg from "../assets/wellco_login.png"
import marvelApp from "../assets/marvelApp.jpg"
import restCountries from "../assets/rest-countries.jpg"
import calculatorApp from "../assets/calculator-app-main-JS.png"

export const projects: Project[] = [
  {
    id: "1",
    titleEs: "Productos Farmacéuticos",
    titleEn: "Pharmaceutical Products",
    descriptionEs: "Plataforma para registro, control y creación de nuevos productos farmacéuticos",
    descriptionEn: "Platform for registration, control and creation of new pharmaceutical products",
    image: wellcoImg,
    tags: ["React", "Node.js", "SQL Server","JavaScript","Express", "TailwindCSS"],
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
    id: "3",
    titleEs: "REST Countries API",
    titleEn: "REST Countries API",
    descriptionEs: "Aplicación de una sola página con la REST Countries API para mostrar todos los países del mundo.",
    descriptionEn: "Single Page Apliccation with the REST Countries API to show all countries in the world.",
    image: restCountries,
    tags: ["React", "TailwindCSS", "JavaScript"],
    githubUrl: "https://github.com/frederic-morales/react_projects/tree/main",
    featured: true,
  },
  {
    id: "4",
    titleEs: "Calculator APP",
    titleEn: "Calculator APP",
    descriptionEs: "Calculadora web intuitiva.",
    descriptionEn: "Intuitive web calculator.",
    image: calculatorApp,
    tags: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://frederic-morales.github.io/calculator-app-main-js/",
    githubUrl: "https://github.com/frederic-morales/react_projects/tree/main",
    featured: true,
  }
];
