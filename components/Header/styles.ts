import styled from "styled-components";
import * as vars from "../../styles/vars";
import Link from "next/link";

import { keyframes } from "styled-components";

const moveIn = keyframes`
0% { transform: translateY(-110%); }
100% { transform: translateY(0px); }
`;

export const Container = styled.div`
  transform: translateY(-110%);
  animation: ${moveIn} 1.5s 0.2s ease-in-out forwards;
`;

export const Nav = styled.nav`
  height: 80px;
  & a {
    text-decoration: none;
    margin: 15px;
    color: ${vars.BLUE};
    font-weight: bold;
  }
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  & ul li:nth-child(1) p {
    margin: 15px;
    color: ${vars.BLUE};
    font-weight: bold;
    @media (max-width: 600px) {
      font-size: 13px;
      margin: 5px 0 5px;
    }
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  & button:nth-child(1) {
    margin-right: 5px;
  }
`;

export const ThemeButton = styled.button<ComponentProps>`
  color: ${(props) => (props.themed ? vars.LIGHT_BLUE : vars.BLUE)};
  margin-right: 5px;
  font-weight: bold;
`;

export const CVButton = styled.button<ComponentProps>`
  margin: 15px 15px 15px 5px;
  color: ${(props) => (props.themed ? vars.LIGHT_BLUE : vars.BLUE)};
  font-weight: bold;
  border: 2px solid ${(props) => (props.themed ? vars.LIGHT_BLUE : vars.BLUE)};
  border-radius: 30px;
  padding: 5px;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 4px 5px;
  }
`;

export const Section = styled.section<ComponentProps>`
  padding: 30px 20px;
  border-radius: 40px;
  width: 100%;
  height: 200px;
  background: linear-gradient(
    90deg,
    ${vars.BLUE} 21.51%,
    ${vars.TURQUOISE} 97.27%
  );
  color: white;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.themed
      ? "box-shadow: 0px 2px 12px 2px rgba(255, 255, 255, .5);"
      : "box-shadow: 0px 2px 12px 4px rgba(0, 0, 0, 0.2);"};
  & h2 {
    font-size: 35px;
  }
  & h3 {
    font-size: 25px;
  }
  & p {
    margin-top: 15px;
    font-size: 20px;
    width: 70%;
  }
  @media (max-width: 800px) {
    height: 100%;
    & h2 {
      font-size: 25px;
    }
    & h3 {
      font-size: 20px;
    }
    & p {
      font-size: 16px;
    }
  }
`;
