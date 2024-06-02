import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Spacer,
  Spinner,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import BudgetItemDetail from "./BudgetItemDetail";
import { MdOutlinePostAdd } from "react-icons/md";
import { getIconByName } from "../../util/IconMap";
import AddBudgetItem from "./AddBudgetItem";

function BudgetDetails({
  isLoading,
  budget,
}: {
  isLoading: boolean;
  budget: Budget;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
              {budget !== undefined ? budget.name : ""}
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
          {isLoading || budget === undefined ? (
            <Flex
              minHeight="50vh"
              maxHeight={"50vh"}
              alignItems="center"
              justifyContent="center"
            >
              <Spinner color="brandLight.500" thickness="8px" />
            </Flex>
          ) : (
            <Stack divider={<StackDivider />} spacing="5" justify="center">
              {budget.budgetExpenseItems.map((item) => (
                <BudgetItemDetail
                  key={item.id}
                  budgetItem={{
                    id: item.id,
                    expenseName: item.expenseName,
                    budgetAmount: item.budgetAmount,
                    category: item.category,
                    icon: item.icon,
                    tags: item.tags,
                    isRecurring: item.isRecurring,
                  }}
                  currency={budget.currency}
                  icon={<Icon as={getIconByName(item.icon)} />}
                />
              ))}
            </Stack>
          )}
        </CardBody>
        <CardFooter>
          <Flex width={"100%"} justifyContent="flex-end">
            <Button
              aria-label="add-entry"
              variant="pill"
              leftIcon={<MdOutlinePostAdd />}
              onClick={onOpen}
            >
              Add Entry
            </Button>
          </Flex>
        </CardFooter>
      </Card>
      {isOpen && <AddBudgetItem onClose={onClose} isOpen={isOpen} />}
    </>
  );
}

export default BudgetDetails;
