import styles from "./Task.module.css";
import { Button, Checkbox, Input, Popup, Portal, Typography } from "lib";
import {
  EllipsisVertical,
  GripVertical,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import { FC, useState } from "react";
import { Modal } from "lib/components/Modal/Modal";
import { ITask, useGlobalStore } from "@/store/store";

interface ITaskProps {
  task: ITask;
}
export const Task: FC<ITaskProps> = ({ task }) => {
  const { toggleTask, deleteTask, editTask } = useGlobalStore((state) => state);
  const [isEditModal, setIsEditModal] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const _toggleEditModal = () => {
    console.log("toggle modal");

    setIsEditModal((prev) => !prev);
  };

  const _onSaveTaskHandler = () => {
    editTask(newTask);
    _toggleEditModal();
  };

  const _onToggleTaskHandler = () => {
    toggleTask(task.id);
  };

  const _onDeleteTaskHandler = () => {
    deleteTask(task.id);
  };

  const _onTitleChangeHandler = (text: string) => {
    setNewTask((prev) => {
      return { ...prev, title: text };
    });
  };

  const moreItems = [
    {
      id: "edit",
      icon: <Pencil />,
      title: "Edit",
      onClick: _toggleEditModal,
    },
    {
      id: "delete",
      icon: <Trash2 />,
      title: "Delete",
      onClick: _onDeleteTaskHandler,
    },
  ];

  return (
    <div className={styles.task}>
      <GripVertical />
      <Checkbox
        className={styles.checkbox}
        defaultIsChecked={task.completed}
        onChangeCallback={_onToggleTaskHandler}
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
      {isEditModal ? (
        <Portal>
          <Modal
            titleSlot="Edit"
            position="center"
            rightSlot={
              <Button onClick={_onSaveTaskHandler} className={styles.save}>
                Save
              </Button>
            }
            closeCallback={_toggleEditModal}
          >
            <div className={styles.editmodal}>
              <Input
                initialValue={newTask.title}
                onChangeCallback={_onTitleChangeHandler}
                autoFocus
                key={task.id}
              />
            </div>
          </Modal>
        </Portal>
      ) : (
        <div></div>
      )}
    </div>
  );
};
