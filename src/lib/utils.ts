import { clsx, type ClassValue } from "clsx";
import { format, isValid } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export const calculateDays = (startDate: string, endDate: string): number => {
  if (!startDate || !endDate) return 0;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays;
};

export const safeFormatDate = (
  dateString: string | null | undefined,
  formatStr: string = "d MMM yyyy"
): string => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (!isValid(date)) return "Invalid Date";

  return format(date, formatStr);
};
