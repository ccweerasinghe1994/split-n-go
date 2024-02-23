import { FC } from "react";
import { ButtonProps } from "./types";



const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
    return <button className="button" {...props}>{children}</button>;
}

export default Button;