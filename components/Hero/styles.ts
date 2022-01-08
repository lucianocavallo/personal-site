import styled from "styled-components";
import Image from "next/image";
import { BLUE } from "../../styles/vars";

export const HeroContainer = styled.div`
  display: flex;
  padding: 30px 50px;
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
  }

  @media (max-width: 800px) {
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
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
  background-color: ${BLUE};
  margin: 0 auto;
  flex-grow: 1;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
`