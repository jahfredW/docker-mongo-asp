<script>
    import { page } from '$app/stores';
    import Leaflet from '$lib/leaflet.svelte';
    export let data;

    const salles = data.sallesMap;
    console.log(salles);
    const Component = data.Component;
    // const Leaflet = data.Leaflet;

//     onMount(() => {
//     // Code à exécuter lorsque le composant est monté dans le DOM
//     if (Leaflet && salles) {
//       // Initialiser la carte Leaflet
//       map = new Leaflet(initialView, { zoom: 13 });

//       // Ajouter des marqueurs ou des couches en fonction de vos besoins
//       salles.forEach(salle => {
//         // Exemple d'ajout de marqueurs, vous devrez adapter cela en fonction de votre structure de données
//         const marker = Leaflet.marker([salle.lat, salle.lng]).addTo(map);
//         marker.bindPopup(salle.name);
//       });
//     }
//   });

const initialView = [51.514244, 7.468429]
   
</script>

<!-- <p>{ $page.data.notificatione }</p> -->
<!-- {#if salles}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-5">
  {#each salles as salle}
  <Component { salle }/>
{/each}
</div> -->


<div class="w-full h-screen">
  <Leaflet view={initialView} zoom={14}/>
</div>

<!-- 
{/if}   -->