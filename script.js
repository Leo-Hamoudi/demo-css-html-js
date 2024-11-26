// ex1 : Ecrire une fonction qui modifie un h1 avec le texte qui sera passé en paramétre




//ex2: Ecrire une fonction qui fonction qui change la couleur de  background d'une div 
//bonus : cette fonction change aléatoirement la couleur de bg de la div

//essaie code javascript

const h1= document.querySelector("h1");
const button= document.getElementById("but"); 
const popup= document.querySelector(".popup");
button.addEventListener("click", SwitchLePopup)

function SwitchLePopup() {
    popup.classList.toggle("closed")
}