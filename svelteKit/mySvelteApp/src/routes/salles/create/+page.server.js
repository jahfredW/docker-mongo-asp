import { PUBLIC_PORT } from '$env/static/public'

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

export const load = async ({ fetch }) => {
    const notification = "hello world";

    return { 
        notification
    }
}

export const actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();
        console.log(data);

        // méthode POST

    try {
        const response = await fetch(`https://localhost:${PUBLIC_PORT}/api/salles`, {
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
        console.error(error);
    
    }






}
};