import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import spain from "../../public/images/flags/spain_flag_icon.png";
import usa from "../../public/images/flags/usa_flag_icon.png";
import { Context } from "context/context";

import { Nav, Section, Container, Li, ThemeButton, CVButton } from "./styles";

const Header = () => {
  const { lang, toggleLang, themed, toggleThemed } = useContext(Context);

  const handleToggleLang = () => toggleLang();

  const handleToggleThemed = () => toggleThemed();

  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <p>@lucianocavallo8</p>
          </li>
          <Li>
            <ThemeButton themed={themed} onClick={handleToggleThemed}>
              Theme
            </ThemeButton>
            <button onClick={handleToggleLang}>
              <Image
                src={lang === "es" ? usa : spain}
                alt="language flag"
                width={22}
                height={22}
              />
            </button>
            <CVButton themed={themed}>
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </CVButton>
          </Li>
        </ul>
      </Nav>
      <Section themed={themed}>
        <h2>Luciano Cavallo</h2>
        <h3>Frontend Developer</h3>
        <p>
          {lang === "es"
            ? "Me apasiona la tecnología, el código, y me motivan los proyectos desafiantes."
            : "I'm passionate about technology, coding, and looking forward for challenging projects"}
        </p>
      </Section>
    </Container>
  );
};

export default Header;
