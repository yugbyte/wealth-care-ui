import { Box, Flex, Icon, Text } from "@chakra-ui/react";
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
      to={route}
      display="flex"
      alignItems="center"
      minHeight="70px"
      _hover={{ textDecoration: "none" }}
      textDecoration="none"
      backgroundColor={!isActive ? "" : "gray.100"}
    >
      <Flex
        alignItems="center"
        width="100%"
        fontWeight={!isActive ? "600" : "800"}
        paddingLeft={5}
      >
        <Icon
          as={icon}
          fontSize={38}
          mr="7"
          fontWeight={!isActive ? "normal" : "bold"}
          color={!isActive ? "brandLight.900" : "brandLight.500"}
        />

        <Text
          fontSize={20}
          fontWeight={!isActive ? "normal" : "700"}
          fontFamily={"Karla, sans-serif"}
          marginLeft={isCollapsed ? "0.5rem" : "0.1rem"}
          opacity={isCollapsed ? 100 : 0}
          transition="opacity 0.1s ease-in-out"
          letterSpacing={"0.00938em"}
          color={!isActive ? "brandLight.700" : "brandLight.900"}
        >
          {isCollapsed ? label : ""}
        </Text>
      </Flex>
    </Box>
  );
}

export default NavItem;
