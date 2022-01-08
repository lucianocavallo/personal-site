import React from "react";
import styled from "styled-components";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import MySkills from "@/components/MySkills";

const HomePage = () => {
  return (
    <Main>
      <Header />
      <Hero />
      <MySkills />
      <Projects />
    </Main>
  );
}

export default HomePage;

const Main = styled.main`
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
`
