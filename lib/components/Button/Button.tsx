import {  DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from './Button.module.css'
import clsx from "clsx";

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: "primary" | "outline"
}
export const Button: FC<ButtonProps> = ({ variant, className, children,...rest }) => {
    const _class = clsx(styles.defaultButton, className, {
      [styles.primaryButton]: variant === "primary",
      [styles.outlineButton]: variant === "outline"
    })
    
  return (<button {...rest} className={_class}>{children}</button>);
};
