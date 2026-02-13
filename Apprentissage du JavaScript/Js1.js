//document.getElementById('submitBtn').addEventListener('click', function() {
//    const name = document.getElementById('name').value.trim();
  //  const surname = document.getElementById('surname').value.trim();
    //const number = document.getElementById('number').value.trim();
   // const date = document.getElementById('date').value;
    //const expDate = document.querySelectorAll('#date')[1].value;
    //const cvv = document.getElementById('CVV').value.trim();
    //const email = document.getElementById('email').value.trim();
    //const accept = document.querySelector('input[type="checkbox"]').checked;

    //let message = '';
    //if (!name || !surname || !number || !date || !expDate || !cvv || !email) {
        //message = 'Veuillez remplir tous les champs.';
    //} else if (!accept) {
      //  message = 'Vous devez accepter les conditions d\'utilisation.';
    //} else if (!/^[0-9]{3}$/.test(cvv)) {
      //  message = 'Le CVV doit contenir 3 chiffres.';
    //} else if (!/^[0-9]{10}$/.test(number)) {
      //  message = 'Le numéro de téléphone doit contenir 10 chiffres.';
    //} else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      //  message = 'Veuillez entrer un email valide.';
    //}

    //if (message) {
     //   alert(message);
    //} else {
      //  alert('Formulaire envoyé avec succès !');
    //}
//});

document.getElementById('submitBtn').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const number = document.getElementById('number').value;
        const date = document.getElementById('date').value;
        const CVV = document.getElementById('CVV').value;
        const email = document.getElementById('email').value;


        if (name && surname && number && date && CVV && email) {
            alert(`Formulaire envoyé avec succès!\nNom: ${name}\nPrénom: ${surname}\nTéléphone: ${number}\nDate d'inscription: ${date}\nCVV: ${CVV}\nEmail: ${email}`);
        } else {
           confirm('Veuillez remplir tous les champs obligatoires.');
        }
    });