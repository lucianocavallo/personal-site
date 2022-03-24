import { useContext } from 'react';
import { Context } from 'context/context';

import Image from 'next/image';
import htmlImg from '@/images/techs/html.svg';
import cssImg from '@/images/techs/css3.svg';
import javascriptImg from '@/images/techs/javascript.svg';
import linuxImg from '@/images/techs/linux.svg';
import gitImg from '@/images/techs/git.svg';
import reactImg from '@/images/techs/react.png';
import reduxImg from '@/images/techs/redux.svg';
import nextImg from '@/images/techs/next.svg';
import npmImg from '@/images/techs/npm.svg';
import sassImg from '@/images/techs/sass.svg';
import styledImg from '@/images/techs/styled.svg';
import webpackImg from '@/images/techs/webpack.svg';
import typescriptImg from '@/images/techs/typescript.svg';
import nodejs from '@/images/techs/nodejs.png';
import express from '@/images/techs/express.svg';
import mongo from '@/images/techs/mongodb.svg';
import graphql from '@/images/techs/graphql.svg';

import { Container, Grid, SkillsDiv } from './styles';

const MySkills = () => {
  const { lang, themed } = useContext(Context);
  return (
    <Container>
      <SkillsDiv themed={themed}>
        <div>
          <h3>{lang === 'es' ? 'Mis habilidades' : 'My skills'}</h3>
        </div>
      </SkillsDiv>
      <Grid>
        <li>
          <figure>
            <Image src={htmlImg} alt="html" width={45} height={50} />
          </figure>
          <p>HTML-5</p>
        </li>
        <li>
          <figure>
            <Image src={cssImg} alt="css" width={45} height={50} />
          </figure>
          <p>CSS-3</p>
        </li>
        <li>
          <figure>
            <Image
              src={javascriptImg}
              alt="javascript"
              width={46}
              height={46}
            />
          </figure>
          <p>JavaScript</p>
        </li>
        <li>
          <figure>
            <Image src={reactImg} alt="React.js" layout="responsive" />
          </figure>
          <p>React.js</p>
        </li>
        <li>
          <figure>
            <Image src={reduxImg} alt="Redux" layout="responsive" />
          </figure>
          <p>Redux</p>
        </li>
        <li>
          <figure>
            <Image src={nextImg} alt="Next.js" layout="responsive" />
          </figure>
          <p>Next.js</p>
        </li>
        <li>
          <figure>
            <Image
              src={typescriptImg}
              alt="Typescript"
              width={45}
              height={45}
            />
          </figure>
          <p>Typescript</p>
        </li>
        <li>
          <figure>
            <Image src={sassImg} alt="Sass" layout="responsive" />
          </figure>
          <p>Sass</p>
        </li>
        <li className="styled-components">
          <figure>
            <Image
              src={styledImg}
              alt="Styled Components"
              layout="responsive"
            />
          </figure>
          <p>Styled Components</p>
        </li>
        <li>
          <figure>
            <Image src={linuxImg} alt="linux" layout="responsive" />
          </figure>
          <p>Linux</p>
        </li>
        <li>
          <figure>
            <Image src={gitImg} alt="git" layout="responsive" />
          </figure>
          <p>Git</p>
        </li>
        <li>
          <figure>
            <Image src={webpackImg} alt="Webpack" width={69} height={80} />
          </figure>
          <p>Webpack</p>
        </li>
        <li className="npm">
          <figure>
            <Image src={npmImg} alt="NPM" layout="responsive" />
          </figure>
          <p>NPM</p>
        </li>
        <li>
          <figure>
            <Image src={nodejs} alt="Nodejs" width={69} height={80} />
          </figure>
          <p>Nodejs</p>
        </li>
        <li>
          <figure>
            <Image src={express} alt="Express" width={80} height={80} />
          </figure>
          <p>Express</p>
        </li>
        <li>
          <figure>
            <Image src={mongo} alt="MongoDB" width={69} height={80} />
          </figure>
          <p>MongoDB</p>
        </li>
        <li>
          <figure>
            <Image src={graphql} alt="GraphQL" width={69} height={80} />
          </figure>
          <p>GraphQL</p>
        </li>
      </Grid>
    </Container>
  );
};

export default MySkills;
