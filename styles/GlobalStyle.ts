import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* background-image: linear-gradient(to right bottom, #12fadd, #00ddfa, #00bbff, #0092ff, #0059ff); */
  min-height: 100vh;
  width: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
