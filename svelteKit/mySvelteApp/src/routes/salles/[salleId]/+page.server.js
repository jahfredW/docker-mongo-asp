// import { getAllSalles } from '../api/salles/+server'
// import Card from '$lib/card.svelte'
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
/** @type {import('./$types').PageLoad} */
export const load = async ({fetch, params}) => {
    try {
        // ici on tape dans la  route api du front, mais possibilté de taper directement dans le backend
        let data = await fetch(`/api/salles/${params.salleId}`) ;

        // console.log(salles);
        const salle = await data.json();
        // console.log(sallesJson);

        // récupération de la liste des noms de salles
        // const sallesNameList = sallesJson.map( (salle) => {
        //     return salle.nom;
        // })

        return {  
            salles : salle,
            // Component : Card
         }
    } catch (error) {
        console.log(error);
    }

} 
