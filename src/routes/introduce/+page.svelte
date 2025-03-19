<script>
	import Nav from '$lib/components/Nav';
	import Sector from '$lib/components/Sector';
	import SectorContainer from '$lib/components/Sector/SectorContainer.svelte';
</script>

<Nav
	backgroundColor="#313c59"
	backgroundAlphaScrollLimit={1000}
	backgroundAlphaFrom={0}
	backgroundAlphaTo={1}
	position="fixed"
	class="flex w-full flex-row justify-between p-[1.5rem] text-white"
>
	<h1 class="text-2xl font-bold">
		<a href="/introduce">Quilla</a>
	</h1>
	<ul class="flex flex-col gap-0 text-base font-bold md:flex-row md:gap-[1rem] lg:gap-[2rem]">
		<li>
			<a href="#home">Home</a>
		</li>
		<li>
			<a href="#about">About us</a>
		</li>
		<li>
			<a href="#service">Service</a>
		</li>
		<li>
			<a href="#pricing">Pricing</a>
		</li>
		<li>
			<a href="#contact">Contact</a>
		</li>
	</ul>
</Nav>

<Sector backgroundImage="/BG.webp" bottomFinishes={['/Wave.svg']}>
	<SectorContainer
		class="grid grid-cols-1 items-start gap-[2.5rem] pt-[8rem] sm:gap-[4.5rem] lg:grid-cols-2 lg:gap-[2rem] lg:pt-[12rem]"
	>
		<div class="h-full text-center text-xl leading-[1.6] text-white lg:text-left">
			<h2 class="mb-[1.5rem] text-6xl font-bold">
				Just Chat,<br />we organize notes
			</h2>
			<h4 class="text-2xl font-bold">No folders, No tags, No stress</h4>
			<p>
				Stop managing notes, start owning your time.<br />Our AI automatically organizes your
				thoughts, making them searchable and structured, and ultimately creating the perfect note.
			</p>
			<h3 class="text-3xl font-bold">Focus on What Truly Matters.</h3>
		</div>

		<div class="flex h-full justify-center lg:pb-[130px]">
			<img class="w-[90%] sm:w-[60%] lg:w-[100%] 2xl:w-[80%]" src="/landing_frame_ko.svg" alt="" />
		</div>
	</SectorContainer>
</Sector>
