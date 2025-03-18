<script lang="ts">
	import EdgeFinish from './EdgeFinish.svelte';

	interface Props {
		/**
		 * @summary Insert Tailwind classes
		 * @description If you insert this, you override the default values.
		 * @default 'bg-cover bg-center bg-no-repeat'
		 */
		class?: string;
		/**
		 * Should insert image(svg, png, etc...)
		 * You can create finishes in: https://getwaves.io/
		 */
		topFinishes?: string[];
		/**
		 * Should insert image(svg, png, etc...)
		 * You can create finishes in: https://getwaves.io/
		 */
		bottomFinishes?: string[];
		/**
		 * It inserts `url(${backgroundImage})` in the background-image style
		 */
		backgroundImage?: string;
		backgroundColor?: string;
		children?: () => any;
	}

	let { children, ...props }: Props = $props();
	const defaultClass = 'bg-cover bg-center bg-no-repeat';
</script>

<section
	class="relative {props.class ?? defaultClass}"
	style:background-image={props.backgroundImage ? `url(${props.backgroundImage})` : 'none'}
	style:background-color={props.backgroundColor}
>
	{#if props.topFinishes}
		<EdgeFinish finishes={props.topFinishes} position="top" />
	{/if}

	<div class="relative z-2">
		{@render children?.()}
	</div>

	{#if props.bottomFinishes}
		<EdgeFinish finishes={props.bottomFinishes} position="bottom" />
	{/if}
</section>

<style>
	section {
		position: relative;
	}
</style>
