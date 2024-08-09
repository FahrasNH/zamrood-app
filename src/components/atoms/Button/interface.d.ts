import { ReactElement } from "react";

interface ButtonProps {
  children: string | ReactElement;
  variant?: "default" | "dark" | null;
  size?: "default" | null;
  className?: string; 
}