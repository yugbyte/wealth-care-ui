import { Center, Flex, Image, Text } from "@chakra-ui/react";

function Logo({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <Center w="full" marginBottom={25}>
      <Flex flexDirection="column">
        <Image
          boxSize={isCollapsed ? "45px" : "100px"}
          marginBottom="15px"
          marginLeft={isCollapsed ? 0 : 5}
          src="../../public/1.png"
          transition="boxSize 0.3s ease-in-out"
        ></Image>
        {!isCollapsed && (
          <Text fontFamily={"Caveat"} fontSize={35} fontWeight={800}>
            Wealth Care
          </Text>
        )}
      </Flex>
    </Center>
  );
}

export default Logo;
