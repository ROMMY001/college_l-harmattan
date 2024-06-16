document.getElementById('formulaireInscription').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le formulaire de s'envoyer

    var matricule = document.getElementById('matricule').value;
    var motdepasse = document.getElementById('motdepasse').value;

    if(matricule && motdepasse) {
        // Si les deux champs sont remplis redirige vers la page de cotation
        window.location.href = 'page-de-cotation.html';
    } else {
        // Sinon affiche un message d'erreur ou ne fait rien
        alert('Veuillez remplir tous les champs.');
    }
});
//Elie ce code js c'est mon seul code reussi en js