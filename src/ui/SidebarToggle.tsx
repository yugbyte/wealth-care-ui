import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";

function SidebarToggle({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Flex>
      <Box p="4">
        {!isOpen && (
          <IconButton
            display={"block"}
            fontSize={"20"}
            size="8xl"
            color="brand.400"
            aria-label="Toggle Sidebar"
            icon={<TbLayoutSidebarRightCollapseFilled />}
            variant="ghost"
            onClick={onClose}
          />
        )}
      </Box>
      <Spacer />
      <Box p="4">
        {isOpen && (
          <IconButton
            display={"block"}
            fontSize={"20"}
            size="8xl"
            color="brand.400"
            aria-label="Toggle Sidebar"
            icon={<TbLayoutSidebarLeftCollapseFilled />}
            variant="ghost"
            onClick={onClose}
          />
        )}
      </Box>
    </Flex>
  );
}

export default SidebarToggle;
