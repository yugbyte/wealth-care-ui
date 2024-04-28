import { Button, Flex, GridItem, Heading } from "@chakra-ui/react";
import BudgetDetails from "../features/budget/BudgetDetails";
import BudgetDetailsPie from "../features/budget/BudgetDetailsPie";

import Content from "../ui/Content";
import BudgetSummary from "../features/budget/BudgetSummary";
import { IoCreateOutline } from "react-icons/io5";

function BudgetPlanner() {
  return (
    <Flex flexDirection={"column"}>
      <Heading letterSpacing="wider" color="brand.800" fontWeight="bold">
        Budget Planner
      </Heading>
      <Content>
        <GridItem colSpan={6}>
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
        <BudgetDetails />
        <BudgetDetailsPie />
        <BudgetSummary />
      </Content>
    </Flex>
  );
}

export default BudgetPlanner;
