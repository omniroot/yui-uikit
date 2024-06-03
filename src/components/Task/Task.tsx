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
import { ITask } from "@/store/store";
import { generateUUID } from "@/utils/generateUuid";

interface ITaskProps {
  task: ITask;
}
export const Task: FC<ITaskProps> = ({ task }) => {
  const [isEditModal, setIsEditModal] = useState(false);
  // const { tasks, toggleTaskComplete, deleteTask } = useTasks();
  const [newTask, setNewTask] = useState(task);

  const _toggleModal = () => {
    console.log("toggle modal");

    setIsEditModal((prev) => !prev);
  };

  // const _onEditComplete = () => {
  //   if (onEditCallback) {
  //     console.log("On edit Complete");
  //     onEditCallback(newTask);
  //     _toggleModal();
  //   }
  // };

  const _toggleTaskComplete = () => {
    toggleTaskComplete(task.id);
  };

  const _onDeleteTask = () => {
    deleteTask(task.id);
  };

  const _onTitleChange = (text: string) => {
    setNewTask((prev) => {
      return { ...prev, title: text };
    });
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
      onClick: _onDeleteTask,
    },
  ];

  return (
    <div className={styles.task}>
      <GripVertical />
      <Checkbox
        className={styles.checkbox}
        defaultIsChecked={task.completed}
        onChangeCallback={_toggleTaskComplete}
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
        <Portal key={task.id}>
          <Modal
            titleSlot="Edit"
            position="center"
            rightSlot={
              <Button onClick={() => {}} className={styles.save}>
                Save
              </Button>
            }
            closeCallback={_toggleModal}
          >
            <div className={styles.editmodal}>
              <Input
                initialValue={newTask.title}
                onChangeCallback={_onTitleChange}
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
