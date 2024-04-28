import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  GridItem,
  Heading,
  Spacer,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { MdOutlineLocalGroceryStore, MdOutlinePostAdd } from "react-icons/md";
import BudgetItemDetail from "./BudgetItemDetail";
import { IoSchool } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";

function BudgetDetails() {
  return (
    <GridItem colSpan={3}>
      <Card minWidth="100%" minHeight="60vh" maxHeight={"60vh"}>
        <CardHeader>
          <Flex fontWeight="bold" fontSize="18" width="100%">
            <Heading
              size="md"
              textTransform="uppercase"
              fontWeight="medium"
              letterSpacing="normal"
            >
              Budget 2024
            </Heading>
            <Spacer />
          </Flex>
        </CardHeader>
        <CardBody overflowY="auto">
          <Stack divider={<StackDivider />} spacing="10">
            <BudgetItemDetail
              budget={{
                id: "1",
                amount: 200,
                category: "Grocery",
                currency: "USD",
                tags: ["fish", "meat", "grocery"],
                isRecurring: false,
              }}
              icon={<MdOutlineLocalGroceryStore />}
            />
            <BudgetItemDetail
              budget={{
                id: "2",
                amount: 800,
                category: "School Fees",
                currency: "USD",
                tags: ["fees", "education"],
                isRecurring: false,
              }}
              icon={<IoSchool />}
            />
            <BudgetItemDetail
              budget={{
                id: "3",
                amount: 500,
                category: "Car Payment",
                currency: "USD",
                tags: ["emi", "loan"],
                isRecurring: true,
              }}
              icon={<FaCarAlt />}
            />
            <BudgetItemDetail
              budget={{
                id: "4",
                amount: 500,
                category: "Car Payment",
                currency: "USD",
                tags: ["emi", "loan"],
                isRecurring: true,
              }}
              icon={<FaCarAlt />}
            />
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
    </GridItem>
  );
}

export default BudgetDetails;
