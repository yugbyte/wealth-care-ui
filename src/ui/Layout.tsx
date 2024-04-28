import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen((value) => !value);
  };
  return (
    <Flex bg="gray.50">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Header />
      <Flex marginTop={95} marginLeft={5} marginRight={15} width="100%">
        <Box width="100%" overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Layout;
