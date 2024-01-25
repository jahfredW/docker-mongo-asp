import { PUBLIC_HOST, PUBLIC_PORT } from '$env/static/public'

const host = PUBLIC_HOST;
const port = PUBLIC_PORT


const url = `https://${host}:${port}`;

/**
 * Recupération de toutes les salles
 * @returns response sous forme de json 
 */


// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
export async function GET(){
    try {
        const response = await fetch(`${url}/api/salles`);
        console.log(response)
        const responseJson =  await response.json();
        console.log(responseJson);
        const data = responseJson.map((salle) => {
            return {
                id: salle.id,
                nom: salle.nom,
                numero: salle.adresse.numero,
                voie: salle.adresse.voie,
                codePostal: salle.adresse.codePostal,
                ville: salle.adresse.ville,
                coords: [salle.adresse.localisation.coordinates[0] , salle.adresse.localisation.coordinates[1]]
            };
        });
        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        }); 

    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error;
    }
}

// méthode POST A FAIRE EVOLUER
export async function POST({ request }) {
    try {
        const { request } = requestEvent;
        const formdata = new FormData();
        formdata.append('nom', request.data.nom);

        const response = await fetch(`${url}/api/salles`, {
            method: 'POST',
            headers : {
                'Content-Type': 'multipart/form-data'
            },
            body: formdata,
    })
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error);
    }
    

}




  
    
