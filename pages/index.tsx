import React, { useContext } from "react";
import styled from "styled-components";
import * as vars from "../styles/vars";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import MySkills from "@/components/MySkills";
import Footer from "@/components/Footer";

import { Context } from "context/context";

const HomePage = () => {
  const { themed } = useContext(Context);
  return (
    <Container themed={themed}>
      <Main>
        <Header />
        <Hero />
        <MySkills />
        <Projects />
        <Footer />
      </Main>
    </Container>
  );
};

export default HomePage;

const Container = styled.div<ComponentProps>`
  background: ${(props) => (props.themed ? vars.DARK_THEME_BG : "white")};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;
