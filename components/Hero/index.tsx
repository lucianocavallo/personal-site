import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Context } from "context/context";

import luciano from "@/images/luciano.png";
import github from "@/images/socials/github.svg";
import instagram from "@/images/socials/instagram.svg";
import twitter from "@/images/socials/twitter.svg";
import linkedin from "@/images/socials/linkedin.svg";

import { Figure, StyledImage, Div, HeroContainer, Socials } from "./styles";

const Hero = () => {
  const { lang, themed } = useContext(Context);

  return (
    <HeroContainer>
      <div>
        <Div themed={themed}>
          <h2>{lang === "es" ? "¡Hola Mundo!" : "Hello World!"}</h2>
          <p>
            {lang === "es"
              ? "Llevo varios meses estudiando en la carrera de Desarrollador Web en Platzi. Dedicandome full-time a aprender las tecnologías de HTML5, CSS3, y JavaScript. Actualmente estoy especializándome en la librería React.js y su framework Next.js, para construir sitios geniales."
              : "I've been stufying for several months the Web Developer career in Platzi. Devoting myself full time to learn technologies as HTML5, CSS3, JavaScript and React.js. Actually I'm specializing in React.js library, and it's framework Next.js, to build awesomes websites"}
          </p>
        </Div>
        <Socials themed={themed}>
          <p>{lang === "es" ? "Mis redes sociales" : "My social networks"}</p>
          <ul>
            <li>
              <Link href="https://github.com/lucianocavallo" passHref>
                <a>
                  <Image src={github} alt="github" width={35} height={35} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/lucianocavallo8" passHref>
                <a>
                  <Image src={twitter} alt="twitter" width={35} height={35} />
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/luciano-cavallo-7679b9225/"
                passHref
              >
                <a>
                  <Image src={linkedin} alt="linkedin" width={35} height={35} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/lucianocavallo10/" passHref>
                <a>
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={35}
                    height={35}
                  />
                </a>
              </Link>
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
