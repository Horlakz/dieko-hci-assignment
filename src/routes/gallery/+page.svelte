<script lang="ts">
	import gallery1 from '$lib/assets/gallery-1.jpg';
	import gallery10 from '$lib/assets/gallery-10.jpg';
	import gallery11 from '$lib/assets/gallery-11.jpg';
	import gallery2 from '$lib/assets/gallery-2.jpg';
	import gallery3 from '$lib/assets/gallery-3.jpg';
	import gallery4 from '$lib/assets/gallery-4.jpg';
	import gallery5 from '$lib/assets/gallery-5.jpg';
	import gallery6 from '$lib/assets/gallery-6.jpg';
	import gallery7 from '$lib/assets/gallery-7.jpg';
	import gallery8 from '$lib/assets/gallery-8.jpg';
	import gallery9 from '$lib/assets/gallery-9.jpg';

	const images = [
		gallery1,
		gallery2,
		gallery3,
		gallery4,
		gallery5,
		gallery6,
		gallery7,
		gallery8,
		gallery9,
		gallery10,
		gallery11
	];
</script>

<section class="flex-col-center gap-4 sm:px-20 px-6">
	<h2 class="sm:text-5xl text-4xl font-semibold">Gallery</h2>

	<section class="grid sm:grid-cols-3 sm:gap-12 gap-6 px-6 py-8">
		{#each images as image, index}
			<img src={image} alt="image {index}" class="shadow-image w-48 h-40 rounded-lg" />
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
