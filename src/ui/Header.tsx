import { Flex, IconButton } from "@chakra-ui/react";
import { LuSunMedium } from "react-icons/lu";

function Header() {
  return (
    <Flex
      color="black"
      w="100%"
      p="4"
      justifyContent="flex-end"
      alignItems="center"
      position="fixed"
    >
      <IconButton
        fontSize={25}
        colorScheme="primary"
        aria-label="mode"
        icon={<LuSunMedium />}
      />
    </Flex>
  );
}

export default Header;
