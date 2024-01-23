<script>
    import { page } from '$app/stores';
    export let data;

    const salles = data.sallesMap;
    console.log(salles);
    const Component = data.Component;
   
</script>

<p>{ $page.data.notificatione }</p>
{#if salles}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-5">
  {#each salles as salle}
  <Component { salle }/>
{/each}
</div>

{/if}  

