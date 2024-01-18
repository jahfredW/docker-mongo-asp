<script>
    import { page } from '$app/stores'
    const greetings = {
        en : 'Hello!',
        es : 'Hola!',
        fr : 'Bonjour'
    }
    // const lang = $page.params.lang
    // plutôt utiliser la destructuration 

    console.log($page.params)
    // pour destructurer il faut que le param corresponde au nom de la clé. 

    // simple brackets : le param est dynamique
    // double brackets : le param est optionnel MAIS NECESSITE DE METTRE UNE VALEUR PAR DEFAUT 
    const { lang = "fr" } = $page.params
    console.log(lang)
    const greeting = greetings[lang]

</script>

<!-- { #if lang == 'en'}
<h1>{ greetings.en}</h1>
{:else if lang == 'es'}
<h1> { greetings.es}</h1>
{:else}
<h1> { greetings.fr }</h1>
{/if} -->

<h1>{ greeting }</h1>