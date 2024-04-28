import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./ButtonTheme";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#11047A",
    },
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
    warning: {
      50: "#FCE8E8",
      100: "#F7BFBF",
      200: "#F29696",
      300: "#ED6D6D",
      400: "#E94444",
      500: "#E41B1B",
      600: "#B61616",
      700: "#891010",
      800: "#5B0B0B",
      900: "#2E0505",
    },
  },
  fonts: {
    body: "DM Sans, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontWeights: {
    logo: 800,
    normal: 300, // Default font weight
    medium: 500, // Medium font weight
    bold: 700, // Bold font weight
  },
  letterSpacings: {
    tighter: "-0.05em", // Tighter letter spacing
    normal: "0.01em", // Normal letter spacing
    wider: "0.08em", // Wider letter spacing
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Button: buttonTheme,
  },
});

export default theme;
