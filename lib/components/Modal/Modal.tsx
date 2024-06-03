import React, { FC, MouseEvent } from "react";
import styles from "./Modal.module.css";
import { Typography } from "../Typography/Typography";
import clsx from "clsx";

interface ModalProps {
  titleSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  children?: React.ReactNode;
  position?: "top" | "center" | "bottom";
  closeCallback?: () => void;
  key?: string | number;
}

export const Modal: FC<ModalProps> = ({
  titleSlot,
  rightSlot,
  closeCallback,
  position = "center",
  key,
  children,
}) => {
  const _class = clsx(styles.modal, {
    [styles.positionTop]: position === "top",
    [styles.positionCenter]: position === "center",
    [styles.positionBottom]: position === "bottom",
  });

  const _closeModal = () => {
    closeCallback && closeCallback();
  };

  const onModalClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div key={key} className={styles.modalContainer} onClick={_closeModal}>
      <div className={_class} onClick={onModalClickHandler}>
        <Typography.Heading rightSlot={rightSlot}>
          {titleSlot}
        </Typography.Heading>
        <div>{children}</div>
      </div>
    </div>
  );
};
