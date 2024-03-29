import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;

}