import styled from "styled-components";
import { BLUE } from "../../styles/vars";

export const Container = styled.div`
  position: relative;
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
    border: 2px solid BLUE;
    padding: 5px;
    border-radius: 20px;
    margin-right: 20px;
    text-decoration: none;
  }
`