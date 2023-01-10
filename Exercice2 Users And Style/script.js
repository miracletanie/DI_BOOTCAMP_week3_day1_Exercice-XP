//Add a “light blue” background color and some padding to the <div>.

let div = document.getElementsByTagName("div")[0];


div.setAttribute('style','background-color: #00BFFF; padding:10px')


//Do not display the <li> that contains the text node “John”.

let firstli = document.getElementsByTagName("li")[0];

firstli.setAttribute('style','display:none')


let secondli = document.getElementsByTagName("li")[1];



//Add a border to the <li> that contains the text node “Pete”.

secondli.setAttribute('style','border: 2px solid yellow')


//Change the font size of the whole body.

let gene = document.querySelector("body");
gene.setAttribute('style','font-size :50px')

