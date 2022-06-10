import { Page, pages } from "@pages"

import { useRouter } from "next/router"

export const usePage = (): Page | undefined => {
	const { route } = useRouter()
	return pages.find((page) => page.href == route)
}
