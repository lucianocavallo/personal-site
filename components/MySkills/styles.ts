import styled from "styled-components";
import { BLUE, TURQUOISE } from "../../styles/vars";
import { keyframes } from "styled-components";

const mySkillsFadeIn = keyframes`
0% { transform: scaleY(0); opacity: 0; }
100% { transform: scaleY(1); opacity: 1; }
`;

export const Container = styled.div`
  opacity: 0;
  animation: ${mySkillsFadeIn} 1s 1.5s ease-in-out forwards;
  transform-origin: top;
  margin-bottom: 20px;
  & h3 {
    margin: 10px 0;
    color: BLUE;
    text-align: center;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
  list-style: none;
  justify-content: center;
  gap: 10px;
  & li {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }
  & li:hover {
    transform: scale(1.15);
  }
  & li figure {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  & li figure img {
    object-fit: cover;
  }
  & li p {
    margin-top: 5px;
    color: gray;
    font-weight: 600;
    font-size: 15px;
  }
  & .styled-components {
    padding-top: 5px;
  }
  & .styled-components p {
    font-size: 12px;
    text-align: center;
    margin-top: 2px;
  }
  & .npm {
    margin-top: 5px;
    padding-top: 10px;
  }
`;

export const SkillsDiv = styled.div`
  filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.3));
  & > div {
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, #0066ff 21.51%, #00ffe0 97.27%);
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 30px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 80%);
    /* box-shadow: 0px 2px 12px 10px rgba(0, 0, 0, 0.5); */
  }
  & h3 {
    color: white;
    font-size: 25px;
    padding-left: 10%;
    padding-bottom: 10px;
  }
`;
