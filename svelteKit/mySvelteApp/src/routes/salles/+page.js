// import { getAllSalles } from '../api/salles/+server'
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

export const ssr = false;

// import Leaflet from '$lib/leaflet.svelte'

// Ici on charge les objets non sérialisables, constructeurs et classes des composants.
// les datas sont récupérées via les page.server.js avec le params data.
/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	try {
		let data = await fetch('/api/salles');
		const salles = await data.json();
		return {
			salles: salles
			// Component : Leaflet,
			// Leaflet : Leaflet,
		};
	} catch (error) {
		console.log(error);
	}
};
