import { DetailedHTMLProps, FC, useState } from "react"
import styles from "./Popup.module.css"

interface PopupProps
	extends DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	listItems?: React.ReactNode[]
}

export const Popup: FC<PopupProps> = ({ listItems, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const onPopupButtonClick = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<div className={styles.popupContainer}>
			<div onClick={onPopupButtonClick} className={styles.popupButton}>
				{children}
			</div>
			{isOpen && (
				<div className={styles.popupElements}>
					{listItems?.map((ell) => {
						return <div className={styles.popupElement}>{ell}</div>
					})}
				</div>
			)}
		</div>
	)
}
