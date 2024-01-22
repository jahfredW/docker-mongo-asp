<script>
    import { onMount } from 'svelte'

    import  Card  from "$lib/card.svelte";
    export let data;
    // const salles = data.sallesJson;
    // console.log(salles);
    let salleName = '';
    const { sallesNameList } = data;
    console.log(data);
    // let data;
    // onMount(async() => {
    //     try {
    //         data = await getAllSalles();
    //     } catch (error) {
    //         console.log(error)
    //     }

    // })
</script>



<!-- <div class="grid grid-cols-3 gap-4" >
  { #each salles as salle}
  <div class=" w-full">
    { salle.nom}
  </div>

  { /each }
</div>  -->



<!-- <Card>
{#if data}
  {#each data as salle (salle.id)}
    <p>{salle.nom}</p>
  {/each}
{/if}
</Card> -->
<select bind:value={ salleName }>
  <option value="">Nom de la salle ? </option>
  {#each sallesNameList as salle}
  <option value={ salle }>{ salle }</option>
  {/each}
</select>