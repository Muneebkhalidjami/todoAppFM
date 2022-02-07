var inputvalue = document.getElementById('inp');
var main = document.getElementById('main');




function addtodo() {
    ///create Li////////
    var todoLi = document.createElement('li');
    var textNode = document.createTextNode(inputvalue.value);
    todoLi.appendChild(textNode)

    ///create Del Button////////
    var todobtn = document.createElement('btn');
    var textbtn = document.createTextNode("Delete");
    todobtn.appendChild(textbtn)
    todobtn.setAttribute('class', 'button-3')
    todobtn.setAttribute('onclick', 'deleteToDoList(this)')


    /// combining both inside li
    todoLi.appendChild(todobtn)



    ///Edit Button////////
    var todoedit = document.createElement('btn');
    var todoedittxt = document.createTextNode("Edit");
    todoedit.appendChild(todoedittxt)
    todoedit.setAttribute('class', 'button-4')
    todoedit.setAttribute('onclick', 'editTodoList(this)')
    todoLi.appendChild(todoedit)

    main.appendChild(todoLi)

}
function deleteAll() {
    main.innerHTML = ""
}

function deleteToDoList(element) {
    element.parentNode.remove();
}

function editTodoList(element) {
    element.parentNode.firstChild.nodeValue = prompt("Enter your Edit Value");

}

