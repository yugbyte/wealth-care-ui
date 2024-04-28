import { Flex, Heading } from "@chakra-ui/react";
import BudgetDetails from "../features/BudgetDetails";
import Content from "../ui/Content";

function BudgetPlanner() {
  return (
    <Flex flexDirection={"column"}>
      <Heading letterSpacing="wider" color="brand.800" fontWeight="bold">
        Budget Planner
      </Heading>
      <Content>
        <BudgetDetails />
      </Content>
    </Flex>
  );
}

export default BudgetPlanner;
