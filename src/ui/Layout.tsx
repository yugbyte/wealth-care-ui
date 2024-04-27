import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen((value) => !value);
  };
  return (
    <Flex bg="gray.100">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Header />
      <Flex marginTop={65} marginLeft={5}>
        <Box width={"100%"} overflowY="auto"></Box>
      </Flex>
    </Flex>
  );
}

export default Layout;
