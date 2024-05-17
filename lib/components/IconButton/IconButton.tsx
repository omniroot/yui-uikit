import clsx from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"
import styles from "./IconButton.module.css"
import { Button } from "lib/components/Button"

interface IconButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

export const IconButton: FC<IconButtonProps> = ({ children, ...rest }) => {
	const _class = clsx(styles.defaultIconButton)
	return (
		<Button className={_class} variant="outline" {...rest}>
			{children}
		</Button>
	)
}
