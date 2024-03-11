import clsx from "clsx";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
export const Input: FC<InputProps> = ({}) => {
  const _class = clsx(styles.defaultInput);
  return <input type="text" className={_class} />;
};
