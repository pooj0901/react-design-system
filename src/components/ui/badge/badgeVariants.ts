import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-colors",
  {
    variants: {
  variant: {
    default:
      "bg-slate-100 text-slate-700",

    primary:
      "bg-blue-100 text-blue-700",

    secondary:
      "bg-slate-100 text-slate-700",

    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-yellow-100 text-yellow-700",

    danger:
      "bg-red-100 text-red-700",

    outline:
      "border border-slate-300 bg-white text-slate-700",
  },

      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
      },
    },

    defaultVariants: {
  variant: "default",
      size: "md",
    },
  }
);