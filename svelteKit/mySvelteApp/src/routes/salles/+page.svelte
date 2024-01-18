<script>
    import { onMount } from 'svelte'
    import { getAllSalles } from '../api/salles/+server'

    let data;
    onMount(async() => {
        try {
            data = await getAllSalles();
        } catch (error) {
            console.log(error)
        }

    })
</script>

{#if data}
  {#each data as salle (salle.id)}
    <p>{salle.nom}</p>
  {/each}
{/if}