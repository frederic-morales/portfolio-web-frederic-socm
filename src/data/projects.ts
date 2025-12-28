import { Project } from "@/types";
import wellcoImg from "../assets/wellco_login.png"
import marvelApp from "../assets/marvelApp.jpg"
import restCountries from "../assets/rest-countries.jpg"
import calculatorApp from "../assets/calculator-app-main-JS.png"

export const projects: Project[] = [
  {
    id: "1",
    image: wellcoImg,
    tags: ["React", "Node.js", "SQL Server","JavaScript","Express", "TailwindCSS"],
    githubUrl: "https://github.com/frederic-morales/nuevosProductosReact",
    githubUrl2: "https://github.com/frederic-morales/nuevosProductoAPI",
    corpLink: "https://wellcopharma.com/",
    corpName: "Wellco Corporation",
    featured: true,
  },
  {
    id: "2",
    image: marvelApp,
    tags: ["Angular 17", "TypeScript", "NodeJS", "TailwindCSS"],
    githubUrl: "https://github.com/frederic-morales/MarvelApp-Angular-MarvelAPI",
    featured: true,
  },
  {
    id: "3",
    image: restCountries,
    tags: ["React", "TailwindCSS", "JavaScript"],
    githubUrl: "https://github.com/frederic-morales/react_projects/tree/main",
    featured: true,
  },
  {
    id: "4",
    image: calculatorApp,
    tags: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://frederic-morales.github.io/calculator-app-main-js/",
    githubUrl: "https://github.com/frederic-morales/react_projects/tree/main",
    featured: true,
  }
];