import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-[8px]",
    "font-medium transition-all duration-200",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-blue-500",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-700",

        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200",

        outline:
          "border border-gray-300 bg-white hover:bg-gray-50",

        ghost:
          "hover:bg-gray-100",

        danger:
          "bg-red-600 text-white hover:bg-red-700",

        success:
          "bg-green-600 text-white hover:bg-green-700",

        link:
          "text-primary-600 underline-offset-4 hover:underline bg-transparent",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        md: "h-10 px-4",

        lg: "h-11 px-6",

        icon: "h-10 w-10 p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);