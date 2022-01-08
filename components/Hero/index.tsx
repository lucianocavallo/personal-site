import luciano from "../../public/images/luciano.png";
import { Figure, StyledImage, Div, HeroContainer, Socials } from "./styles";
import Image from "next/image";

import github from "@/images/github.svg";
import instagram from "@/images/instagram.svg";
import twitter from "@/images/twitter.svg";
import linkedin from "@/images/linkedin.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <Div>
          <h2>¡Hola Mundo!</h2>
          <p>Llevo varios meses estudiando en la carrera de Desarrollador Web en Platzi. dedicandome full-time a aprender las tecnologías de HTML5, CSS3, y JavaScript. Actualmente estoy especializándome en la librería React.js y su framework Next.js, para construir sitios geniales.</p>
        </Div>
        <Socials>
          <p>Mis redes sociales</p>
          <ul>
            <li>
              <Image src={github} alt="github" width={35} height={35} />
            </li>
            <li>
              <Image src={twitter} alt="twitter" width={35} height={35} />
            </li>
            <li>
              <Image src={linkedin} alt="linkedin" width={35} height={35} />
            </li>
            <li>
              <Image src={instagram} alt="instagram" width={35} height={35} />
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
}

export default Hero;
