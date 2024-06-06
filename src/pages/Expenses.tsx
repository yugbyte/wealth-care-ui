import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoCreateOutline } from "react-icons/io5";
import ExpenseList from "../features/expenses/ExpenseList";

function Expenses() {
  const gridColSpan = useBreakpointValue({ base: 6, xl: 3 });

  return (
    <Flex flexDirection={"column"}>
      <Heading letterSpacing="wider" color="brandLight.800" fontWeight="bold">
        Expenses
      </Heading>
      <GridItem colSpan={gridColSpan} paddingBottom={5}>
        <Flex width={"100%"} justifyContent="flex-end">
          <Button
            aria-label="add-entry"
            variant="pill"
            leftIcon={<IoCreateOutline />}
          >
            Create New
          </Button>
        </Flex>
      </GridItem>
      <Grid templateColumns={{ base: "2fr", md: "repeat(6, 1fr)" }} gap={4}>
        {" "}
        <GridItem colSpan={gridColSpan}>
          <ExpenseList />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Expenses;
