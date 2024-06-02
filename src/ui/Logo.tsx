import { Center, Flex, Text } from "@chakra-ui/react";
import { MdDiamond } from "react-icons/md";

function Logo({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <Center w="full" marginBottom={25}>
      <Flex flexDirection="column">
        <Center fontSize={isCollapsed ? 80 : 100} color="brandLight.600">
          <MdDiamond />
        </Center>

        {!isCollapsed && (
          <Text
            fontFamily={"Caveat"}
            fontSize={39}
            fontWeight={800}
            color="brandLight.500"
          >
            Wealth Care
          </Text>
        )}
      </Flex>
    </Center>
  );
}

export default Logo;
