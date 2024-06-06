import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { LuUtilityPole } from "react-icons/lu";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

function ExpenseItem() {
  return (
    <Flex>
      <Flex verticalAlign="center">
        <Center>
          <Avatar
            size="lg"
            bg="brandLight.500"
            icon={<LuUtilityPole />}
            fontSize={25}
          />
        </Center>
        <Box marginLeft="4" width="100">
          <Stack spacing="2px">
            <WrapItem>
              <Text
                width="145px"
                fontSize="lg"
                fontWeight="bold"
                color="brandLight.900"
              >
                Expense Name:
              </Text>
              <Text marginStart={5} fontSize="lg" color="brandLight.900">
                Netflix
              </Text>
            </WrapItem>
            <WrapItem>
              <Text
                width="145px"
                fontSize="lg"
                fontWeight="bold"
                color="brandLight.900"
              >
                Amount(USD):
              </Text>
              <Text marginStart={5} fontSize="lg" color="brandLight.900">
                20
              </Text>
            </WrapItem>
            <WrapItem>
              <Text
                width="145px"
                fontSize="lg"
                fontWeight="bold"
                color="brandLight.900"
              >
                Category
              </Text>
              <Text marginStart={5} fontSize="lg" color="brandLight.900">
                Subscription
              </Text>
            </WrapItem>
            <WrapItem>
              <Text
                width="145px"
                fontSize="lg"
                fontWeight="bold"
                color="brandLight.900"
              >
                Date:
              </Text>
              <Text marginStart={5} fontSize="lg" color="brandLight.900">
                08/08/2023
              </Text>
            </WrapItem>
          </Stack>
        </Box>
      </Flex>
      <Spacer />
      <Center>
        <Box>
          <Tooltip label="Delete Entry">
            <IconButton
              variant="outline"
              aria-label="Delete"
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
            />
          </Tooltip>
        </Box>{" "}
      </Center>
    </Flex>
  );
}

export default ExpenseItem;
