import { ITask } from "@/utils/useTasks";
import styles from "./Task.module.css";
import { Button, Checkbox, Input, Popup, Typography } from "lib";
import {
  EllipsisVertical,
  GripVertical,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import { FC, useState } from "react";
import { Modal } from "lib/components/Modal/Modal";

interface ITaskProps {
  task: ITask;
  onDeleteCallback?: () => void;
  onEditCallback?: (task: ITask) => void;
  onToggleCompleteCallback?: () => void;
}
export const Task: FC<ITaskProps> = ({
  task,
  onDeleteCallback,
  onEditCallback,
  onToggleCompleteCallback,
}) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const newTaskState: ITask = task;
  const _toggleModal = () => {
    setIsEditModal((prev) => !prev);
  };
  const _onEditComplete = () => {
    if (onEditCallback) {
      onEditCallback(newTaskState);
      _toggleModal();
    }
  };
  const moreItems = [
    {
      id: "edit",
      icon: <Pencil />,
      title: "Edit",
      onClick: _toggleModal,
    },
    {
      id: "delete",
      icon: <Trash2 />,
      title: "Delete",
      onClick: onDeleteCallback,
    },
  ];

  return (
    <div className={styles.task}>
      <GripVertical />
      <Checkbox
        className={styles.checkbox}
        defaultIsChecked={task.completed}
        onChangeCallback={onToggleCompleteCallback}
      >
        <Typography size="h3" className={styles.title}>
          {task.title}
        </Typography>
      </Checkbox>
      <div className={styles.more}>
        <Popup listItems={moreItems} position="left">
          <EllipsisVertical />
        </Popup>
      </div>
      {isEditModal && (
        <Modal
          titleSlot="123"
          position="center"
          rightSlot={
            <Button onClick={_toggleModal} variant="transparent">
              <X size={"24px"} />
            </Button>
          }
          closeCallback={_toggleModal}
        >
          <Input
            initialValue={task.title}
            onChangeCallback={(text) => (newTaskState.title = text)}
          />
          <Button onClick={_onEditComplete}>Print</Button>
        </Modal>
      )}
    </div>
  );
};
