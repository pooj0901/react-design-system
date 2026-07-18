import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "flex w-full rounded-[8px] border bg-white text-sm transition-all outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  {
    variants: {
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-4 text-base",
      },

      state: {
        default: "border-slate-300",
        error: "border-red-500 focus:border-red-500 focus:ring-red-200",
        success:
          "border-green-500 focus:border-green-500 focus:ring-green-200",
      },
    },

    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);