<script >
	import { onMount, onDestroy, setContext, createEventDispatcher, tick } from 'svelte';
	import L from 'leaflet';
	import 'leaflet/dist/leaflet.css';

	export let bounds = undefined;
	export let view  = undefined;
	export let zoom = undefined;

    console.log("bounds: " + bounds)
    console.log("view: " + view)
    console.log("zoom: " + zoom)

    // permet de dispatcher des évènements = les propager dans d'autres composants 
	const dispatch = createEventDispatcher();

	let map;
	let mapElement;

    // Montage du composant 
	onMount(() => {
		if (!bounds && (!view || !zoom)) {
			throw new Error('Must set either bounds, or view and zoom.');
		}

        // map prend l'élément html mapElement en param, après avoir été monté. 
		map = L.map(mapElement)
			// example to expose map events to parent components:
            // on : ajoute un gestionnaire d'evt pour zoom, si zoom alors fonction fléchée appelée, 
            // envoie un évènement personnalisé nommé 'zoom' avec l'objet evt e
			.on('zoom', (e) => dispatch('zoom', e))

            // ajoute un gestionnaire d'evt pour popupouverte. 
			.on('popupopen', async (e) => {
				await tick();
				e.popup.update();
			});

        // ajout du layer à la map
		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`
		}).addTo(map);
	});

	onDestroy(() => {
		map?.remove();
		map = undefined;
	});

    // définition d'un contexte interne au composant, clé 'map';
	setContext('map', {
		getMap: () => map
	});

    // -> défini un contexte : met à disposition un objet avec une fonction getMap, qui renvoie LA VARIABLE MAP du composant. 

    // récupération : 
    /**
     * import { getContext } from 'svelte';
     * 
     * const { getMap } = getContext('map');
     * const map = getMap()
    */

    // $ -> watcher réagi au changement d'état des variables à l'intérieur  
    // permet uen mise à jour automatique.  
	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		} else if (view && zoom) {
			map.setView(view, zoom);
		}
	}
</script>

<div class="w-full mt-10 md:mx-0 customh" bind:this={mapElement}>
	{#if map}
		<slot />
	{/if}
</div>

<style>

.customh {
    height: 400px;
}
</style>