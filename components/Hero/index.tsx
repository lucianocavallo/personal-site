import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Context } from 'context/context';

import luciano from '@/images/luciano.png';
import github from '@/images/socials/github.svg';
import instagram from '@/images/socials/instagram.svg';
import twitter from '@/images/socials/twitter.svg';
import linkedin from '@/images/socials/linkedin.svg';

import { Figure, StyledImage, Div, HeroContainer, Socials } from './styles';

const Hero = () => {
  const { lang, themed } = useContext(Context);

  return (
    <HeroContainer>
      <div>
        <Div themed={themed}>
          <h2>{lang === 'es' ? '¡Hola Mundo!' : 'Hello World!'}</h2>
          <p>
            {lang === 'es'
              ? 'Soy Desarrollador Fullstack, especializado en Frontend con Reactjs. Cuento con gran capacidad de concentración, y focalización en las tareas, siendo capaz de llevar a término proyectos de calidad y con buenas prácticas. Quiero colaborar como desarrollador web en equipos apasionados por crear productos digitales construídos con React.'
              : "I'm a Fullstack Developer, specialized in Frontend with Reactjs. I have great capacity of concentration and focalization in the proposed tasks, being able to carry out quality projects with good practices. I want to collaborate as a Web Developer in teams apassionated to create digital products builded with React."}
          </p>
        </Div>
        <Socials themed={themed}>
          <p>{lang === 'es' ? 'Mis redes sociales' : 'My social networks'}</p>
          <ul>
            <li>
              <a
                href="https://github.com/lucianocavallo"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={github} alt="github" width={35} height={35} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/lucianocavallo8"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={twitter} alt="twitter" width={35} height={35} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/luciano-cavallo-7679b9225/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={linkedin} alt="linkedin" width={35} height={35} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lucianocavallo10/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={instagram} alt="instagram" width={35} height={35} />
              </a>
            </li>
          </ul>
        </Socials>
      </div>
      <Figure>
        <StyledImage
          className="image"
          src={luciano}
          alt="Luciano's picture"
          width={200}
          height={250}
        />
      </Figure>
    </HeroContainer>
  );
};

export default Hero;
