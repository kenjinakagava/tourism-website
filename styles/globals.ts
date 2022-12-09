import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

img {
  max-inline-size: 100%;
  block-size: auto;
  display: block;
}

h1,
h2,
h3 {
  font-family: 'Dosis', sans-serif;
}
`;

export default Global;
