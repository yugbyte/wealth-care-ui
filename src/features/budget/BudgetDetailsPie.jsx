import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

function BudgetDetailsPie() {
  const data = [
    { name: "Grocery", value: 400 },
    { name: "School Fees", value: 300 },
    { name: "Car Payment", value: 300 },
    { name: "Electronics", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <GridItem colSpan={3}>
      <Card minWidth="50%" minHeight="60vh" maxHeight={"60vh"} width="100%">
        <CardHeader>
          <Flex fontWeight="bold" fontSize="18" width="100%">
            <Heading
              size="md"
              textTransform="uppercase"
              fontWeight="medium"
              letterSpacing="normal"
            >
              Budget 2024
            </Heading>
          </Flex>
        </CardHeader>
        <CardBody>
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
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default BudgetDetailsPie;
