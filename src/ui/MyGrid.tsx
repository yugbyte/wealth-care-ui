import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useState } from "react";

function MyGrid() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen((value) => !value);
  };
  return (
    <Grid
      templateAreas={`"nav header"
                        "nav main"
                        "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={!isSidebarOpen ? "45px 1fr" : "250px 1fr"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default MyGrid;
