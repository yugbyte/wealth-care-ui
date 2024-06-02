import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { createBudgetItem as createBudgetItemApi } from "../../services/apiBudgets";

export function useCreateBudgetItem(): {
  isCreating: boolean;
  createBudgetItem: UseMutateFunction<Budget, Error, BudgetItemBase>;
} {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createBudgetItem } = useMutation({
    mutationFn: createBudgetItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budget"],
      });
    },
    onError: (err) => console.log(err),
  });
  return { isCreating, createBudgetItem };
}
