<script>
    import { goto } from '$app/navigation';
    export let salle;
    const adresse = `${salle.numero}, ${salle.voie}`; 
    const adresse2 = `${salle.codePostal}, ${salle.ville}`;

    const handleClick = () => {
        goto(`/salles/${salle.id}`)
    }
</script>

<div class="w-3/4 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="p-5">
        <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{ salle.nom }</h5>
        </div>
        <div>
            <p class="text-center"> { adresse }</p>
            <p class="text-center"> { adresse2 }</p>
        </div>
        <div class="text-end pt-5">
            <button on:click={handleClick} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Details
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
       
    </div>
</div>




