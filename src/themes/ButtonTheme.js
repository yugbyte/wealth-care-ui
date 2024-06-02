import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const pill = defineStyle({
  borderRadius: "full",
  background: "brandLight.900",
  fontWeight: "500",
  color: "white",
  _hover: { background: "brandLight.300" },
});

const icon = defineStyle({
  background: "brandLight.900",
  fontWeight: "500",
  color: "white",
  _hover: { background: "brandLight.300" },
});

export const buttonTheme = defineStyleConfig({
  variants: { pill, icon },
});
