import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #1c1c1c;
    color: #e0e0e0;
  }

  h1, h2 {
    font-family: 'Roboto', sans-serif;
    color: #a52a2a;
  }

  a {
    color: #a52a2a;
    text-decoration: none;

    &:hover {
      color: #ff6347;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyle;
