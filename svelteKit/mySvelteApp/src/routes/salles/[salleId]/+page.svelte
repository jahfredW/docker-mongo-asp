<script>
    import Card from '$lib/card.svelte';
    export let data;
    // const salles = data.sallesJson;
    // console.log(salles);
    const salle = data.salles;
    // const Component = data.Component;
    console.log(salle);
    // console.log(Component);
    let test;
  
</script>


{#if salle}
<div class="w-1/2 mx-auto my-5">
    <Card { salle }/>
</div>


{/if}  

<!-- <select bind:value={ salleName }>
  <option value="">Nom de la salle ? </option>
  {#each sallesJson as salle}
  <option value={ salle }>{ salle }</option>
  {/each}
</select>  -->