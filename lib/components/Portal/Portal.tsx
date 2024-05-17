import { ReactNode } from "react"
import { createPortal } from "react-dom"

export const Portal = ({ children }: { children: ReactNode }) => {
	return <div>{createPortal(children, document.body)}</div>
}
