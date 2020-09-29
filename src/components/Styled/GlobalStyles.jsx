import { createGlobalStyle } from 'styled-components';

const commontheme = {
  fontFam: "'Roboto', sans-serif",
};

export const lightTheme = {
  ...commontheme,
  bg: '#fff',
  text: '#121212',
  bgCard: '#fff',
  cardDataText: '#606060',
};

export const darkTheme = {
  ...commontheme,
  bg: '#121212',
  text: '#fff',
  bgCard: '#354146',
  cardDataText: '#aeb8bb',
};

export default createGlobalStyle`
  html {
    font-size: 16px;
    line-height: 1.6;
    font-weight: 400;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    font-family: ${(props) => props.theme.fontFam};
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;

    transition: 0.5s;
  }

  .separator::before {
    content: '•';
    color: white;
    padding: 0.4rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }

  /* 
  a:active {
    color: blueviolet;
  } */
`;
