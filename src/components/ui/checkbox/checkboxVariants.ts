import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "peer flex items-center justify-center rounded border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },

      state: {
        default: "border-slate-300 bg-white",
        checked: "border-blue-600 bg-blue-600 text-white",
        error: "border-red-500",
      },
    },

    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);