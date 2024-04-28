import { Box, Fade, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

function NavItem({
  icon,
  label,
  route,
  isCollapsed,
}: {
  icon: React.ComponentType;
  label: string;
  route: string;
  isCollapsed: boolean;
}) {
  const location = useLocation();
  const isActive = location.pathname === route;
  return (
    <Box
      as={NavLink}
      width={"100%"}
      to={route}
      display="flex"
      alignItems="center"
      py={isCollapsed ? "1" : "0"}
      px="1"
      minHeight="50px"
      _hover={{ textDecoration: "none" }}
      textDecoration="none"
      marginLeft={isCollapsed ? 15 : 0}
      borderRight={!isActive ? "none" : "solid 8px"}
      borderRightColor={!isActive ? "gray.600" : "brand.500"}
    >
      <Flex
        alignItems="center"
        width="100%"
        fontWeight={!isActive ? "400" : "600"}
      >
        <Icon
          as={icon}
          fontSize={24}
          mr="2"
          fontWeight={!isActive ? "normal" : "bold"}
          color={!isActive ? "gray.500" : "brand.500"}
        />

        <Text
          fontSize={18}
          fontWeight={!isActive ? "normal" : "500"}
          fontFamily={"Roboto, sans-serif"}
          marginLeft={isCollapsed ? "0.5rem" : "0rem"}
          opacity={isCollapsed ? 100 : 0}
          transition="opacity 0.1s ease-in-out"
          letterSpacing={"0.00938em"}
          color={!isActive ? "gray.500" : "gray.700"}
        >
          {isCollapsed ? label : ""}
        </Text>
      </Flex>
    </Box>
  );
}

export default NavItem;
