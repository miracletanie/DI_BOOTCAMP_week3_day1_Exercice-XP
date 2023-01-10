let container = document.getElementById("container").innerHTML;
console.log(container)//Retrieve the div and console.log it

document.getElementsByTagName("li")[1].innerHTML = "Richard" //Change the name “Pete” to “Richard”.


const lists = document.querySelectorAll(".list")
lists.forEach(list => list.firstElementChild.textContent = "Michelle")//Change each first name of the two <ul>'s to your name.


lists[1].children[1].remove()//Delete the <li> that contains the text node “Sarah”.

