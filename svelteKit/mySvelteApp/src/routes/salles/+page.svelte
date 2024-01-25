<script>
    import SvgIcon from '@jamescoyle/svelte-icon';
    import { page } from '$app/stores';
    import Leaflet from '$lib/leaflet.svelte';
    import Card from '$lib/card.svelte';
    import Marker from '$lib/marker.svelte';
    import { mdiSkull } from '@mdi/js';
    
    export let data;
    
    // récupération des salles 
    const salles = data.salles;

    // récupération des coords 
    const coords = data.salles.map((salle) => {
      return salle.coords
    });

    // centrage intial de la super map ..... 
    const initialView = [51.049999,2.36667]
   
</script>
<!-- PARTIE CARD ************************************************************************************************* -->

{#if salles}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-5">
  {#each salles as salle}
  <Card { salle }/>
{/each}
</div>
{/if}
<!-- PARTIE MAP *************************************************************************************************** -->

<div class="w-1/2 mx-auto my-10">
  <!-- passage des props dans le composant LeafLeat -->
  <Leaflet view={initialView} zoom={13}>
    {#each coords as latLng}
      <Marker { latLng } width={ 40 } height={ 40 } >
      <!-- Icon tête de mort -->
      <SvgIcon type="mdi" path={ mdiSkull } size="30"></SvgIcon></Marker>
    {/each}
  </Leaflet>
</div>






