import { Flex, Grid } from "@chakra-ui/react";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <Grid marginTop={55} templateColumns="repeat(5, 1fr)" gap={6}>
      {children}
    </Grid>
  );
}

export default Content;
