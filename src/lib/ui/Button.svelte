<button
	class="shadow-text border-black border px-4 py-2 font-light uppercase hover:bg-gray-200 hover:text-gray-800 active:scale-90 default-transition"
	on:click
>
	<slot />
</button>

<style>
	.shadow-text:active {
		box-shadow: 10px 8px 0px 2px rgba(0, 0, 0, 1);
		-webkit-box-shadow: 10px 8px 0px 2px rgba(0, 0, 0, 1);
		-moz-box-shadow: 10px 8px 0px 2px rgba(0, 0, 0, 1);
	}
</style>
