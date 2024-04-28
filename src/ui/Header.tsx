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
        isRound={true}
        size="sm"
        aria-label="mode"
        fontSize="25px"
        color={"yellow.500"}
        icon={<LuSunMedium />}
      />
    </Flex>
  );
}

export default Header;
