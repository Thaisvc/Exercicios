const btnELimpa = document.getElementById('btn-limpa');
//preventDefault() desabilita a funçao do sbmit do button
/* btnEnvia.addEventListener('click', (event) =>{
  event.preventDefault();
}) */

//adicionando evento e chamando a funçao
btnELimpa.addEventListener('click', clear)
//funçao para limpar formulario
function clear() {
    const inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index += 1) {
    let position = inputs[index];
    position.value = '';
    position.checked = false;   
}
const textArea = document.querySelector('textarea');
textArea.value = '';
}

let inputCheckbox = document.getElementById('noticia2');
const btnEnvia = document.getElementById('btn-enviar');
btnEnvia.disabled = true;
inputCheckbox.addEventListener('change', ()=> {
  if (inputCheckbox.checked) {
    btnEnvia.disabled = false; 
  } else {
    btnEnvia.disabled = true;

  }

})

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);






