import styled from "styled-components";
import { BLUE } from "../../styles/vars";
import * as vars from "../../styles/vars";

export const Container = styled.div<ComponentProps>`
  position: relative;
  ${(props) =>
    props.themed
      ? "box-shadow: 0 0 12px 0px rgba(255, 255, 255, .6)"
      : "box-shadow: 0 0 12px 8px rgba(0, 50, 255, 0.15)"};
  width: 320px;
  padding: 10px 10px 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h4 {
    text-align: center;
    font-size: 25px;
    color: ${(props) => (props.themed ? vars.BLUE : vars.BLUE)};
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
    border: 1px solid ${(props) => (props.themed ? vars.LIGHT_BLUE : vars.BLUE)};
    padding: 7px 7px;
    border-radius: 20px;
    margin-right: 20px;
    text-decoration: none;
    color: ${(props) => (props.themed ? vars.LIGHT_BLUE : vars.BLUE)};
    transition: transform 0.2s linear;
  }
  & .project-link:hover {
    transform: scale(1.1);
  }
  & > p {
    color: ${(props) => (props.themed ? "white" : "black")};
  }
  & span {
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 1px 5px;
  }
  & a span p {
    color: black;
    /* color: ${(props) => (props.themed ? "white" : "black")}; */
    margin-right: 4px;
  }
  & a span {
    background: ${(props) => (props.themed ? vars.LIGHT_BLUE : "transparent")};
    transition: transform 0.2s linear;
  }
  & a span:hover {
    transform: scale(1.1);
  }
  & a {
    text-decoration: none;
  }
`;
