
/*
In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).
*/
const allBooks = [
    {
        "title": 'Climbé',
        "author": 'Bernard Dadier',
        
        "image" : 'http://ecx.images-amazon.com/images/I/31StKZhAtxL._SX195_.jpg',
        "alreadyRead" : true 
    },
    {
        "title": 'Rebelle',
        "author": 'Fatou keyta',
        "image" : 'https://ameliediackauteure.files.wordpress.com/2019/03/rebelle.png?w=766',
        "alreadyRead" : false 
    }
]


let listbookletDiv = document.querySelector('div')//on recupere la div
let htmltable = document.createElement('table') //on vient de crer un tableau
htmltable.setAttribute('style','width:100%;border:2px solid black')
listbookletDiv.appendChild(htmltable) // on vient dajouter la table a la div

let headtable = document.createElement('tr')
headtable.setAttribute('style','width:100%;border:2px solid black')

htmltable.appendChild(headtable)

// Colonne titre 
let titlecolum = document.createElement('th')
titlecolum.setAttribute('style','width:30%;border:2px solid black')

let titlecolumtext = document.createTextNode("titre de l'oeuve")
titlecolum.appendChild(titlecolumtext)

headtable.appendChild(titlecolum)


// Colonne auteur

let authorcolum = document.createElement('th')
authorcolum.setAttribute('style','width:30%;border:2px solid black')

let authorcolumtext = document.createTextNode("Auteur de l'oeuve")

authorcolum.appendChild(authorcolumtext)
headtable.appendChild(authorcolum)



// Colonne auteur

let imagecolum = document.createElement('th')
imagecolum.setAttribute('style','width:40%;border:2px solid black')

let imagecolumtext = document.createTextNode("Image de l'oeuve")

imagecolum.appendChild(imagecolumtext)
headtable.appendChild(imagecolum)

/*
let tableBody = document.createElement('tbody')
htmltable.appendChild(tableBody)
*/

for (const book of allBooks) {
/*
    let line = document.createElement('tr')
    tableBody.appendChild(line)
*/
    let line = document.createElement('tr')
    htmltable.appendChild(line)

    let  title = document.createElement('td')
    line.appendChild(title)
    let titleContent = document.createTextNode(book.title)
    title.appendChild(titleContent)
    title.setAttribute('style','width:40%;border:2px solid black')

    let  author = document.createElement('td')
    line.appendChild(author)
    let authorContent = document.createTextNode(book.author)
    author.appendChild(authorContent)
    author.setAttribute('style','width:40%;border:2px solid black')
    

    let  imagecolum = document.createElement('td')
    line.appendChild(imagecolum)

    let image = document.createElement('img')
    image.setAttribute('src',book.image)
    image.setAttribute('width',"100px")

    imagecolum.appendChild(image)
    imagecolum.setAttribute('style','width:40%;border:2px solid black')
    
    if (book.alreadyRead) {
        line.style.color = "red"
    }
    
}

