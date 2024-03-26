<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import passport from '$lib/assets/passport.jpg';
	import Button from '$lib/ui/Button.svelte';

	const name = 'idowu david diekoloreloluwa';
	const matricNo = 'EES/20/21/0202';

	const speed = 60;

	let innerName = '';
	let innerMatricNo = '';

	onMount(() => {
		let i = 0;
		let j = 0;

		const nameInterval = setInterval(() => {
			if (i < name.length) {
				innerName += name.charAt(i);
				i++;
			} else {
				clearInterval(nameInterval);

				// Start matricNoInterval after nameInterval is complete
				const matricNoInterval = setInterval(() => {
					if (j < matricNo.length) {
						innerMatricNo += matricNo.charAt(j);
						j++;
					} else {
						clearInterval(matricNoInterval);
					}
				}, speed);
			}
		}, speed);
	});
</script>

<section class="h-full flex-center flex-col gap-16">
	<div class="flex items-center flex-col sm:gap-16 gap-12">
		<img
			src={passport}
			alt={name}
			width="250"
			height="250"
			class="shadow-image rounded-lg swipe-in"
		/>

		<div class="uppercase flex-col-center sm:gap-4 gap-2">
			<h3 class="font-bold sm:text-4xl text-lg">{innerName}</h3>
			<p class="font-light text-gray-800 sm:text-4xl text-xl">{innerMatricNo}</p>
			<p class="text-sm text-center font-medium lowercase drop-button">
				<span class="capitalize">This</span> website is created to explain what I've learnt in
				<span class="capitalize">HCI</span> as to conclusion to my CMP 423 assignment.
			</p>
			<div class="flex-center gap-8">
				<div class="drop-button">
					<Button on:click={() => goto('/about')}>about me</Button>
				</div>
				<div class="drop-button">
					<Button on:click={() => goto('/about-hci')}>Project Overview</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.shadow-image {
		box-shadow: 14px 12px 0px 2px rgba(0, 0, 0, 1);
		-webkit-box-shadow: 14px 12px 0px 2px rgba(0, 0, 0, 1);
		-moz-box-shadow: 14px 12px 0px 2px rgba(0, 0, 0, 1);
	}

	// create animation to drop the buttons and swipe the image in
	.drop-button {
		animation: drop 1s ease-in-out forwards;
		animation-delay: 2.5s;
		opacity: 0; // make the button initially transparent
	}

	@keyframes drop {
		0% {
			transform: translateY(-100%);
			opacity: 0; // start the animation with the button being transparent
		}
		100% {
			transform: translateY(0);
			opacity: 1; // end the animation with the button being fully visible
		}
	}

	.swipe-in {
		animation: swipe 1s ease-in-out forwards;
		animation-delay: 3s;
		opacity: 0;
	}

	@keyframes swipe {
		0% {
			transform: translateX(-100%);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>
