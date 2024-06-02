import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Tag,
  Text,
  Tooltip,
  Wrap,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { MdEventRepeat } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { useDeleteBudgetItem } from "./useDeleteBudget";
import AddBudgetItem from "./AddBudgetItem";

function BudgetItemDetail({
  icon,
  budgetItem,
  currency,
}: {
  icon: React.ReactElement;
  budgetItem: BudgetItem;
  currency: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { isDeleting, deleteBudgetItem } = useDeleteBudgetItem();
  return (
    <Flex>
      <Flex>
        <Tooltip label={budgetItem?.category}>
          <Stack verticalAlign="true">
            <Center>
              <Avatar size="md" bg="brandLight.500" icon={icon} fontSize={25} />
            </Center>
          </Stack>
        </Tooltip>
        <Box marginLeft="8">
          <Wrap>
            <Heading size="sm" color="brandLight.900">
              {budgetItem?.expenseName}
            </Heading>
            {budgetItem?.isRecurring && (
              <Tooltip label="Recurring Payment">
                <Flex fontSize="13" color="red.300">
                  <MdEventRepeat />
                </Flex>
              </Tooltip>
            )}
          </Wrap>
          <Wrap>
            <Text fontWeight="bold">Max Limit:</Text>
            <Text fontWeight="normal"> {budgetItem?.budgetAmount}</Text>
            <Text>({currency})</Text>
          </Wrap>

          <HStack spacing={4}>
            {budgetItem?.tags.map((item) => (
              <Tag
                size="sm"
                key={item}
                variant="solid"
                backgroundColor={"grey.300"}
              >
                {item}
              </Tag>
            ))}
          </HStack>
        </Box>
      </Flex>
      <Spacer />
      <Box>
        <Tooltip label="Delete Entry">
          <IconButton
            onClick={() =>
              deleteBudgetItem(budgetItem.id, {
                onSuccess() {
                  toast({
                    title: "Entry Deleted",
                    description: "Entry Deleted Successfully",
                    status: "success",
                  });
                },
                onError(err) {
                  toast({
                    title: "Entry Delete Failed",
                    description: err.message,
                    status: "error",
                  });
                },
              })
            }
            variant="outline"
            aria-label="Delete"
            disabled={isDeleting}
            icon={<RiDeleteBin6Line />}
            margin="4px"
            color="warning.400"
          />
        </Tooltip>
        <Tooltip label="Edit Entry">
          <IconButton
            variant="outline"
            aria-label="Edit"
            icon={<RiEdit2Line />}
            onClick={onOpen}
          />
        </Tooltip>
      </Box>
      {isOpen && (
        <AddBudgetItem
          onClose={onClose}
          isOpen={isOpen}
          budgetItemToEdit={budgetItem}
        />
      )}
    </Flex>
  );
}

export default BudgetItemDetail;
