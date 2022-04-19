
function corFundo(color) {
   let selectElement = document.querySelector('.cropo');
   selectElement.style.backgroundColor = color
   localStorage.setItem("backgroundColor", color)
}

