// pour créer des guarad, il faut créer un dossier params et y mettre dedans des fichiers aevc le nom du param
// A l'intérieur on crée ensuite des fonctions qui définissent la logique
// enfin on binde aevc le nom des dossiers. 


export function match(param){
    return /^\d+$/.test(param);
}