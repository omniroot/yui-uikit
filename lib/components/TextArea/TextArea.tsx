import clsx from "clsx"
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react"
import styles from "./TextArea.module.css"
interface IProps
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	onChangeCallback?: (text: string) => void
	// onSubmitCallback?: (text: string) => void
	symbolCount?: boolean
}

export const TextArea: FC<IProps> = ({
	onChangeCallback,
	// onSubmitCallback,
	symbolCount = true,
	placeholder = "Placeholder",
	children,
	className,
	...rest
}) => {
	const _class = clsx(styles.defaultTextArea, className)
	return (
		<textarea className={_class} placeholder={placeholder} {...rest}>
			{children}
		</textarea>
	)
}
