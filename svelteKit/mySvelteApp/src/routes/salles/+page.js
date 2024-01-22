// import { getAllSalles } from '../api/salles/+server'
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
/** @type {import('./$types').PageLoad} */
export const load = async (loadEvent) => {
    try {
        const { fetch } = loadEvent;
        console.log();
        // ici on tape dans la  route api du front, mais possibilté de taper directement dans le backend
        let salles = await fetch('api/salles') ;
        const sallesJson = await salles.json();

        // récupération de la liste des noms de salles
        const sallesNameList = sallesJson.map( (salle) => {
            return salle.nom;
        })

        console.log(sallesJson)
        return {  sallesNameList }
    } catch (error) {
        console.log(error);
    }

} 