import clsx from "clsx"
import { HeadingTypography } from "lib/components/Typography/HeadingTypography/HeadingTypography"
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react"
import styles from "./Typography.module.css"

interface TypographyProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Typography = ({
	children,
	size,
	className,
	...rest
}: TypographyProps) => {
	const _class = clsx(styles.typographyDefault, className, {
		[styles.typographySize1]: size === "h1",
		[styles.typographySize2]: size === "h2",
		[styles.typographySize3]: size === "h3",
		[styles.typographySize4]: size === "h4",
		[styles.typographySize5]: size === "h5",
		[styles.typographySize6]: size === "h6",
	})
	return (
		<span className={_class} {...rest}>
			{children}
		</span>
	)
}

Typography.Heading = HeadingTypography
