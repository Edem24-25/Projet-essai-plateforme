// Récupère le bouton d'envoi
const envoi = document.getElementById("Envoi");

// Ajoute un écouteur d'événement au clic sur le bouton
envoi.addEventListener("click", function() {
    // Récupère la valeur de chaque champ et retire les espaces inutiles
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérifie si un champ est vide
    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs !");
        return; // Stoppe l'exécution si un champ est vide
    }

    // Affiche les valeurs saisies
    alert('Nom: ' + name);
    alert('Email: ' + email);
    alert('Présentez-vous: ' + message);
    alert('Votre message a été envoyé avec succès !');
});

/*
Explication du code :
- On récupère le bouton avec son id "Envoi".
- On écoute le clic sur ce bouton.
- On récupère les valeurs des champs et on enlève les espaces inutiles avec trim().
- Si un champ est vide, on affiche une alerte et on arrête la fonction.
- Si tous les champs sont remplis, on affiche les valeurs et un message de succès.
*/