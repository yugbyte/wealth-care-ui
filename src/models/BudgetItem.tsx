interface BudgetItem {
  id: string;
  expenseName: string;
  isRecurring: boolean;
  category: string;
  icon: string;
  tags: string[];
  budgetAmount: number;
}
