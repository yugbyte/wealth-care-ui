import { useQuery } from "@tanstack/react-query";
import { getActiveBudgetDetails } from "../../services/apiBudgets";

export function useBudget(): {
  isLoading: boolean;
  error: unknown;
  budget: Budget;
} {
  const {
    isLoading,
    data: budget,
    error,
  } = useQuery({
    queryKey: ["budget"],
    queryFn: getActiveBudgetDetails,
  });

  return { isLoading, error, budget };
}
