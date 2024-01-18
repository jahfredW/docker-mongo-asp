<script>
    import { page } from '$app/stores'
    const { productId } = $page.params
    console.log(productId)
    let totalProducts = 5;
</script>


<a href="/">Home</a>

<h1>Product List</h1>
{#each Array(totalProducts) as _, index (index)}
<h2><a  href={`/products/${index}`}>Produit : { index }</a></h2>
{/each}