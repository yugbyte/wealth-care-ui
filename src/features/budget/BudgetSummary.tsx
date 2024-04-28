import { Card, Flex, GridItem, Text } from "@chakra-ui/react";
import Currency from "../../ui/Currency";

function BudgetSummary() {
  return (
    <GridItem colSpan={6}>
      <Card minWidth="100%" minHeight="50px" maxHeight={"150px"}>
        <Flex
          fontWeight="bold"
          fontSize="28"
          justifyContent={"flex-end"}
          width="100%"
          padding={15}
        >
          <Text>Total:</Text>
          <Currency
            fontSize="28"
            fontWeight="bold"
            currency={"USD"}
            amount={1000}
          ></Currency>
        </Flex>
      </Card>
    </GridItem>
  );
}

export default BudgetSummary;
