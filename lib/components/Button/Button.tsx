import clsx from "clsx";
import styles from "./Button.module.css";
import { BaseComponent } from "lib/types/types";
import { FC, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  href?: string;
  to?: string;
  variant?: "normal" | "secondary" | "outline";
  as?: any;
}

interface ButtonProps extends BaseComponent, LinkProps {}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "normal",
  href,
  to,
  as,
  ...rest
}) => {
  const Component = as ? as : "button";
  const _class = clsx(styles.button, className, {
    [styles.normal]: variant === "normal",
    [styles.button_secondary]: variant === "secondary",
    [styles.button_outline]: variant === "outline",
  });

  // Html link
  if (href) {
    return (
      <a className={_class} {...rest}>
        {children}
      </a>
    );
  }

  // React Router link
  if (to) {
    return (
      <Component className={_class} to={to} {...rest}>
        {children}
      </Component>
    );
  }

  // Button
  return (
    <button className={_class} {...rest}>
      {children}
    </button>
  );
};
