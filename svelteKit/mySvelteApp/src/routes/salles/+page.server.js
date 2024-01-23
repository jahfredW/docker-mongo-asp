// ici on charge les données sérialisables ( réponse API, json data, date, map, set)

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

export const load = async (serverLoadEvent) => {
    try {
        console.log('Load function called in page.serve.js')
        const { fetch } = serverLoadEvent;
       
        // ici on tape dans la  route api du front, mais possibilté de taper directement dans le backend
        let data = await fetch('https://localhost:44314/api/salles') ;
        const salles = await data.json();

        // récupération de la liste des noms de salles et mapping 
        const sallesMap = salles.map( (salle) => {
            return {
                nom : salle.nom,
                numero : salle.adresse.numero,
                ville : salle.adresse.ville,
                voie : salle.adresse.voie,
                codePostal : salle.adresse.codePostal
            }
        })

       
        return {  sallesMap }
    } catch (error) {
        console.log(error);
    }

} 