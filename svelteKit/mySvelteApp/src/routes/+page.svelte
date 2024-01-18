<script>    
    // goto est un module qui permet de faire de la navigation programatique = dans le js 
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'
    const handleClick = () => {
        console.log("it's working")
        // repalceState : remplacement de l'état actuel de navigation 
        // goto('/products', { replaceState : true})
        goto('/products')
    }

    // beforeNavigation et after : prennent des fonctions de callback aevc un param de navigation 
    // permet notamment de déterminer les routes d'où l'on vient et celles où l'on va : détails de naviagtion 
    beforeNavigate( (navigation ) => {
        console.log({ before: navigation})
    }) 

    afterNavigate( () => {
        console.log({after: navigation})
    })
</script>

<h1>Welcome home!</h1>


<a href="/blog">Blog</a>
<a href="/products">Products</a>

<!-- on: permet de binder des actions que le html  -->
<button on:click={handleClick}>Place order</button>

