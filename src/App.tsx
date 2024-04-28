import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import "./App.css";
import theme from "./themes/theme";
import Layout from "./ui/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BudgetPlanner from "./pages/BudgetPlanner";
import Expenses from "./pages/Expenses";
import Settings from "./pages/Settings";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="budget-planner" element={<BudgetPlanner />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
