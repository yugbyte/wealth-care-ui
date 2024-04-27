import { Fade, Flex, Icon, Link, Text } from "@chakra-ui/react";

function NavItem({
  icon,
  label,
  isCollapsed,
}: {
  icon: React.ComponentType;
  label: string;
  isCollapsed: boolean;
}) {
  return (
    <Link
      display="flex"
      alignItems="center"
      py={isCollapsed ? "1" : "0"}
      px={isCollapsed ? "1" : "0"}
      _hover={{ textDecoration: "none" }}
      textDecoration="none"
      marginLeft={isCollapsed ? 15 : 0}
    >
      <Flex alignItems="center" width="100%" color={"gray.600"}>
        <Icon as={icon} fontSize={24} mr="2" />

        <Text
          fontWeight="400"
          fontSize={18}
          fontFamily={"Roboto, sans-serif"}
          marginLeft={isCollapsed ? "1rem" : "0rem"}
          opacity={isCollapsed ? 100 : 0}
          transition="opacity 0.1s ease-in-out"
          letterSpacing={"0.00938em"}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  );
}

export default NavItem;
