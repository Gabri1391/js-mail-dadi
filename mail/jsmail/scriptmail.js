//Crea (inventa) una lista di indirizzi mail autorizzati.
//Chiedi all’utente la sua email,
//Controlla che sia nella lista di chi può accedere,
//Stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);



//Costruisco un array dove inserirò tutte le e-mail che possono accedere
const mailList = ["ciccio84@gmail.com","pippo91@gmail.com","webdeveloper@gmail.com","booleancareers@gmail.com"];

//chiedo all'utente la sua mail
const userMail = prompt('Inserisci il tuo indirizzo e-mail','pippo91@gmail.com');

//Se è vero che la mail data nell'utente è inclusa nell'array allora "Benvenuto!",altrimenti "Spiacenti!"

if(mailList.includes(userMail)){
    console.log('Benvenuto!')
}else{
    console.log('Spiacenti!')
}

 

