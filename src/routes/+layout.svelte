<script lang="ts">
	import '../styles/global.scss';
	import MobileNavbar from './MobileNavbar.svelte';
	import Navbar from './Navbar.svelte';

	// export let data: LayoutData;
</script>

<svelte:head>
	<title>HCM Assignment</title>
</svelte:head>

<main class="relative w-screen h-screen overflow-hidden flex sm:flex-row flex-col">
	<div class="hidden sm:block w-[5%]">
		<Navbar />
	</div>
	<div class="sm:hidden block absolute bottom-6 left-1/2 -translate-x-1/2">
		<MobileNavbar />
	</div>
	<div class="w-full sm:p-10 p-6">
		<slot />
	</div>
</main>
