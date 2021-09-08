import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
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

`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
