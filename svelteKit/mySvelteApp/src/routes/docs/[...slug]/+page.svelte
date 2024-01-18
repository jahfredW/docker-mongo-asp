<script>
    // récupération de toutes les routes
    // spread opérator dans nom de dossier sert à récupérer sous forme de chaine de caractères tout ce qui
    // se trouve dans l'urk après docs/ 
    import { page } from '$app/stores'
    console.log($page.params.slug)
    // Récupération des éléments de l'url sous forme de chaine de caractère
    const slugArray = $page.params.slug.split('/')

    // autre utilité : filtrer dans l'url : 
    // houses/10/1000 : récupérer les entités house de l'id 10 à l'id 1000 
</script>

<h1>Doc home page</h1>
{#if slugArray.length === 1}
<h1>View docs for feature { slugArray[0] }</h1>
{:else if slugArray.length === 2}
<h1>View docs for feature { slugArray[0] } and concept { slugArray[1] }</h1>
{/if}