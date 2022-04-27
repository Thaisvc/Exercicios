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

  /* GABARITO 

  Aqui foi utilizado o Pikaday e o Just-validate .
/* Adiciona o CSS do Pikaday 
@import './node_modules/pikaday/css/pikaday.css';

* {
  margin: 10;
  padding: 0;
  box-sizing: border-box;
}
Para a biblioteca Pikaday funcionar, você precisa mudar o type do input de data para text .
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario-TrybeTrip</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="pikaday.css">
    <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
  </head>
  <body>
    <h1>Concorra à Viagem dos seus sonhos com a TrybeTrip</h1>

    <form class="js-form" id="form">
      <fieldset class="form-group">
        <label class="form-label" for="fullName">Nome Completo:</label>
        <input class="form-control" data-validate-field="name" type="text" id="fullName" name="fullName" placeholder="Digite seu nome completo" maxlength="40" minlength="10" required>      
        <br/>

        <label class="form-label" for="email">Endereço de e-mail:</label>
        <input class="form-control" data-validate-field="email" type="email" id="email" name="email" placeholder="Digite seu e-mail" maxlength="50" minlength="10" required>
        <br/>

        <label class="form-label" for="destination1">Cidade</label>
        <input class="form-check-input" type="radio" id="destination1" className="radios" name="destinations" value="Cidade" data-validate-field="destination" required>

        <label class="form-label" for="destination2">Campo</label>
        <input class="form-check-input" type="radio" id="destination2" className="radios" name="destinations" value="Campo" data-validate-field="destination" required>

        <label class="form-label" for="destination3">Praia</label>
        <input class="form-check-input" type="radio" id="destination3" className="radios" name="destinations" value="Praia" data-validate-field="destination" required>

        <label class="form-label" for="destination4">Montanhas</label>
        <input class="form-check-input" type="radio" id="destination4" className="radios" name="destinations" value="Montanhas" data-validate-field="destination" required>
        <br/>

        <label class="form-label" for="why">Por que você deveria ser a pessoa desenvolvedora escolhida pelo concurso TrybeTrip?</label>
        <br/>
        <textarea class="form-control" name="why" id="why" cols="60" rows="10" placeholder="Digite sua resposta vencedora aqui" data-validate-field="text"></textarea>
        <br/>

        <label class="form-label" for="date">Qual a melhor data para realizar sua viagem?</label>
        <!-- Muda o type para text para poder funcionar o Pikaday -->
        <input class="form-control" type="text" id="date" data-validate-field="date">
        <br/>

        <label class="form-label" for="promo">Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe.</label>
        <input class="form-check-input" type="checkbox" name="promo" id="promo">
        <br/>

        <label class="form-label" for="agreement">Concordo que imagens de minhas férias poderão ser usadas na divulgação de concursos futuros.</label>
        <input class="form-check-input" type="checkbox" name="agreement" id="agreement" required>
      </fieldset>

      <button type="submit" class="btn btn-primary submit-button" id="submit-btn" disabled>Participar do concurso TrybeTrip</button>
      <button type="button" class="btn btn-danger clear-button" id="clear-btn">Apagar informações</button>
    </form>

    <!-- Adiciona os scripts das bibliotecas -->
    <script src="moment.js"></script>
    <script src="pikaday.js"></script>
    <script src="script.js"></script>
  </body>
</html>

SCRIPT
const validate = new JustValidate(
  '#form', 
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
};

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

validate
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#why', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);

window.onload = function() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
}; */