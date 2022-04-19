function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();














































































































































































/* let DaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function creatNumDay() {
  //selectUl CAPITURA O ID DA TAG UL
  let selectUl = document.querySelector("#days");
  // PERCORRENDO MEU ARRAY
  for (let index = 0; index < DaysList.length; index += 1) {
    //GUARDA A POSICAO DO MEU ARRAY
    let NunDay = DaysList[index];
    // CRIA  O  ELEMENTO LI
    let CreatLi = document.createElement("li");
    //IF ELSE COMPARA SE MEU NUMERO DO ARRAY NA POSICAO INDEX E IGUAL AOS NUMEROS Q PRECISO
    if (NunDay === 24 || NunDay === 31) {
      //MEU ELEMENTO CRIADO LI RECEBENDO UMA CLASS
      CreatLi.className = "day holiday";
      //MEU ELEMENTO CRIADO LI RECEBENDO UM NUMERO DO ARRAY
      CreatLi.innerHTML = NunDay;
      // MINHA UL CAPTURADO POR ID RECEBENDO COMO FILHO MINHA LI COM NUMERO E CLASS
      selectUl.appendChild(CreatLi);
    } else if (NunDay === 4 || NunDay === 11 || NunDay === 18) {
      CreatLi.className = "day friday";
      CreatLi.innerHTML = NunDay;
      selectUl.appendChild(CreatLi);
    } else if (NunDay === 25) {
      CreatLi.className = "day holiday friday";
      CreatLi.innerHTML = NunDay;
      selectUl.appendChild(CreatLi);
    } else {
      CreatLi.innerHTML = NunDay;
      CreatLi.className = "day";
      selectUl.appendChild(CreatLi);
    }
  }
}
// CHAMANDO MINHA FUNÇAO
creatNumDay(); */