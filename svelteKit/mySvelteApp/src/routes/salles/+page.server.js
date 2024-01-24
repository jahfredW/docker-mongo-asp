// ici on charge les données sérialisables ( réponse API, json data, date, map, set)
import { PUBLIC_PORT } from '$env/static/public'
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

export const load = async (serverLoadEvent) => {
    try {
        console.log('Load function called in page.serve.js')
        const { fetch } = serverLoadEvent;
       
        // ici on tape dans la  route api du front, mais possibilté de taper directement dans le backend
        let data = await fetch(`https://localhost:${ PUBLIC_PORT }/api/salles`) ;
        const salles = await data.json();
        console.log(salles);

        // récupération de la liste des noms de salles et mapping 
        const sallesMap = salles.map( (salle) => {
            return {
                nom : salle.nom || null,
                numero : salle.adresse.numero || null ,
                ville : salle.adresse.ville || null,
                voie : salle.adresse.voie || null,
                codePostal : salle.adresse.codePostal || null
            }
        })

       
        return {  sallesMap }
    } catch (error) {
        console.log(error);
    }

} 