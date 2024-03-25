<script>
	import { goto } from '$app/navigation';
	import { navmenu } from './navmenu';
</script>

<nav class="flex-center h-full w-full bg-black text-white px-8 py-2 rounded-full">
	<ul class="flex-center gap-4">
		{#each navmenu as item}
			<li>
				<button class="cursor-pointer" on:click={() => goto(item.href)} aria-label={item.alt}>
					<svelte:component this={item.icon} />
				</button>
			</li>
		{/each}
	</ul>
</nav>
