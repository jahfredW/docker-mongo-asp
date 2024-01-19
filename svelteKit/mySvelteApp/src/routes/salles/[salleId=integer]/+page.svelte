<script>
    import { page } from '$app/stores';
	import { onMount } from 'svelte'
    import { getSalleById } from '../../api/salles/+server';
    const { salleId } = $page.params;
    console.log(salleId); 
    
    let response; 
    onMount( async () => {
        try {
            console.log(salleId);
            response = await getSalleById(salleId)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    })
</script>

{#if response}
<h2>{response}</h2>
{/if}

