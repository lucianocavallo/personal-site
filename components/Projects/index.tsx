import { Container, Grid, MyProjects } from "./styles";
import simon from "@/images/mini-simon-says.png";
import weather from "@/images/mini-weather-app.png";

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
              url={project.url}
              image={project.image}
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
    title: 'Weather App',
    url: 'https://weather-app-luchx88.netlify.app/',
    image: weather,
    description: 'Aplicacion de clima que se conecta a una API externa, creada con React.js'
  },
  {
    title: 'Simon Says',
    url: 'https://simon-says-lucianocavallo.netlify.app/',
    image: simon,
    description: 'Tradicional juego de memoria visual y auditiva creado con React.js'
  },
];

