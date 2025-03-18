type direction = 'top' | 'bottom' | 'left' | 'right';

/**
 * @example
 * // use: <div use:fadeInAction />
 * const fadeInAction: Action = (node: HTMLElement) => {
 * 	 if (!props.scrollFadeIn) return;
 *
 * 	 node.style.transition = '0.5s';
 *
 * 	 $effect(() => {
 * 	 	const handleScroll = () => fadeIn(node, 'bottom');
 * 	 	handleScroll();
 *
 * 	 	window.addEventListener('scroll', handleScroll);
 *
 * 	 	return () => window.removeEventListener('scroll', handleScroll);
 * 	 });
 * };
 */
export function fadeIn(element: HTMLElement, from: direction = 'top', offset: string = '-2rem') {
	if (window.scrollY + window.innerHeight - element.offsetTop - 100 < 0) {
		element.style.opacity = '0';
		element.style[from] = offset;
		return;
	}

	element.style.opacity = '1';
	element.style[from] = '0';
}
