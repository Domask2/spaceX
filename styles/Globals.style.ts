import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #f0f0f0;
}

body {
  color: #999999;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
  text-rendering: optimizeLegibility;
  max-width: 800px;
  margin: 0 auto;
}

a {
  color: inherit;
  text-decoration: none;
}

.datapicker-input {
  border: 1px solid lightgray; 
  padding: 10px 10px; 
  border-bottom: 1px solid #ccc;
}
`;