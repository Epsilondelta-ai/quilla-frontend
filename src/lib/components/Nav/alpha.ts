interface Props {
	scrollY: number;
	from: number;
	to: number;
	limit: number;
}

export function calculateAlpha({ scrollY, from, to, limit }: Props): number {
	return Math.min(Math.max(scrollY / limit, from), to);
}
