const btnELimpa = document.getElementById('btn-limpa');
//preventDefault() desabilita a funçao do sbmit do button
/* btnEnvia.addEventListener('click', (event) =>{
  event.preventDefault();
}) */

//adicionando evento e chamando a funçao
btnELimpa.addEventListener('click', clear)
//funçao para limpar formulario
function clear() {
  // selecionando os input pela tag
    const inputs = document.querySelectorAll('input');
    // percorrendo meus inputs
for (let index = 0; index < inputs.length; index += 1) {
  //guardando a posicao de cada input
    let position = inputs[index];
    //adicionado  a cada posicao um value vazio para retorna nada
    position.value = '';
    //para as checkbox q recebe valor booleano deve ser false ou true
    position.checked = false;   
}
//selecionando minha textarea
const textArea = document.querySelector('textarea');
// passando um value vazio
textArea.value = '';
}

//selecionando minha checkbox necessaria
let inputCheckbox = document.getElementById('noticia2');
// selecionado o botao
const btnEnvia = document.getElementById('btn-enviar');
// atribuindo valor desabilitado true no botao | para q ele fique desabilitado
btnEnvia.disabled = true;
// adicionando um escutador de evento no caso vai ouvir uma mudança
inputCheckbox.addEventListener('change', ()=> {
  // se meu inputCheckbox desejado for marcado (checked)
  if (inputCheckbox.checked) {
    //entao meu botao e abilitado o submit pode enviar
    btnEnvia.disabled = false; 
  } else {
    // se nao nao for arcado meu checkbox o botao continuara desabilitado
    btnEnvia.disabled = true;

  }

})












/* GABARITO

3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Tivemos uma parte do conteúdo sobre isso, lembra?
Solução:
Primeiramente, como vamos trabalhar com o javascript devemos criar um script e anexa-lo ao HTML, você já fez isso, mas tudo bem se não lembra como realizar, pois está aqui para aprender. Fazemos isso através da tag <script> como no exemplo abaixo:

    
    </fieldset>
    <button type="submit" id="submit-btn" >Participar do concurso TrybeTrip</button>
    </form>
    <script src="./script.js"></script>
  </body>
Agora vamos para o javascript. Lembra do addEventListener ? Vamos usa-lo aqui. Primeiramente devemos criar uma função que será o segundo parâmetro do eventListener:


function handleSubmit(event) {
  event.preventDefault();
}
Concorda que queremos que o botão esteja preparado para funcionar assim que abrirmos a página? Para isso colocaremos então o addEventListener dentro do window.onload .


window.onload = function () {
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
};
Pronto, agora nossa página não irá recarregar quando apertarmos o botão.
4. Crie um botão que limpe as informações contidas nos campos;
Solução:
Vamos fazer esse em algumas etapas, primeiramente vamos criar o botão no HTML:


    </fieldset>
    <button type="submit" id="submit-btn">Participar do concurso TrybeTrip</button>
    <button type="button" id="clear-btn">Apagar informações</button>
    </form>
Agora vamos criar as função responsável por limpar essas informações:


function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}
Agora vamos habilitar essa função em nosso botão:


window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
};
Teste se o botão agora apaga as informações contidas nos inputs. Parabéns, o formulário está ficando bem massa, né? Então bora pro Bônus e vamos aprender a fazer algumas outras coisinhas bem legais. 

Bônus
1. A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
Solução:
Esse exercício também faremos tanto no HTML quanto no Javascript, vamos começar pelo HTML que será bem simples. Lembra do nosso botão submit? Vamos definir que ele comece desabilitado:

    <button type="submit" id="submit-btn" disabled>Participar do concurso TrybeTrip</button>
Dê um refresh na sua página e note que o botão agora está desabilitado.
Agora vamos fazer a função responsável por habilitá-lo.

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}
Talvez o operador ! seja uma novidade para você. Então vamos explicar o que ele faz e como está funcionando nessa solução. Esse operador é chamado de "bang", e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. Se algo for verdadeiro ele retornará falso e vice-versa.
No nosso código estamos dizendo que a propriedade disabled do submitBtn é igual a negação da propriedade checked da checkbox agreement . Sendo assim, se a checkbox estiver "checkada" nosso botão não estará desabilitado (estará habilitado). Massa, né? Esse operador será muito útil em sua vida como pessoa desenvolvedora.
Assim como as demais, vamos adicionar essa função num addEventListener , porém com checkBoxes não usamos 'click' e sim 'change' .

window.onload = function() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};
Teste para ver se está tudo funcionando como deveria. É uma função bem legal, né? E é bastante utilizada.
2. Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
Solução:
Agora sim todos os campos estão criados como deveriam dentro do HTML, portanto esse exercício será feito somente no javascript. Primeiramente faremos a função que validará esses dados:



function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}
Agora vamos colocar ela dentro da nossa função handleSubmit que já está funcionando.


function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}
Tente clicar no botão sem ter preenchido um dos campos de texto e veja se o alerta aparece. Legal, não é mesmo?
Esses foram os exercícios de hoje, esperamos que tenham se divertido e aprendido bastante, até a próxima.*/