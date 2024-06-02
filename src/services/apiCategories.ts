import { API_BASE_URL } from "./apiBase";

export const getBudgetCategories = async (): Promise<BudgetCategory[]> => {
  const response = await fetch(`${API_BASE_URL}/lookup/budgets/categories`);
  if (!response.ok) {
    throw new Error("Budget Categories Not Found");
  }
  console.log(response.json);
  return response.json();
};
