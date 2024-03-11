import SpinnerIcon from "./spinner.svg?react"
import styles from './Spinner.module.css'
import {  FC } from "react"
import clsx from "clsx"


interface SpinerProps {
    variant?: "small" | "standart" | "fullscreen"
}
export const Spinner: FC<SpinerProps> = ({variant}) => {
    const _class = clsx(styles.defaultSpiner, {
        [styles.smallSpiner]: variant === "small",
        [styles.standartSpiner]: variant === "standart",
        [styles.fullscreenSpiner]: variant === "fullscreen"
    }) 
    return (
        <SpinnerIcon className={_class}/>
    )
}