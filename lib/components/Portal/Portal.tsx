import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"

export const Portal: FC<any> = ({ children }: { children: ReactNode }) => {
	return <div>{createPortal(children, document.body)}</div>
}
