import { useContext } from 'react';
import { Context } from 'context/context';

import ProjectsCard from '../ProjectsCard';

import simon from '@/images/projects/mini-simon-says.png';
import weather from '@/images/projects/mini-weather-app.png';
import petgram from '@/images/projects/mini-petgram.png';
import freeMarket from '@/images/projects/free-market.png';
import flyPost from '@/images/projects/fly-post.png';

import { Container, Grid, MyProjects } from './styles';

const Projects = () => {
  const { lang, themed } = useContext(Context);
  return (
    <Container>
      <MyProjects themed={themed}>
        <div>
          <h3>{lang === 'es' ? 'Mis Proyectos' : 'My Projects'}</h3>
        </div>
      </MyProjects>
      <Grid>
        {lang === 'es'
          ? projectsEs.map((project) => (
              <ProjectsCard
                title={project.title}
                image={project.image}
                url={project.url}
                githubLink={project.github}
                description={project.description}
                key={project.title}
                lang={lang}
                themed={themed}
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
                themed={themed}
              />
            ))}
      </Grid>
    </Container>
  );
};

export default Projects;

const projectsEs = [
  {
    title: 'Fly Post - micro-twitter',
    url: 'https://fly-post.netlify.app/',
    github: 'https://github.com/lucianocavallo/fly-post-frontend',
    image: flyPost,
    description:
      'Esta aplicación es un mini clon de twitter, conectada a un backend (API) construída con Node.js, Express, Apollo-Server y GraphQL.',
  },
  {
    title: 'Free Market',
    url: 'https://free-market-lucianocavallo.netlify.app/',
    github: 'https://github.com/lucianocavallo/free-market-frontend',
    image: freeMarket,
    description:
      'Esta aplicación es un mini clon de una e-commerce real, que se conecta a un backend construído con Node.js, Express y MongoDB.',
  },
  {
    title: 'Weather App',
    url: 'https://weather-app-lucianocavallo.netlify.app/',
    github: 'https://github.com/lucianocavallo/weather-app',
    image: weather,
    description:
      'Aplicación de clima que se conecta a una API externa, creada con React.js. ⛅',
  },
  {
    title: 'Petgram',
    url: 'https://petgram-lucianocavallo.vercel.app/',
    github: '/',
    image: petgram,
    description:
      'Aplicación que emula a Instagram pero de mascotas, construído con React.js. 🐶',
  },
  {
    title: 'Simon Says',
    url: 'https://simon-says-lucianocavallo.netlify.app/',
    github: 'https://github.com/lucianocavallo/simon-says',
    image: simon,
    description:
      'Clásico juego de memoria visual y auditiva creado con React.js.',
  },
];

const projectsEn = [
  {
    title: 'Fly Post - micro-twitter',
    url: 'https://fly-post.netlify.app/',
    github: 'https://github.com/lucianocavallo/fly-post-frontend',
    image: flyPost,
    description:
      "This aplication it's twitter mini clon, using a backend API build with Node.js, Express, Apollo-Server and GraphQL.",
  },
  {
    title: 'Free Market',
    url: 'https://free-market-lucianocavallo.netlify.app/',
    github: 'https://github.com/lucianocavallo/free-market-frontend',
    image: freeMarket,
    description:
      'This application emulates a real e-commerce, connecting to a backend API, built with Node.js, Express and MongoDB.',
  },
  {
    title: 'Weather App',
    url: 'https://weather-app-lucianocavallo.netlify.app/',
    github: 'https://github.com/lucianocavallo/weather-app',
    image: weather,
    description:
      'A weather app that connects with an external API, built with React.js. ⛅',
  },
  {
    title: 'Petgram',
    url: 'https://petgram-lucianocavallo.vercel.app/',
    github: '/',
    image: petgram,
    description:
      'Application that emulates Instagram but with pets, built with React.js. 🐶',
  },
  {
    title: 'Simon Says',
    url: 'https://simon-says-lucianocavallo.netlify.app/',
    github: 'https://github.com/lucianocavallo/simon-says',
    image: simon,
    description: 'Classic visual and auditive game, built with React.js.',
  },
];
