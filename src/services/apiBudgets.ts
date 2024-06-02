import { API_BASE_URL } from "./apiBase";

export const getActiveBudgetDetails = async (): Promise<Budget> => {
  const response = await fetch(`${API_BASE_URL}/budgets/_active`);
  if (!response.ok) {
    throw new Error("Budget Not Found");
  }
  console.log(response.json);
  return response.json();
};

export const deleteBudgetItem = async (itemId: string): Promise<Budget> => {
  const response = await fetch(`${API_BASE_URL}/budgets/_active/${itemId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Budget Item Not Found");
  }
  console.log(response.json);
  return response.json();
};

export const createBudgetItem = async (
  budgetItem: BudgetItemBase
): Promise<Budget> => {
  const response = await fetch(`${API_BASE_URL}/budgets/_active`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetItem),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage =
      errorResponse.messages?.[0] || "Failed to Create Expense Item.";
    throw new Error(errorMessage);
  }
  console.log(response.json);
  return response.json();
};

export const updateBudgetItem = async (
  budgetItem: BudgetItemBase,
  id: string
): Promise<Budget> => {
  const response = await fetch(`${API_BASE_URL}/budgets/_active/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetItem),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage =
      errorResponse.messages?.[0] || "Failed to Update Expense Item.";
    throw new Error(errorMessage);
  }
  console.log(response.json);
  return response.json();
};
