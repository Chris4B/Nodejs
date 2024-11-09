// utilisation de la fonction require 

// console.log('module 1')

// Utilisation d'une fonction 
const mymodule = function () {
    console.log('module 1');
}

module.exports = mymodule; 


// Resumé
// Par défaut tout ce qui est dans ce module est isolé.
// Mais il va être possible de retourner de l'information (objet, function ...)
// en utilisant 'module.exports'
// Dans le fichier principal, on utilise la méthode require pour faire le lien entre les deux fichiers
// le fichier "app.js" est appelé "entrypoint"
