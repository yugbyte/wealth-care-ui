import { useQuery } from "@tanstack/react-query";
import { getBudgetCategories } from "../../services/apiCategories";

export function useBudgetCategories(): {
  isLoading: boolean;
  error: unknown;
  budgetCategories: BudgetCategory[];
} {
  const {
    isLoading,
    data: budgetCategories,
    error,
  } = useQuery({
    queryKey: ["budgetCategories"],
    queryFn: getBudgetCategories,
  });

  return { isLoading, error, budgetCategories };
}
