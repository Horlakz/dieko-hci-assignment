<script>
	import EducationIcon from '$lib/icons/EducationIcon.svelte';
	import EnvelopeIcon from '$lib/icons/EnvelopeIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import WhatsappIcon from '$lib/icons/WhatsappIcon.svelte';

	const details = [
		{
			icon: EnvelopeIcon,
			value: 'diekoloreoluwadavid@gmail.com'
		},
		{
			icon: WhatsappIcon,
			value: '+234 813 4909 239'
		},
		{
			icon: InstagramIcon,
			value: 'diekoloreoluuwa'
		},
		{
			icon: EducationIcon,
			value: 'EES/20/21/0202'
		}
	];
</script>

<div class="w-full h-full flex-center">
	<section
		class="shadow-text rounded-tr-3xl rounded-bl-3xl border border-black sm:p-6 p-4 sm:mx-16 mx-4 text-center"
	>
		<h1 class="uppercase sm:text-5xl text-2xl font-bold mb-6">contact me</h1>
		<ul>
			{#each details as item}
				<li class="flex items-center gap-4">
					<svelte:component this={item.icon} color={'#000'} />
					<span>{item.value} </span>
				</li>
			{/each}
		</ul>
	</section>
</div>
