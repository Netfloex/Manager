import { BsImages } from "react-icons/bs"
import { IconType } from "react-icons/lib"
import { VscMultipleWindows } from "react-icons/vsc"

export interface Page {
	name: string
	href: string
	icon: IconType
}

export const pages: Page[] = [
	{
		name: "Containers",
		href: "/containers",
		icon: VscMultipleWindows,
	},
	{
		name: "Images",
		href: "/images",
		icon: BsImages,
	},
]
