import styled from "styled-components";
import { BLUE } from "../../styles/vars";

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
  & ul li:nth-child(2) a {
    border: 2px solid ${BLUE};
    padding: 5px 10px;
    border-radius: 30px;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    border: none;
  }
`;

export const Section = styled.section`
  padding: 30px 20px;
  border-radius: 40px;
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #0066ff 21.51%, #00ffe0 97.27%);
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 12px 4px rgba(0, 0, 0, 0.2);
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
