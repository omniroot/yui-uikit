import LoaderIcon from "./loader.svg?react"
import styles from './Loader.module.css'
import {  FC } from "react"
import clsx from "clsx"


interface SpinerProps {
    variant?: "small" | "standart" | "fullscreen"
}
export const Loader: FC<SpinerProps> = ({variant}) => {
    const _class = clsx(styles.defaultSpiner, {
        [styles.smallSpiner]: variant === "small",
        [styles.standartSpiner]: variant === "standart",
        [styles.fullscreenSpiner]: variant === "fullscreen"
    }) 
    return (
        <LoaderIcon className={_class}/>
    )
}