<script lang="ts">
	import { marked } from 'marked';

	// Configure marked options
	marked.setOptions({
		breaks: true // Enable line breaks
	});

	interface Props {
		content: string;
		direction: 'left' | 'right';
	}

	let { content, direction }: Props = $props();
</script>

<div class="my-2 flex {direction === 'left' ? 'self-start' : 'self-end'}">
	<div
		class={`markdown-body relative flex max-w-xs flex-col rounded-lg p-2 text-sm leading-relaxed break-all ${
			direction === 'left'
				? 'self-start !bg-gray-200 !text-gray-800'
				: 'self-end !bg-blue-500 !text-white'
		}`}
	>
		{@html marked(content)}
		<div
			class={`absolute h-0 w-0 border-solid ${
				direction === 'left'
					? 'top-2.5 left-[-10px] border-t-[10px] border-r-[10px] border-b-[10px] border-l-0 border-transparent border-r-gray-200'
					: 'top-2.5 right-[-10px] border-t-[10px] border-r-0 border-b-[10px] border-l-[10px] border-transparent border-l-blue-500'
			}`}
		></div>
	</div>
</div>
