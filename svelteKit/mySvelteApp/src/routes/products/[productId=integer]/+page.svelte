<script>
    // importer le module page du store, permet de récupérer l'id dynamique du nom de dossier
    // correspond également au paramètre dans l'url 
    import { page } from '$app/stores'

    // récupération de l'id
    const productId = $page.params.productId
</script>

<!-- injection de l'id dans le template  -->
<h1>Details about product { productId }</h1>

<!-- sélectionner dynamiquement un review entre 1 et 10  -->

{ #each Array(10) as _, index (index) }
    <h2><a href={`/products/${productId}/reviews/${index}`}>Review numéro : { index }</a></h2>
{/each}