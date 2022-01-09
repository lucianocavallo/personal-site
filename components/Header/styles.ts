import styled from "styled-components";
import { BLUE } from "../../styles/vars";

import { keyframes } from "styled-components";

const navMoveIn = keyframes`
0% { transform: translateY(-100%); }
100% { transform: translateY(0px); }
`

export const Nav = styled.nav`
  transform: translateY(-100%);
  height: 80px;
  animation: ${navMoveIn} 1s 0.6s ease-in-out forwards;
  & a {
    text-decoration: none;
    color: black;
    margin: 15px;
    color: ${BLUE};
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
  & ul li:nth-child(2) {
    border: 2px solid ${BLUE};
    padding: 5px 2px;
    border-radius: 30px;
  }
`

const sectionMoveIn = keyframes`
0% { transform: translateY(-150%); }
100% { transform: translateY(0px); }
`

export const Section = styled.section`
  transform: translateY(-150%);
  animation: ${sectionMoveIn} 1.5s ease-in-out forwards;
  padding: 30px 20px;
  border-radius: 40px;
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #0066FF 21.51%, #00FFE0 97.27%);
  color: white;
  display: flex;
  flex-direction: column;
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
`