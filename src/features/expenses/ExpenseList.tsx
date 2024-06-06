import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Spacer,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { MdOutlinePostAdd } from "react-icons/md";

interface IRow {
  expense: string;
  category: string;
  amount: number;
  tags: string[];
}

function ExpenseList() {
  return (
    <Card
      minWidth="100%"
      minHeight="65vh"
      maxHeight={"65vh"}
      bg={"layoutPrimary.700"}
      color={"brandLight.700"}
    >
      <CardHeader>
        <Flex fontWeight="bold" fontSize="18" width="100%">
          <Heading
            size="md"
            color="brandLight.800"
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="normal"
          >
            JUNE 2024 [BUDGET NAME]
          </Heading>
          <Spacer />
        </Flex>
      </CardHeader>
      <CardBody
        overflowY="auto"
        sx={{
          "::-webkit-scrollbar": {
            width: "8px",
          },

          "::-webkit-scrollbar-thumb": {
            background: "brandLight.600",
            borderRadius: "24px",
          },
        }}
      >
        <Stack divider={<StackDivider />} spacing="5" justify="center">
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex width={"100%"} justifyContent="flex-end">
          <Button
            aria-label="add-entry"
            variant="pill"
            leftIcon={<MdOutlinePostAdd />}
          >
            Add Entry
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default ExpenseList;
