import { Container, Grid, MyProjects } from "./styles";
import simon from "@/images/projects/mini-simon-says.png";
import weather from "@/images/projects/mini-weather-app.png";
import petgram from "@/images/projects/mini-petgram.png";

import ProjectsCard from "../ProjectsCard";


const Projects = () => {
  return (
    <Container>
      <MyProjects>
        <h3>Mis Proyectos</h3>
      </MyProjects>
      <Grid>
        {
          projects.map(project => (
            <ProjectsCard
              title={project.title}
              image={project.image}
              url={project.url}
              githubLink={project.github}
              description={project.description}
              key={project.title}
            />
            ))
          }
      </Grid>
    </Container>
  );
}

export default Projects;


const projects = [
  {
    title: 'Petgram',
    url: 'https://petgram-lucianocavallo.vercel.app/',
    github: '/',
    image: petgram,
    description: 'Aplicacion que emula a Instagram pero de mascotas, construido con React.js. 🐶'
  },
  {
    title: 'Weather App',
    url: 'https://weather-app-luchx88.netlify.app/',
    github: 'https://github.com/lucianocavallo/weather-app-devChallenges',
    image: weather,
    description: 'Aplicacion de clima que se conecta a una API externa, creada con Vue.js ⛅'
  },
  {
    title: 'Simon Says',
    url: 'https://simon-says-lucianocavallo.netlify.app/',
    github: 'https://github.com/lucianocavallo/simon-says',
    image: simon,
    description: 'Clásico juego de memoria visual y auditiva creado con React.js'
  },
];

