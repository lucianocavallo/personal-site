import { Container, Grid, SkillsDiv } from "./styles";
import Image from "next/image";
import htmlImg from "@/images/techs/html.svg";
import cssImg from "@/images/techs/css3.svg";
import javascriptImg from "@/images/techs/javascript.svg";
import linuxImg from "@/images/techs/linux.svg";
import gitImg from "@/images/techs/git.svg";
import reactImg from "@/images/techs/react.png";
import nextImg from "@/images/techs/nextjs.svg";
import npmImg from "@/images/techs/npm.svg";
import sassImg from "@/images/techs/sass.svg";
import styledImg from "@/images/techs/styled.svg";
import webpackImg from "@/images/techs/webpack.svg";

const MySkills = () => {
  return (
    <Container>
      <SkillsDiv>
        <h3>My Skills</h3>
      </SkillsDiv>
      <Grid>
        <li>
          <figure>
            <Image
            src={htmlImg}
            alt="html"
            layout="responsive"
            />
          </figure>
          <p>HTML-5</p>
        </li>
        <li>
          <figure>
            <Image
            src={cssImg}
            alt="css"
            layout="responsive"
            />
          </figure>
          <p>CSS-3</p>
        </li>
        <li>
          <figure>
            <Image
            src={javascriptImg}
            alt="javascript"
            layout="responsive"
            />
          </figure>
          <p>JavaScript</p>
        </li>
        <li>
          <figure>
            <Image
            src={reactImg}
            alt="React.js"
            layout="responsive"
            />
          </figure>
          <p>React.js</p>
        </li>
        <li>
          <figure>
            <Image
            src={nextImg}
            alt="Next.js"
            layout="responsive"
            />
          </figure>
          <p>Next.js</p>
        </li>
        <li>
          <figure>
            <Image
            src={sassImg}
            alt="Sass"
            layout="responsive"
            />
          </figure>
          <p>Sass</p>
        </li>
        <li>
          <figure>
            <Image
            src={styledImg}
            alt="Styled Components"
            layout="responsive"
            />
          </figure>
          <p className="styled-components">Styled Components</p>
        </li>
        <li>
          <figure>
            <Image
            src={linuxImg}
            alt="linux"
            layout="responsive"
            />
          </figure>
          <p>Linux</p>
        </li>
        <li>
          <figure>
            <Image
            src={gitImg}
            alt="git"
            layout="responsive"
            />
          </figure>
          <p>Git</p>
        </li>
        <li>
          <figure>
            <Image
            src={webpackImg}
            alt="Webpack"
            layout="responsive"
            />
          </figure>
          <p>Webpack</p>
        </li>

      </Grid>
    </Container>
  );
}

export default MySkills;
