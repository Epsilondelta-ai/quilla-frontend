<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPaperclip, faArrowUp } from '@fortawesome/free-solid-svg-icons';

	interface Props {
		message: string;
		onSendMessage: (message: string, files: File[]) => void;
	}

	let { message = '', onSendMessage }: Props = $props();
	let files: File[] = $state([]);

	function handleFileUpload(event: any) {
		const uploadedFile = event.target.files[0];

		if (uploadedFile) {
			files.push(uploadedFile);
			event.target.value = ''; // Clear the file input
		}
	}

	function sendMessage() {
		onSendMessage(message, files);
		message = '';
	}
</script>

<div class="flex items-center gap-2 rounded border border-gray-300 px-2 py-1">
	<label class="cursor-pointer rounded-full bg-gray-200 p-2 hover:bg-gray-300">
		<input type="file" accept="*" class="hidden" onchange={handleFileUpload} />
		<Fa icon={faPaperclip} class="text-gray-500 hover:text-gray-700" />
	</label>

	<!-- Chat Input -->
	<div class="flex flex-1 flex-col px-2 py-1">
		<textarea
			bind:value={message}
			placeholder="Type your message..."
			class="w-full resize-none overflow-hidden border-none focus:outline-none"
			rows="1"
		></textarea>
		<!-- File Upload Preview -->
		{#if files.length > 0}
			<div class="mt-2 flex flex-row gap-4 rounded border border-gray-300 bg-gray-50 p-2">
				{#each files as file, index}
					<div class="flex items-center gap-2 rounded border border-gray-200 bg-gray-100 p-2">
						{#if file.type.startsWith('image/')}
							<img src={URL.createObjectURL(file)} alt="" class="h-auto max-w-[100px] rounded" />
						{:else}
							<p class="text-sm text-gray-600">{file.name}</p>
						{/if}
						<button
							class="ml-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700"
							onclick={() => files.splice(index, 1)}
						>
							x
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Send Button -->
	<button
		onclick={sendMessage}
		class="rounded-full bg-green-500 p-2 text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
		disabled={!message.trim()}
	>
		<Fa icon={faArrowUp} />
	</button>
</div>
