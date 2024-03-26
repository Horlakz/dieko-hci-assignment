<script lang="ts">
	import { goto } from '$app/navigation';
	import passport from '$lib/assets/passport.jpg';
	import Button from '$lib/ui/Button.svelte';
</script>

<section class="h-full flex-center flex-col gap-16">
	<div class="flex items-center flex-col sm:gap-16 gap-12">
		<img
			src={passport}
			alt="diekoloreloluwa idowu"
			width="250"
			height="250"
			class="shadow-image rounded-lg"
		/>

		<div class="uppercase flex-col-center sm:gap-4 gap-2">
			<h3 class="font-bold sm:text-4xl text-lg">idowu david diekoloreloluwa</h3>
			<p class="font-light text-gray-800 sm:text-4xl text-xl">EES/20/21/0202</p>
			<p class="text-sm text-center font-medium lowercase">
				<span class="capitalize">This</span> website is created to explain what I've learnt in
				<span class="capitalize">HCI</span> as to conclusion to my CMP 423 assignment.
			</p>
			<div class="flex-center gap-8">
				<Button on:click={() => goto('/about')}>about me</Button>
				<Button on:click={() => goto('/contact')}>Project Overview</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.shadow-image {
		box-shadow: 14px 12px 0px 2px rgba(0, 0, 0, 1);
		-webkit-box-shadow: 14px 12px 0px 2px rgba(0, 0, 0, 1);
		-moz-box-shadow: 14px 12px 0px 2px rgba(0, 0, 0, 1);
	}
</style>
