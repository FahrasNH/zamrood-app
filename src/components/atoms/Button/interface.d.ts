import { ReactElement } from "react";

interface ButtonProps {
  children: string | ReactElement;
  variant?: "default" | "dark" | "secondary" | null;
  size?: "default" | null;
  className?: string; 
}