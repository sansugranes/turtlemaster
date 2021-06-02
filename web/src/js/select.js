function selectTurtle(turtle)
{
    sessionStorage.setItem('selectedTurtle', turtle.childNodes[1].innerHTML);
    window.location.href = "../html/threedView.html";
}