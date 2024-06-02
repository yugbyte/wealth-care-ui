import { Flex, VStack } from "@chakra-ui/react";
import { MdOutlineEventNote, MdSettings } from "react-icons/md";
import NavItem from "./NavItem";
import SidebarToggle from "./SidebarToggle";
import Logo from "./Logo";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { HiOutlineDocumentReport } from "react-icons/hi";

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Flex
      bg="layout.0"
      w={isOpen ? "350px" : "95px"}
      minH="100vh"
      backgroundColor="layoutLight.0"
      flexDirection="column"
      justifyContent="space-between"
      zIndex="1000"
      borderStart="solid"
      borderColor="gray-100"
      transition="width 0.3s ease-in-out"
      boxShadow="0px 0px 25px rgba(0, 0, 0, 0.1)"
    >
      <div>
        <Logo isCollapsed={!isOpen} />
        <VStack spacing="4" align="stretch">
          <NavItem
            icon={HiOutlineDocumentReport}
            label="Dashboard"
            isCollapsed={isOpen}
            route="/dashboard"
          />
          <NavItem
            icon={MdOutlineEventNote}
            label="Budget Planner"
            isCollapsed={isOpen}
            route="/budget-planner"
          />
          <NavItem
            icon={FaMoneyBill1Wave}
            label="Expenses"
            isCollapsed={isOpen}
            route="/expenses"
          />
          <NavItem
            icon={MdSettings}
            label="Settings"
            isCollapsed={isOpen}
            route="/settings"
          />
        </VStack>
      </div>
      <SidebarToggle isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Sidebar;
