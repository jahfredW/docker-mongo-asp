import  Card  from "$lib/card.svelte";

// import { getAllSalles } from '../api/salles/+server'
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0


// Ici on charge les objets non sérialisables, constructeurs et classes des composants. 
// les datas sont récupérées via les page.server.js avec le params data.  
/** @type {import('./$types').PageLoad} */
export const load = async (loadEvent) => {
    try {
        const {  data } = loadEvent;
       
        return {  
            ...data,
            Component : Card
         }
    } catch (error) {
        console.log(error);
    }

} 
