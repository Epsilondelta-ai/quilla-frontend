<script lang="ts">
	import type { Action } from 'svelte/action';

	import { hexToRgb } from './hexToRgb';
	import { calculateAlpha } from './alpha';
	import { scrollLimit } from './scroll';

	interface Props {
		/**
		 * Tailwind classes
		 */
		class?: string;
		/**
		 * Style 'position' property
		 * @default 'sticky'
		 */
		position?: 'sticky' | 'fixed';
		/**
		 * Style 'top' property
		 * @default '0'
		 */
		top?: string;
		/**
		 * Style 'left' property
		 * @default '0'
		 */
		left?: string;
		/**
		 * Style 'right' property
		 * @default 'initial'
		 */
		right?: string;
		/**
		 * Style 'bottom' property
		 * @default 'initial'
		 */
		bottom?: string;
		/**
		 * Style 'z-index' property
		 * @default 10
		 */
		zIndex?: number;
		/**
		 * Style 'width' property
		 * @default '100%'
		 */
		width?: string;
		/**
		 * Background color
		 * @example '#ffffff'
		 */
		backgroundColor?: string;
		/**
		 * Background alpha from
		 * @default 0
		 */
		backgroundAlphaFrom?: number;
		/**
		 * Background alpha to
		 * @default 1
		 */
		backgroundAlphaTo?: number;
		/**
		 * Background alpha scroll limit
		 */
		backgroundAlphaScrollLimit?: number;
		/**
		 * Limit set target's offsetTop
		 */
		backgroundAlphaScrollTargetSelector?: string;
		children: any;
	}

	let {
		children,
		position = 'sticky',
		top = '0',
		left = '0',
		right = 'initial',
		bottom = 'initial',
		zIndex = 10,
		width = '100%',
		backgroundAlphaFrom = 0,
		backgroundAlphaTo = 1,
		...props
	}: Props = $props();

	const isStaticBackground =
		props.backgroundAlphaScrollTargetSelector === undefined &&
		props.backgroundAlphaScrollLimit === undefined;

	const backgroundAlpha: Action = (node) => {
		if (isStaticBackground) return;
		if (!props.backgroundColor) return;

		const limit = scrollLimit({
			limit: props.backgroundAlphaScrollLimit,
			selector: props.backgroundAlphaScrollTargetSelector
		});
		const { r, g, b } = hexToRgb(props.backgroundColor!);

		$effect(() => {
			function handleScroll() {
				const alpha = calculateAlpha({
					from: backgroundAlphaFrom,
					to: backgroundAlphaTo,
					limit,
					scrollY: window.scrollY
				});
				node.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
			}
			handleScroll();

			window.addEventListener('scroll', handleScroll);

			return () => window.removeEventListener('scroll', handleScroll);
		});
	};
</script>

<nav
	class={props.class}
	style="
    position: {position};
    top: {top};
    left: {left};
    right: {right};
    bottom: {bottom};
    z-index: {zIndex};
    width: {width};
    backdrop-filter: blur(30px);
    {isStaticBackground ? 'background-color: ' + props.backgroundColor + ';' : ''}
    background-blend-mode: lighten;
  "
	use:backgroundAlpha
>
	{@render children?.()}
</nav>
