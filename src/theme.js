import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    layout: {
      0: "#fff",
      100: "RGBA(0, 0, 0, 0.06)",
    },
    primary: {
      50: "#F0F5FF",
      100: "#D6E4FF",
      200: "#ADC6FF",
      300: "#85A5FF",
      400: "#597EF7",
      500: "#3366FF",
      600: "#274BDB",
      700: "#1A34B8",
      800: "#102694",
      900: "#091C7A",
    },
    secondary: {
      50: "#F0FAF4",
      100: "#CFF1D2",
      200: "#ADE8B1",
      300: "#85DE8B",
      400: "#5FD561",
      500: "#3FC43D",
      600: "#2E9F2D",
      700: "#1F7C1E",
      800: "#145E13",
      900: "#0D490B",
    },
    gray: {
      50: "#F7F7F7",
      100: "#EAEAEA",
      200: "#D0D0D0",
      300: "#B7B7B7",
      400: "#9E9E9E",
      500: "#848484",
      600: "#6B6B6B",
      700: "#525252",
      800: "#393939",
      900: "#1F1F1F",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
