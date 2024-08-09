import { FC } from "react";
import { Box } from "@radix-ui/themes";
import { ButtonProps } from "./interface";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utility";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition delay-100 ease-in-out cursor-pointer rounded-full",
  {
    variants: {
      variant: {
        default:
          "text-[#0B7373] border-2 border-[#0B7373] group hover:bg-[#0B7373] hover:text-[#FAF9F5]",
        secondary:
          "text-[#FAF9F5] border-2 border-[#FAF9F5] hover:border-[#D6B66B] hover:bg-[#D6B66B]",
        dark:
          "text-[#FAF9F5] group bg-[#004040] hover:bg-[#D6B66B]",
      },
      size: {
        default: "px-6 py-4 font-bold text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button: FC<ButtonProps> = ({ children, className, variant, size }) => {
  return (
    <Box className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </Box>
  );
}

export default Button;