import styled from "styled-components";
import Image from "next/image";
import { BLUE, TURQUOISE } from "../../styles/vars";
import * as vars from "../../styles/vars";

import { keyframes } from "styled-components";

const heroMoveIn = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`;

export const HeroContainer = styled.div`
  opacity: 0;
  animation: ${heroMoveIn} 1s 1.5s ease-in-out forwards;

  display: flex;
  padding: 30px 50px 45px;
  margin-top: 30px;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Div = styled.div<ComponentProps>`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > p {
    line-height: 22px;
    color: ${(props) => (props.themed ? "white" : "black")};
  }

  & h2 {
    color: ${(props) => (props.themed ? vars.LIGHT_BLUE : vars.BLUE)};
    margin-bottom: 5px;
  }

  @media (max-width: 800px) {
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Socials = styled.div<ComponentProps>`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    color: ${(props) => (props.themed ? "white" : "black")};
  }
  & ul {
    list-style: none;
    display: flex;
  }
  & ul li {
    margin: 10px;
    padding: 5px;
    background: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
  }
`;

export const Figure = styled.figure`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  min-width: 230px;
  height: 230px;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(${TURQUOISE}, ${BLUE});
  margin: 0 auto;
  flex-grow: 1;
  box-shadow: 0px 2px 12px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
