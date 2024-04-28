import {
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import BudgetItemDetail from "./BudgetItemDetail";
import { IoSchool } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";

function BudgetDetails() {
  return (
    <GridItem colSpan={2}>
      <Card minWidth={500}>
        <CardHeader>
          <Heading
            size="md"
            textTransform="uppercase"
            fontWeight="medium"
            letterSpacing="normal"
          >
            Budget 2024
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="10">
            <BudgetItemDetail
              budget={{
                id: "1",
                amount: 200,
                category: "Grocery",
                currency: "$",
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
                currency: "$",
                tags: ["fees", "education"],
                isRecurring: false,
              }}
              icon={<IoSchool />}
            />
            <BudgetItemDetail
              budget={{
                id: "2",
                amount: 500,
                category: "Car Payment",
                currency: "$",
                tags: ["emi", "loan"],
                isRecurring: true,
              }}
              icon={<FaCarAlt />}
            />
          </Stack>
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default BudgetDetails;
