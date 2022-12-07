// les 3 boutons dans la colonne de gauche
const bouton1 = document.getElementById('lots1');
const bouton2 = document.getElementById('lots2');
const bouton3 = document.getElementById('lots3');

let livres = document.querySelectorAll('#livre');
// Boutons filtres
const boutonNbre1 = document.querySelector('.troisieme');
const boutonNbre2 = document.querySelector('.trois');
const boutonNbre3 = document.querySelector('.troisi');
const boutonNbre4 = document.querySelector('.troi');
const boutonMontant1 = document.querySelector('.premiere');
const boutonMontant2 = document.querySelector('.deuxieme');

let message = document.getElementById('messageBleu');



boutonMontant1.addEventListener('click', AfficherMessage3);
boutonMontant2.addEventListener('click',AfficherMessage2);
boutonNbre1.addEventListener('click', AfficherMessage1);
boutonNbre2.addEventListener('click', AfficherMessage1);
boutonNbre3.addEventListener('click', AfficherMessage1);
boutonNbre4.addEventListener('click', AfficherMessage1);
bouton1.addEventListener('click', AfficherMessage1);
bouton2.addEventListener('click', AfficherMessage2);
bouton3.addEventListener('click', AfficherMessage3);

function AfficherMessage1(){
    let Prix = 24.37;
    let NbreLivre = 14;
    message.innerHTML = ("Payer au moins "+ Prix +" $CA pour ces " + NbreLivre + " aritcles");
}
function AfficherMessage2(){
    let Prix = 13.54;
    let NbreLivre = 10;
    
    message.innerHTML = ("Payer au moins "+ Prix +" $CA pour ces " + NbreLivre + " aritcles");
}
function AfficherMessage3(){
    let valide = false;
    let Prix = 1.35;
    let NbreLivre = 5;
    message.innerHTML = ("Payer au moins "+ Prix +" $CA pour ces " + NbreLivre + " aritcles");
}