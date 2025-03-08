import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) => theme.name};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.text.primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.accent.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accent.secondary};
    }
  }

  button {
    font-family: inherit;
  }

  /* Smooth transitions for theme changes */
  *, *::before, *::after {
    transition: background-color 0.3s ease,
                border-color 0.3s ease,
                color 0.3s ease,
                box-shadow 0.3s ease;
  }

  /* Disable transitions on page load */
  .preload * {
    transition: none !important;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent.primary}40;
    border-radius: 5px;

    &:hover {
      background: ${({ theme }) => theme.accent.primary}80;
    }
  }

  /* Selection styling */
  ::selection {
    background: ${({ theme }) => theme.accent.primary}40;
    color: ${({ theme }) => theme.text.primary};
  }
`;
