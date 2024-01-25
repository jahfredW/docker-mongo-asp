<script>
	import { onMount, onDestroy, getContext } from 'svelte';
	import L from 'leaflet';

	let popup;
	let popupElement;

	let open = false;

	const { getLayer } = getContext('layer');
	const layer = getLayer();

	onMount(() => {
		popup = L.popup().setContent(popupElement);

		if (layer) {
			layer.bindPopup(popup);
			layer.on('popupopen', () => (open = true));
			layer.on('popupclose', () => (open = false));
		}
	});

	onDestroy(() => {
		layer?.unbindPopup();
		popup?.remove();
		popup = undefined;
	});
</script>

<div bind:this={popupElement}>
	{#if open}
		<slot />
	{/if}
</div>