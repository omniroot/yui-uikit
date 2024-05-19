import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import typographyStyles from "../Typography.module.css"
import styles from "./HeadingTypography.module.css"
import clsx from "clsx"
import { Typography } from "lib/components/Typography/Typography"

interface HeadingTypographyProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	rightSlot?: ReactNode
}

export const HeadingTypography = ({
	children,
	rightSlot,
	...rest
}: HeadingTypographyProps) => {
	const _class = clsx(
		styles.headingTypographyDefault,
		typographyStyles.typographySize2
	)
	return (
		<div className={styles.headingContainer}>
			<Typography className={_class} {...rest}>
				{children}
			</Typography>
			{rightSlot}
		</div>
	)
}
