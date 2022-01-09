import styled from "styled-components";
import { BLUE } from "../../styles/vars";

export const Container = styled.div`
  position: relative;
  box-shadow: 0 0 8px 4px rgba(0,102,255,.05);
  width: 320px;
  height: 380px;
  padding: 10px;
  border-radius: 8px;

  /* padding: 20px; */
  /* border: 1px solid black; */
  & h4 {
    text-align: center;
    font-size: 25px;
    color: BLUE;
    margin-bottom: 5px;
  }
  & div:nth-child(2) {
    width: 300px;
    height: 250px;
  }
  & div:nth-child(4) {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .project-link {
    color: BLUE;
    border: 1px solid BLUE;
    padding: 5px;
    border-radius: 20px;
    margin-right: 20px;
    text-decoration: none;
  }
  & span {
    display: flex;
    align-items: center;
  }
  & a span p {
    margin-right: 4px;
    color: black;
  }
  & a {
    text-decoration: none;
  }
`