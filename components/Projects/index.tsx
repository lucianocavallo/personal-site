import { useContext } from "react";
import { Context } from "context/context";

import ProjectsCard from "../ProjectsCard";

import simon from "@/images/projects/mini-simon-says.png";
import weather from "@/images/projects/mini-weather-app.png";
import petgram from "@/images/projects/mini-petgram.png";
import freeMarket from "@/images/projects/free-market.png";

import { Container, Grid, MyProjects } from "./styles";

const Projects = () => {
  const { lang } = useContext(Context);
  return (
    <Container>
      <MyProjects>
        <div>
          <h3>{lang === "es" ? "Mis Proyectos" : "My Projects"}</h3>
        </div>
      </MyProjects>
      <Grid>
        {lang === "es"
          ? projectsEs.map((project) => (
              <ProjectsCard
                title={project.title}
                image={project.image}
                url={project.url}
                githubLink={project.github}
                description={project.description}
                key={project.title}
                lang={lang}
              />
            ))
          : projectsEn.map((project) => (
              <ProjectsCard
                title={project.title}
                image={project.image}
                url={project.url}
                githubLink={project.github}
                description={project.description}
                key={project.title}
                lang={lang}
              />
            ))}
      </Grid>
    </Container>
  );
};

export default Projects;

const projectsEs = [
  {
    title: "Free Market",
    url: "https://free-market-lucianocavallo.netlify.app/",
    github: "https://github.com/lucianocavallo/free-market-frontend",
    image: freeMarket,
    description:
      "Esta aplicación emula una e-commerce real, conectandosé a un backend de Node.js y MondoDB",
  },
  {
    title: "Weather App",
    url: "https://weather-app-lucianocavallo.netlify.app/",
    github: "https://github.com/lucianocavallo/weather-app",
    image: weather,
    description:
      "Aplicacion de clima que se conecta a una API externa, creada con React.js ⛅",
  },
  {
    title: "Petgram",
    url: "https://petgram-lucianocavallo.vercel.app/",
    github: "/",
    image: petgram,
    description:
      "Aplicacion que emula a Instagram pero de mascotas, construido con React.js. 🐶",
  },
  {
    title: "Simon Says",
    url: "https://simon-says-lucianocavallo.netlify.app/",
    github: "https://github.com/lucianocavallo/simon-says",
    image: simon,
    description:
      "Clásico juego de memoria visual y auditiva creado con React.js",
  },
];

const projectsEn = [
  {
    title: "Free Market",
    url: "https://free-market-lucianocavallo.netlify.app/",
    github: "https://github.com/lucianocavallo/free-market-frontend",
    image: freeMarket,
    description:
      "This application emulates a real e-commerce, connecting to my backed built with Node.js, Express and MongoDB",
  },
  {
    title: "Weather App",
    url: "https://weather-app-lucianocavallo.netlify.app/",
    github: "https://github.com/lucianocavallo/weather-app",
    image: weather,
    description:
      "Weather app that connects with an external API, built with React.js ⛅",
  },
  {
    title: "Petgram",
    url: "https://petgram-lucianocavallo.vercel.app/",
    github: "/",
    image: petgram,
    description:
      "Application that emulates Instagram but of pets, built with React.js 🐶",
  },
  {
    title: "Simon Says",
    url: "https://simon-says-lucianocavallo.netlify.app/",
    github: "https://github.com/lucianocavallo/simon-says",
    image: simon,
    description: "Classic visual and auditive game, built with React.js",
  },
];
