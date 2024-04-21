import clsx from "clsx"
import { FC, useState } from "react"
import styles from "./ColorPicker.module.css"
import { Input } from "lib/components/Input/Input"
import { Typography } from "lib/components/Typography/Typography"
import { Portal } from "lib/components/Portal/Portal"

interface ColorPickerProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	defaultColor?: string
}

export const ColorPicker: FC<ColorPickerProps> = ({
	defaultColor = "#8884FF",
	className,
}) => {
	const [color, setColor] = useState(defaultColor)
	const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)

	const _class = clsx(styles.defaultColorPicker, className)

	const toggleColorPickerOpened = () => {
		setIsColorPickerOpen((prev) => !prev)
	}

	const onInputHexColorChange = (value: string) => {
		setColor(value)
	}
	return (
		<>
			<span
				className={styles.defaultPreviewColorPicker}
				style={{ backgroundColor: color }}
				onClick={toggleColorPickerOpened}
			></span>
			{isColorPickerOpen && (
				<Portal>
					<div className={_class}>
						<div
							className={styles.previewColor}
							style={{ backgroundColor: color }}
						>
							<Typography size="h2">{color}</Typography>
						</div>
						{/* <div className={styles.colorsPalette}>
              <div></div>
            </div> */}
						<Input
							placeholder={defaultColor}
							defaultValue={defaultColor}
							symbolCount={false}
							onChangeCallback={onInputHexColorChange}
						/>
					</div>
				</Portal>
			)}
		</>
	)
}
