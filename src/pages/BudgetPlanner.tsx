import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import BudgetDetails from "../features/budget/BudgetDetails";
import BudgetDetailsPie from "../features/budget/BudgetDetailsPie";
import BudgetSummary from "../features/budget/BudgetSummary";
import { IoCreateOutline } from "react-icons/io5";
import { useBudget } from "../features/budget/useBudget";

function BudgetPlanner() {
  const { isLoading, budget }: { isLoading: boolean; budget: Budget } =
    useBudget();

  const totalBudgetAmount = budget?.budgetExpenseItems.reduce(
    (acc, cur) => acc + cur.budgetAmount,
    0
  );
  const gridColSpan = useBreakpointValue({ base: 6, xl: 3 });
  return (
    <Flex flexDirection={"column"}>
      <Heading letterSpacing="wider" color="brandLight.800" fontWeight="bold">
        Budget Planner
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
        <GridItem colSpan={gridColSpan}>
          <BudgetDetails isLoading={isLoading} budget={budget} />
        </GridItem>
        <GridItem colSpan={gridColSpan}>
          <BudgetDetailsPie isLoading={isLoading} budget={budget} />
        </GridItem>
        <BudgetSummary
          totalBudgetAmount={totalBudgetAmount}
          currency={budget?.currency}
        />
      </Grid>
    </Flex>
  );
}

export default BudgetPlanner;
