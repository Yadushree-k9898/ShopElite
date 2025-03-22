// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// //Convert  prisma object into regular object

// export function convertToPlainObject<T>(value: T): T {
//   return JSON.parse(JSON.stringify(value));
// }

// //format number with decimal places

// export function formatNumberWithDecimal(num: number): string {
//   const [int, decimal] = num.toString().split(".");
//   return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
// }


import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert Prisma object into a regular object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with exactly two decimal places
export function formatNumberWithDecimal(num: number | string): string {
  const numericValue = typeof num === "string" ? parseFloat(num) : num;
  return numericValue.toFixed(2);
}
