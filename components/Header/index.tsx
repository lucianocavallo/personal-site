import React from "react";
import Link from "next/link";
import Image from "next/image";
import spain from "../../public/images/flags/spain_flag_icon.png";

import { Nav, Section, Container, Li } from "./styles";

const Header = () => {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <Link href="/">@lucianocavallo8</Link>
          </li>
          <Li>
            <button>
              <Image src={spain} alt="language flag" width={22} height={22} />
            </button>
            <Link href="/">Descargar CV</Link>
          </Li>
        </ul>
      </Nav>
      <Section>
        <h2>Luciano Cavallo</h2>
        <h3>Frontend Developer</h3>
        <p>
          Me apasiona la tecnolog&iacute;a, el c&oacute;digo, y me motivan los
          proyectos desafiantes.
        </p>
      </Section>
    </Container>
  );
};

export default Header;
