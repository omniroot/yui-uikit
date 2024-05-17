import { DetailedHTMLProps, FC } from "react"
import styles from "./Header.module.css"
import clsx from "clsx"

interface HeaderProps
	extends DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	leftSlot?: React.ReactNode
	centerSlot?: React.ReactNode
	rightSlot?: React.ReactNode
}

export const Header: FC<HeaderProps> = ({
	leftSlot,
	centerSlot,
	rightSlot,
	className,
}) => {
	const _class = clsx(styles.defaultHeader, className)
	return (
		<div className={_class}>
			<div className={styles.leftSlot}>{leftSlot}</div>
			<div className={styles.centerSlot}>{centerSlot}</div>
			<div className={styles.rightSlot}>{rightSlot}</div>
		</div>
	)
}
