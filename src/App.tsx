import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "./App.css";
import theme from "./theme";
import Layout from "./ui/Layout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Layout />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
