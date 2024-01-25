<script>
	import { onMount, onDestroy, getContext, setContext } from 'svelte';
	import L from 'leaflet';

	export let width;
	export let height;
	export let latLng;


	let marker;
	let markerElement;

    // récupération de la prop map dans le composant leaflet.svelte 
	const { getMap } = getContext('map');

	const map = getMap();

    // récupération du marker ( context )
	setContext('layer', {
		// L.Marker inherits from L.Layer
		getLayer: () => marker
	});

    // montage du marker 
	onMount(() => {
		if (map) {
			let icon = L.divIcon({
				html: markerElement,
				className: 'map-marker',
				iconSize: L.point(width, height)
			});
			marker = L.marker(latLng, { icon }).addTo(map);
		}
	});

    // destruction 
	onDestroy(() => {
		marker?.remove();
		marker = undefined;
	});
</script>

<div bind:this={markerElement}>
	{#if marker}
		<slot />
	{/if}
</div>