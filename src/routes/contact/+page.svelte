<script>
	import EnvelopeIcon from '$lib/icons/EnvelopeIcon.svelte';
	import PhoneIcon from '$lib/icons/PhoneIcon.svelte';
</script>

<div class="w-full h-full flex-center">
	<section
		class="shadow-text rounded-tr-3xl rounded-bl-3xl border border-black sm:p-6 p-4 sm:mx-16 mx-6 max-h-[40rem] overflow-scroll text-center"
	>
		<h1 class="uppercase sm:text-5xl text-2xl font-bold mb-6">contact me</h1>
		<ul>
			<li class="flex items-center gap-4">
				<EnvelopeIcon color="#000" /><span>johndoe@gmail.com</span>
			</li>
			<li class="flex items-center gap-4"><PhoneIcon color="#000" /><span>+1 23 245 2312</span></li>
		</ul>
	</section>
</div>
