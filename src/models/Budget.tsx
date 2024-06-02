interface Budget {
  id: string;
  name: string;
  currency: string;
  tags: string[];
  budgetExpenseItems: BudgetItem[];
}
