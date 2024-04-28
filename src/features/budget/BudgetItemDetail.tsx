import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Tag,
  Text,
  Tooltip,
  Wrap,
} from "@chakra-ui/react";
import { MdEventRepeat } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

function BudgetItemDetail({
  icon,
  budget,
}: {
  icon: React.ReactElement;
  budget: Budget;
}) {
  return (
    <Flex>
      <Flex>
        <Avatar size="lg" bg="brand.300" icon={icon} fontSize={25} />
        <Box marginLeft="8">
          <Heading size="sm">
            <Wrap>
              {budget.category}
              {budget.isRecurring && (
                <Tooltip label="Recurring Payment">
                  <Flex fontSize="13" color="red.300">
                    <MdEventRepeat />
                  </Flex>
                </Tooltip>
              )}
            </Wrap>
          </Heading>
          <Text fontWeight="normal">
            Max Limit: <span>{budget.currency}</span>
            <span style={{ marginLeft: "4px" }}>{budget.amount}</span>
          </Text>
          <HStack spacing={4}>
            {budget.tags.map((item) => (
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
        <IconButton
          variant="outline"
          aria-label="Delete"
          icon={<RiDeleteBin6Line />}
          margin="4px"
          color="warning.400"
        />
        <IconButton
          variant="outline"
          aria-label="Search database"
          icon={<RiEdit2Line />}
        />
      </Box>
    </Flex>
  );
}

export default BudgetItemDetail;
