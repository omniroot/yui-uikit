import React, { FC } from "react";
import styles from "./BottomNavigation.module.css";
import { Button } from "lib/components/Button/Button";

interface BottomNavigationListItems {
  id: string;
  icon?: React.ReactNode;
  title?: string;
  path: string;
}

interface BottomNavigationProps {
  listItems: BottomNavigationListItems[];
  onItemClick?: (id: string) => void;
}

const getItemClassName = (currentPath: string, path: string) =>
  currentPath === path ? `${styles.item} ${styles.active}` : styles.item;

export const BottomNavigation: FC<BottomNavigationProps> = ({
  listItems,
  onItemClick,
}) => {
  const onItemClickHandler = (path: string) => {
    onItemClick && onItemClick(path);
  };

  return (
    <div className={styles.bottomnavigation}>
      {listItems.map((item) => {
        return (
          <Button
            className={getItemClassName(location.pathname, item.path)}
            key={item.id}
            variant="transparent"
            onClick={() => onItemClickHandler(item.path)}
          >
            {item.icon} <span>{item.title}</span>
          </Button>
        );
      })}
    </div>
  );
};
