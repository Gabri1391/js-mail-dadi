//Costruisco un array dove inserirò tutte le e-mail che possono accedere
const mailList = ["ciccio84@gmail.com","pippo91@gmail.com","webdeveloper@gmail.com","booleancareers@gmail.com"];

//Prendo l'elemento dal DOM
const validationMail = document.getElementById('validation-mail');
const button = document.getElementById('button');


//Se è vero che la mail data nell'utente è inclusa nell'array allora "Benvenuto!",altrimenti "Spiacenti!"

button.addEventListener('click', function() {
    const mailEl = document.getElementById('mail').value;

    if(mailList.includes(mailEl)){
        alert("Benvenuto nel nostro sito!");
    
    }else{
        alert("Questo indirizzo mail non può accedere al sito");
    }
});