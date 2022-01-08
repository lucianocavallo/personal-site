import styled from "styled-components";
import { BLUE, TURQUOISE } from "../../styles/vars";

export const Container = styled.div`
  /* border-width: 2px;
  border-style: solid; */
  /* border-color: TURQUOISE; */
  /* border-image: linear-gradient(to right, BLUE, TURQUOISE) 100% 1 0 0; */
  margin-bottom: 20px;
  & h3 {
    margin: 10px 0;
    color: BLUE;
    text-align: center;
  }
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 80px));
  list-style: none;
  justify-content: center;
  gap: 5px;
  & li {
    display: grid;
    place-items: center;
  }
  & li figure {
    display: inline-block;
    width: 50px;
  }
  & li p {
    margin-top: 5px;
    color: gray;
    font-weight: 600;
    font-size: 15px;
  }
  & .styled-components {
    font-size: 12px;
  }
`

export const SkillsDiv = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, #0066FF 21.51%, #00FFE0 97.27%);
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 30px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 80%);
  & h3 {
    color: white;
    font-size: 25px;
    padding-left: 10%;
    padding-bottom: 10px;
  }
`