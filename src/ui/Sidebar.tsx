import { Flex, VStack } from "@chakra-ui/react";
import {
  MdAccountCircle,
  MdHome,
  MdOutlineEventNote,
  MdSettings,
} from "react-icons/md";
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
      w={isOpen ? "250px" : "70px"}
      minH="100vh"
      p="4"
      flexDirection="column"
      justifyContent="space-between"
      zIndex="1000"
      transition="width 0.3s ease-in-out"
    >
      <div>
        <Logo isCollapsed={!isOpen} />
        <VStack spacing="4" align="stretch">
          <NavItem
            icon={HiOutlineDocumentReport}
            label="Dashboard"
            isCollapsed={isOpen}
          />
          <NavItem
            icon={MdOutlineEventNote}
            label="Budget Planner"
            isCollapsed={isOpen}
          />
          <NavItem
            icon={FaMoneyBill1Wave}
            label="Expenses"
            isCollapsed={isOpen}
          />
          <NavItem icon={MdSettings} label="Settings" isCollapsed={isOpen} />
        </VStack>
      </div>
      <SidebarToggle isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Sidebar;
