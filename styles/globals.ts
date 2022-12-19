import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Dosis', sans-serif;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

`;

export default Global;
