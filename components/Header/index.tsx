import React from "react";
import Link from "next/link";

import { Nav, Section, Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              @lucianocavallo8
            </Link>
          </li>
          <li>
            <Link href="/">
              Descargar CV
            </Link>
          </li>
        </ul>
      </Nav>
      <Section>
        <h2>Luciano Cavallo</h2>
        <h3>Frontend Developer</h3>
        <p>Me apasiona la tecnolog&iacute;a, el c&oacute;digo, y me motivan los proyectos desafiantes.</p>
      </Section>
    </Container>
  );
}

export default Header;
