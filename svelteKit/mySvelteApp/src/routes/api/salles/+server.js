export async function getAllSalles(){
    try {
        const response = await fetch('https://localhost:44314/api/salles');
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error;
    }
}

  
    
