<script>    
    // goto est un module qui permet de faire de la navigation programatique = dans le js 
    import SvgIcon from '@jamescoyle/svelte-icon';
    import { mdiSkull } from '@mdi/js';
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'
    const handleClick = () => {
        console.log("it's working")
        // repalceState : remplacement de l'état actuel de navigation 
        // goto('/products', { replaceState : true})
        goto('/salles')
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
<div class="h-screen flex flex-col justify-center" on:click={handleClick}>
    <div class="flex justify-center">
        <SvgIcon type="mdi" path={ mdiSkull } size="30"></SvgIcon>
    </div>
    <h1 class="text-2xl text-center font-bold">Welcome To salle!</h1>
    <h2 class="text-2xl text-center ">Pour faire du sale</h2>
    <h2 class="text-2xl text-center ">Avec Jean LASSALE</h2>
</div>





