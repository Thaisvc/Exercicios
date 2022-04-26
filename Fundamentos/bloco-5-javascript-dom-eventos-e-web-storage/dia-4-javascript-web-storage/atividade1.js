window.onload = function () {
  function mudaFundo(color) {
     //PEGO O PARAGRAFO Q VOU MUDAR
   let mudar = document.querySelector("#paragrafo")
   //ADD ESTILO 
   mudar.style.backgroundColor = color
   //SALVO A INFORMAÇAO NO NAVEGADOR
   localStorage.setItem("backgroundColor", color)
  }
  //PEGA UM ARRAY NODE COM 4 ELEMENTO DA SECTION
  let pegaSection = document.querySelectorAll("#background-color")
  //PERCORRO MEU ELEMENTO
  for (let index = 0; index < pegaSection.length; index += 1) {
     //PEGO MEU ELEMENTO NA POSICAO INDEX E ADICIONO UM OUVIDOR DE EVENTO CLIC + FUNCTION
    pegaSection[index].addEventListener("click", function(event) {
       //PEGA O Q TEM NO BUTTON
      mudaFundo(event.target.innerHTML);
    });
  }

  let pegaLetra = document.querySelectorAll("#background-color")
  //PERCORRO MEU ELEMENTO
  for (let index = 0; index < pegaSection.length; index += 1) {
     //PEGO MEU ELEMENTO NA POSICAO INDEX E ADICIONO UM OUVIDOR DE EVENTO CLIC + FUNCTION
    pegaSection[index].addEventListener("click", function(event) {
       //PEGA O Q TEM NO BUTTON
      mudaFundo(event.target.innerHTML);
    });
  }

};
