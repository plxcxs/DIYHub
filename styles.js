import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  tablet: "768px",
  desktop: "1200px",
};

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
