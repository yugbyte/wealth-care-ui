import { Text } from "@chakra-ui/react";

function Currency({
  currency = "USD",
  amount = 0,
  fontSize = "sm",
  fontWeight = "normal",
}: {
  currency: string;
  amount: number;
  fontSize: string;
  fontWeight: string;
}) {
  return (
    <Text marginLeft={5} fontSize={fontSize} fontWeight={fontWeight}>
      {amount} ({currency})
    </Text>
  );
}

export default Currency;
