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

	<section class="grid sm:grid-cols-4 gap-6 px-6 py-8">
		{#each images as image, index}
			<img
				src={image}
				alt="image {index}"
				width="130"
				height="130"
				class="shadow-image rounded-lg"
			/>
		{/each}
	</section>
</section>

<style>
	.shadow-image {
		box-shadow: 10px 8px 0px 2px rgba(0, 0, 0, 1);
		-webkit-box-shadow: 10px 8px 0px 2px rgba(0, 0, 0, 1);
		-moz-box-shadow: 10px 8px 0px 2px rgba(0, 0, 0, 1);
	}
</style>
