interface Budget {
  id: string;
  category: string;
  currency: string;
  amount: number;
  tags: string[];
  isRecurring: boolean;
}
