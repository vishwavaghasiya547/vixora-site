import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes safely without style conflicts.
 * Uses clsx for conditional class applying and tailwind-merge to resolve tailwind specific conflicts.
 * 
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns A merged, conflict-free class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
