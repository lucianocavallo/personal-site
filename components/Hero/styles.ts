import styled from "styled-components";
import Image from "next/image";
import { BLUE, LIGHT_BLUE, TURQUOISE } from "../../styles/vars";

import { keyframes } from "styled-components";

const heroMoveIn = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`

export const HeroContainer = styled.div`
  opacity: 0;
  animation: ${heroMoveIn} 1s 1s ease-in-out forwards;

  display: flex;
  padding: 30px 50px 45px;
  margin-top: 30px;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const Div = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h2 {
    color: BLUE;
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
`

export const Socials = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & ul {
    list-style: none;
    display: flex;
  }
  & ul li {
    padding: 5px;
  }
`

export const Figure = styled.figure`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  min-width: 230px;
  height: 230px;
  border-radius: 50%;
  overflow: hidden;
  /* background-color: ${LIGHT_BLUE}; */
  /* background: radial-gradient(${BLUE}, ${TURQUOISE}, ${TURQUOISE}); */
  background: radial-gradient(${TURQUOISE}, ${BLUE});
  /* background: linear-gradient(to right, ${BLUE}, ${TURQUOISE}); */
  /* background-image: radial-gradient(circle, #0066ff, #009aff, #00c1ff, #00e3fc, #00ffe0); */
  margin: 0 auto;
  flex-grow: 1;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
`