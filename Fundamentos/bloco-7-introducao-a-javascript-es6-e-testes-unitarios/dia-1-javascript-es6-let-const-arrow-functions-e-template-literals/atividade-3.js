const array = ["Android", "iOS", "Architecture", "Teach", "Run"];
array.join();


 const troca = params => {
    let string = "Tryber x aqui!";
    let result = string.replace("x", params );
    
    console.log(result);
    
}
troca(array);
 
function techList(arrayList) {
    let listTech = {};
    let list2 = [];
    arrayList = arrayList.sort();
    if (arrayList == '') {
      return 'Vazio!';
    } else {
      for (let i = 0; i < arrayList.length; i++) {
        listTech[+[i]] = { tech: arrayList[i] };
        list2.push(listTech[i]);
      }
      return list2;
    }

   
  }
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"]),"#goTrybe");





/* GABARITO

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));*/



