/* const inputNoticia = document.getElementById('') */
/* const inputDestino = document.getElementById('') */
const btnELimpa = document.getElementById('btn-limpa');

/* btnEnvia.addEventListener('click', (event) =>{
  event.preventDefault();
}) */


btnELimpa.addEventListener('click', clear)

function clear() {
    const inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index += 1) {
    let position = inputs[index];
    position.value = '';
    //para as checkbox
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
Teste se o botão agora apaga as informações contidas nos inputs. Parabéns, o formulário está ficando bem massa, né? Então bora pro Bônus e vamos aprender a fazer algumas outras coisinhas bem legais. */