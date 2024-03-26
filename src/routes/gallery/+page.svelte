<script>
	import gallery2 from '$lib/assets/gallery-2.jpg';
	import gallery3 from '$lib/assets/gallery-3.jpg';
	import gallery4 from '$lib/assets/gallery-4.jpg';
	import gallery5 from '$lib/assets/gallery-5.jpg';
	import gallery from '$lib/assets/gallery.jpg';

	const images = [gallery, gallery2, gallery3, gallery4, gallery5];
</script>

<section class="flex-col-center gap-6 sm:px-20 px-6">
	<h2 class="sm:text-5xl text-4xl font-semibold">Gallery</h2>

	<section class="grid sm:grid-cols-4 gap-10 px-6 py-8 max-h-[40rem] overflow-scroll">
		{#each images as image, index}
			<img
				src={image}
				alt="image {index}"
				width="150"
				height="150"
				class="shadow-image rounded-lg"
			/>
		{/each}
	</section>
</section>
