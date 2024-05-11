import { DetailedHTMLProps, FC, useState } from "react"
import styles from "./Popup.module.css"
import clsx from "clsx"

interface PopupProps
	extends DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	listItems?: React.ReactNode[]
	position?: "left" | "right"
}

export const Popup: FC<PopupProps> = ({
	listItems,
	position = "right",
	className,
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const _class = clsx(styles.defaultPopupElements, className, {
		[styles.positionLeft]: position === "left",
		[styles.positionRight]: position === "right",
	})

	const onPopupButtonClick = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<div className={styles.popupContainer}>
			<div onClick={onPopupButtonClick} className={styles.popupButton}>
				{children}
			</div>
			{isOpen && (
				<div className={_class}>
					{listItems?.map((ell) => {
						return <div className={styles.popupElement}>{ell}</div>
					})}
				</div>
			)}
		</div>
	)
}
