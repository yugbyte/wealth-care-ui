import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { updateBudgetItem as updateBudgetItemApi } from "../../services/apiBudgets";

export function useUpdateBudgetItem(): {
  isUpdating: boolean;
  updateBudgetItem: UseMutateFunction<
    Budget,
    Error,
    { budgetItem: BudgetItemBase; id: string }
  >;
} {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateBudgetItem } = useMutation<
    Budget,
    Error,
    { budgetItem: BudgetItemBase; id: string }
  >({
    mutationFn: ({ budgetItem, id }) => updateBudgetItemApi(budgetItem, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budget"],
      });
    },
    onError: (err) => console.log(err),
  });
  return { isUpdating, updateBudgetItem };
}
