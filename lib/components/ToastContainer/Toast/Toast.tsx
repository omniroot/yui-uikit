import { FC } from "react";

export interface IToast {
  id: string;
  title?: string;
}

export type IToasts = IToast[];

interface IToastProps {
  toast: IToast;
}

export const Toast: FC<IToastProps> = ({ toast }) => {
  return <div>{toast.title}</div>;
};
