/**************************************************\
|   Authors : Santiago Sugrañes & Mathias Rogey
|
|   Description : Sets the chosen turtle and puts
|           it in local storage so we can access it
|           later on.
\**************************************************/

function selectTurtle(turtle) {
    sessionStorage.setItem('selectedTurtle', turtle.childNodes[1].innerHTML);
    window.location.href = "../html/threedView.html";
}