import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from "react"
import styles from "./Checkbox.module.css"
import clsx from "clsx"
interface IProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	defaultIsChecked?: boolean
	onChangeCallback?: () => void
}

import CheckIcon from "./check.svg?react"

export const Checkbox: FC<IProps> = ({
	defaultIsChecked = false,
	onChangeCallback,
	children,
	className,
}) => {
	const [isChecked, setIsChecked] = useState(defaultIsChecked)
	const _class = clsx(styles.defaultCheckbox, className, {
		[styles.defaultCheckboxChecked]: isChecked,
	})

	const onCheckboxChangeHandler = () => {
		setIsChecked((prev) => !prev)
		if (onChangeCallback) {
			onChangeCallback()
		}
	}

	return (
		<label className={styles.checkboxContainer}>
			<input
				type="checkbox"
				className={styles.htmlCheckbox}
				checked={isChecked}
				onChange={onCheckboxChangeHandler}
			/>
			<span className={_class}>
				<CheckIcon />
			</span>
			{children}
		</label>
	)
}
