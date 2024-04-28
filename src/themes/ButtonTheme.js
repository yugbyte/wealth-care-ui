import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const pill = defineStyle({
  borderRadius: "full",
  background: "brand.900",
  fontWeight: "400",
  color: "white",
  _hover: { background: "brand.300" },
});

export const buttonTheme = defineStyleConfig({
  variants: { pill },
});
