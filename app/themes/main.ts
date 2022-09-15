import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  palette: {
    commom: {
      white: "#ffff",
      light: "rgba(255, 255, 255, 0.6)",
    },
    bg: {
      main: "#1f1f38",
      variant: "#2c2c6c",
    },
    primary: {
      main: "#4db5ff",
      variant: "rgba(77, 181, 255, 0.4)",
    },
  },
  container: {
    width: {
      lg: "75%",
      md: "86%",
      sm: "90%",
    },
  },
  transitions: {
    allEase400: "all 400ms ease",
  },
};

export default mainTheme;
