import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

function BudgetDetailsPie({
  isLoading,
  budget,
}: {
  isLoading: boolean;
  budget: Budget;
}) {
  const data = [];
  budget?.budgetExpenseItems.forEach((item) => {
    data.push({ name: item.expenseName, value: item.budgetAmount });
  });
  const COLORS = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#c7c7c7",
    "#dbdb8d",
    "#9edae5",
  ];

  return (
    <>
      <Card
        minWidth="50%"
        minHeight="65vh"
        maxHeight={"65vh"}
        width="100%"
        bg={"layoutPrimary.700"}
        color={"brandPrimary.200"}
      >
        <CardHeader>
          <Flex fontWeight="bold" fontSize="18" width="100%">
            <Heading
              color="brandLight.800"
              size="md"
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="normal"
            >
              {budget !== undefined ? budget.name : ""}
            </Heading>
          </Flex>
        </CardHeader>
        <CardBody>
          {isLoading || budget === undefined ? (
            <Flex
              minHeight="50vh"
              maxHeight={"50vh"}
              alignItems="center"
              justifyContent="center"
            >
              <Spinner color="brandLight.500" thickness="8px" />
            </Flex>
          ) : (
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  innerRadius={100}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </CardBody>
      </Card>
    </>
  );
}

export default BudgetDetailsPie;
