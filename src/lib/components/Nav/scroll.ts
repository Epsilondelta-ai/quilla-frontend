interface Props {
	selector?: string;
	limit?: number;
}

export function scrollLimit({ selector, limit }: Props): number {
	if (selector) {
		const target = document.querySelector(selector) as HTMLElement;

		return target.offsetTop;
	}

	return limit!;
}
