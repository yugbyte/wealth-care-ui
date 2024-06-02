import { Grid } from "@chakra-ui/react";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <Grid marginTop={0} templateColumns="repeat(6, 1fr)" gap={3}>
      {children}
    </Grid>
  );
}

export default Content;
