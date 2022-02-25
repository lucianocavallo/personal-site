import React, { useContext } from 'react';
import Image from 'next/image';
import spain from '../../public/images/flags/spain_flag_icon.png';
import usa from '../../public/images/flags/usa_flag_icon.png';
import { Context } from 'context/context';
import DarkModeToggle from 'react-dark-mode-toggle';

import { Nav, Section, Container, Li, CVLink } from './styles';

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
            <DarkModeToggle
              onChange={handleToggleThemed}
              checked={themed}
              size={45}
            />
            <button onClick={handleToggleLang}>
              <Image
                src={lang === 'es' ? usa : spain}
                alt="language flag"
                width={22}
                height={22}
              />
            </button>
            <CVLink
              themed={themed}
              href={
                lang === 'es'
                  ? 'https://drive.google.com/file/d/1tg7H-4Zhf8utSTzL66q5Tf24dA8YMVch/view?usp=sharing'
                  : 'https://drive.google.com/file/d/1z0i8ACuhUPwpkLXu_rekSmZGm3XkgEqE/view?usp=sharing'
              }
              target="_blank"
              rel="noreferrer"
            >
              {lang === 'es' ? 'Descargar CV' : 'Download CV'}
            </CVLink>
          </Li>
        </ul>
      </Nav>
      <Section themed={themed}>
        <h2>Luciano Cavallo</h2>
        <h3>Fullstack Developer</h3>
        <p>
          {lang === 'es'
            ? 'Me apasiona la tecnología, el código, y me motivan los proyectos desafiantes.'
            : "I'm passionate about technology, coding, and looking forward for challenging projects"}
        </p>
      </Section>
    </Container>
  );
};

export default Header;
