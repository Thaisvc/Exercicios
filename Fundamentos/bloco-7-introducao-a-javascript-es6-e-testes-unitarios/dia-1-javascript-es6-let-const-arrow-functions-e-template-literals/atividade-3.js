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









