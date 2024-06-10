import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import typographyStyles from "../Typography.module.css";
import styles from "./HeadingTypography.module.css";
import clsx from "clsx";
import { Typography } from "lib/components/Typography/Typography";

interface HeadingTypographyProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  rightSlot?: React.ReactNode;
}

export const HeadingTypography: FC<HeadingTypographyProps> = ({
  children,
  rightSlot,
  ...rest
}) => {
  const _class = clsx(
    styles.headingTypographyDefault,
    typographyStyles.typographySize2
  );
  return (
    <div className={styles.headingContainer}>
      <Typography className={_class} {...rest}>
        {children}
      </Typography>
      {rightSlot}
    </div>
  );
};
