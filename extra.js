// use Map, filter, forEach, find e ou Reduce.

//FILTER
// const words = ['spray', 'limit', 'elite']
// const result = words.filter(function (word) {
//     return word.length > 3
// })
// console.log(result);

//FIND
// const array1 = [5, 12, 8, 130, 44]
// let found = array1.find(function(element){
//     return element >= 50
// })
// console.log(found);

//FOREACH
// const array1 = [5, 12, 8, 130, 44]
// array1.forEach(function(element){
//     console.log(element);
// });

//REDUCE
// const array1 = [1, 2, 3, 4]
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     console.log(array1.reduce(reducer));

//1
// retorne numeros multiplos de 3
// retorne numeros multiplos de 3 e de 5

// const numbers = [1, 3, 4, 6, 8, 9, 56, 34, 23, 2, 89, 101, 320, 12, 13, 45, 40, 43, 88];
// const numbers3 = [];
// const numbers35 = [];
// const result = numbers.filter(function (num) { //(num => num % 3 == 0);
//     return num % 3 === 0;
// })
// console.log(result);

// const result2 = numbers.filter(function(num35){
//     return num35 % 3 === 0 && num35 % 5 === 0;
// })
// console.log(result2);

//2
// retorne palavras que tenham menos de 5 letras

// const palavrinhas = ["bolacha", "biscoito", "bombom", "bala", "abestalhado", "MASSA", "pastilha"];

// const result = palavrinhas.filter(function (word) {
//     return word.length < 5
// })
// console.log(result);

//3
// // itere pela array modificando todos os items, multiplicando eles por 3.
// // depois printe quantos numeros são maiores que 10
// // depois quantos são menores que 10.
// // printe o numero menor que 10.

// const numbers = [3, 4, 5, 6, 9, 7];
// const result = numbers.map(function (num) {
//     return num * 3;
// })
// console.log(result);

// const resultM10 = result.filter(function(num10){
//     return num10 > 10;
// })

// console.log(resultM10);

// const resultm10 = result.filter(function(num10_){
//     return num10_ < 10;
// })
// console.log(resultm10);

//4
// calcule o valor total da soma dos items da array numbers

// const numbers = [1, 3, 4, 6, 8, 9, 56, 34, 23, 2, 89, 101, 320, 12, 13, 45, 40, 43, 88];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     console.log(numbers.reduce(reducer));

//5 -
// retore a mulher que tiver o user = 238
// retorne o nome das mulheres que gostam de estudar

const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
];

//RODANDO 1
// let found = mulheres.find(function(num){ // (item => item.user => 238)
//     return num.user == 238;
// })
// console.log(found);

// RODANDO 1 - PRA PUXAR PELO NOME DELA 
// let found = mulheres.find(function(num){ // (item => item.user => 238)
//     return num.user == 238;
// })
// console.log(found.name);

//RODANDO 2
const result = mulheres.filter(function (word) { //USAR .MAP GERA BOOLEAN E COM INDEXOF ELE PUXA O VALOR
    return word.hobbies.indexOf("estudar") > -1;
})
console.log(result);

// const womanName = result.map(function(nam){
//     return nam.name;
// })
// console.log(womanName);

const womanName = result.map((nam) => {return item.name});
console.log(womanName);

//ESTUDO 1 
// let foundStudy = (mulheres.find(function(study){
//     return study.hobbies.indexOf - 1 === "estudar";
// }))
// console.log(foundStudy);

//ESTUDO 2
// const foundStudy = (mulheres, indexOf) => (mulheres.hobbies.indexOf -1 ('estudar'));
// console.log(foundStudy);




