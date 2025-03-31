export function streamingResponse(
	response: Response,
	callback: (chunk: Uint8Array) => void,
	done?: () => void
): Response {
	const reader = response.body?.getReader();
	if (!reader) {
		throw new Error('Response body is not readable');
	}

	const stream = new ReadableStream<Uint8Array>({
		async pull(controller) {
			const { done: isDone, value } = await reader.read();

			if (isDone) {
				controller.close();

				if (done) {
					done();
				}

				return;
			}

			callback(value);
			controller.enqueue(value);
		}
	});

	return new Response(stream, {
		headers: { 'Content-Type': 'text/event-stream' }
	});
}
