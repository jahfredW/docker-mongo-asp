import { PUBLIC_HOST, PUBLIC_PORT } from '$env/static/public'

const host = PUBLIC_HOST;
const port = PUBLIC_PORT

console.log(host)
const url = `https://${host}:${port}`;

/**
 * Recupération de toutes les salles
 * @returns response sous forme de json 
 */
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
export async function GET(requestEvent){
    try {
        const  { params } = requestEvent;
       
        const { salleId } = params;
        console.log(salleId);
        const response = await fetch(`${url}/api/salles/${salleId}`);
        console.log("réponse",response)
        const responseJson =  await response.json();
        console.log("réponse json",responseJson);
        
        const data = {
            nom: responseJson.nom,
            numero: responseJson.adresse.numero,
            voie: responseJson.adresse.voie,
            codePostal: responseJson.adresse.codePostal,
            ville: responseJson.adresse.ville,
        };
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