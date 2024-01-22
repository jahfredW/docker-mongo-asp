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
export async function GET(){
    try {
        const response = await fetch(`${url}/api/salles`);
        const responseJson =  await response.json();
        console.log(responseJson);
        const data = responseJson.map((salle) => {
            return {
                nom: salle.nom,
                numero: salle.adresse.numero,
                // voie: salle.adresse.voie,
                // codePostal: salle.adresse.codePostal,
                // ville: salle.adresse.ville,
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

// /**
//  * 
//  * @param {int} id id de la salle
//  * @returns réponse json de la salle 
//  */
// // export const GET = async (id) => {
//     try {
//         const response = await fetch(`https://localhost:44314/api/salles/${id}`)
//         console.log(response);
//         // let data = await response.json();
//         // console.log(data)
//         return await response.json();
//     } catch(error){
//         console.error('Erreur lors de la récupération des données :', error);
//     }
// } 

  
    
