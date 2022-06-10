export const cx = (classNames: (string | false)[]): string =>
	classNames.filter(Boolean).join(" ")
