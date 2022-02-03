import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  display: grid;
  place-items: center;
`;

export const MyProjects = styled.div`
  filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.3));
  width: 100%;
  & div {
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, #0066ff 21.51%, #00ffe0 97.27%);
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    color: white;
    padding-left: 30px;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  }
  & h3 {
    font-size: 25px;
    padding-left: 10%;
    padding-bottom: 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  gap: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 300px;
    gap: 30px;
  }
`;
