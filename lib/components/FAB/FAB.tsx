import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"
import styles from "./FAB.module.css"
import { Portal } from "lib/components/Portal/Portal"
import clsx from "clsx"
import { IconButton } from "lib/components/IconButton/IconButton"

interface IProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	onClick?: () => void
}

export const FAB: FC<IProps> = ({ children = "+", onClick, className }) => {
	const _class = clsx(styles.defaultFab, className)

	return (
		<Portal>
			<IconButton className={_class} onClick={onClick}>
				{children}
			</IconButton>
		</Portal>
	)
}
