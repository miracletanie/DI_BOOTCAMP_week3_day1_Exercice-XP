//In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let valc = document.getElementById("navBar")

valc.setAttribute('id',"socialNetworkNavigation")

console.log(valc)

// First, create a new <li> tag (use the createElement method).

//Creation d'une balise li
let valli = document.createElement('li')
//let lien = document.createElement('a')
//lien.setAttribute('href','#')
// Creation d'un contenu texte
//Create a new text node with “Logout” as its specified text.
let val = document.createTextNode('Logout')


// Ajout du texte a la balise l
//Append the text node to the newly created list node (<li>).
valli.appendChild(val)


// Recuperation  de la balise ul
let First = document.querySelector('ul')

//Ajout de la balise li a la baslie ul
//Finally, append this updated list node to the unordered list (<ul>), using the
First.appendChild(valli)


