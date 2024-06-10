import { useState } from "react";
import styles from "./ToastContainer.module.css";
import {
  IToast,
  IToasts,
  Toast,
} from "lib/components/ToastContainer/Toast/Toast";

export const useToast = () => {
  const [toasts, setToasts] = useState<IToasts>([]);

  const success = (toast: IToast) => {
    console.log(toasts);
    setToasts((prev) => [...prev, toast]);
  };

  return { toasts, success };
};

export const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className={styles.toastcontainer}>
      {toasts.map((toast) => {
        return <Toast toast={toast} />;
      })}
    </div>
  );
};
