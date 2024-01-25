import { PUBLIC_PORT } from '$env/static/public'
import { PUBLIC_HOST } from '$env/static/public'

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

export const load = async ({ fetch }) => {
    const notification = "hello world";

    return { 
        notification
    }
}

// méthode d'utilisation du formualaire dans la vue 
export const actions = {
    default: async ({ request, fetch }) => {
        // on récupère directement les datas dans le proxy. 
        const data = await request.formData();
        console.log(data);

        // méthode POST

        try {
            const response = await fetch(`https://${PUBLIC_HOST}:${PUBLIC_PORT}/api/salles`, {
            method: 'POST',
            body: data })
        const data2 = await response.json();
        console.log(data2);
        // return new Response(JSON.stringify(data), {
        //     status: response.status,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        } catch (error) {
            console.error(error)
        }






}
};