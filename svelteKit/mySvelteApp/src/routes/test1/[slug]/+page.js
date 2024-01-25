
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
/** @type {import('./$types').PageLoad} */
export async function load( loadEvent) {
    const { fetch } = loadEvent;
    console.log("load function called in page.js")
	// if (params.slug === 'hello-world') {
	// 	return {
	// 		title: 'Hello world!',
	// 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	// 	};
	// }
    const data =  await fetch("https://localhost:44314/api/salles");
    const dataJson = await data.json();



    return {
        dataJson
    }

	
}