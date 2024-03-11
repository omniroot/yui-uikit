import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { Spinner } from "lib/components/Spinner/Spinner";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" |"outline";
  loading?: boolean;
}
export const Button: FC<ButtonProps> = ({
  variant = "primary",
  loading = false,
  disabled = false,
  className,
  children,
  ...rest
}) => {
  const _class = clsx(styles.defaultButton, className, {
    [styles.primaryButton]: variant === "primary",
    [styles.secondaryButton]: variant === "secondary",
    [styles.outlineButton]: variant === "outline",
    [styles.isLoadingButton]: loading === true,
    [styles.disabledButton]: disabled === true
  });

  return (
    <button {...rest} className={_class} disabled={disabled || loading}>
      {loading && <Spinner variant="small"/>}
      <span style={loading ? {opacity: 0.8} : {opacity: 1}}>

      {children}
      </span>
    </button>
  );
};
