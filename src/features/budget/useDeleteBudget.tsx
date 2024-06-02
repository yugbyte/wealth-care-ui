import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteBudgetItem as deleteBudgetItemApi } from "../../services/apiBudgets";

export function useDeleteBudgetItem(): {
  isDeleting: boolean;
  deleteBudgetItem: UseMutateFunction<Budget, Error, string>;
} {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteBudgetItem } = useMutation({
    mutationFn: deleteBudgetItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budget"],
      });
    },
    onError: (err) => console.log(err),
  });
  return { isDeleting, deleteBudgetItem };
}
