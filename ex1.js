//1 - Dada a array const xx = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array imprimindo na tela todos os dados que incluem nela

//MEU
// const xx = [23, 43, 63 ,73, 83, 93, 102];
// console.log(xx);

//NATY
// for(let i=0;i< xx.length; i++){
//     console.log(xx[i]);
// };

// 2- Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no começo dessa array.

// const doces = ['sorvete', 'pirulito', 'bombom']; //modifica de modo permanente o array
// doces.unshift('bala');
// console.log(doces);

// 3 Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no final dessa array.

// const doces = ['sorvete', 'pirulito', 'bombom'];
// doces.push('chiclete');
// console.log(doces);

//  4- Dada a array const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
// inverta a ordem dos items e log na tela : 'dance of days', 'blink182', 'linking park', 'fresno'

//const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
// bandasEmo.reverse();
// console.log(bandasEmo);
//console.log(bandasEmo.reverse()); //NATY

// 5 - Dada a array const array = [23, 45, 13, 71];
// Insira o número 11 no meio, chegando ao output = 23, 45, 11, 13, 71

// const array = [23, 45, 13, 71];
// array.splice(2, 0, 11);
// console.log(array);

//6-  Dada a array const array = [23, 45, 13, 17];
// Tire o número 45 da array.

// const array = [23, 45, 13, 17]
// array.splice(1, 1);
// console.log(array);

// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela

// const array = [];
// for (let i = 1; i < 20; i++) {
//     //let array = [i];
//     if (i % 2 !== 0) {
//         array.push(i);
//     }
// }console.log(array);

// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.

// const newX = [];
// const x = [23, 43, 63 ,73, 83, 93, 102];
// let result = x.map(function(num){
//     return num + 2;
//     result = newX.push();
// });

// console.log(newX);

// for (let i = 0; i < x.length; i++){
//     novaArray.push(x[i]+2)
// };

// 9- dada a array const lista = [56, 89, 34, 12, 23, 55, 9]
// ordene a lista .

//const lista = [56, 89, 34, 12, 23, 55, 09];
// lista.sort(function(a, b){return a-b});
// console.log(lista);
//lista.sort((a,b)=> a-b) arrow function

// for (let i = 0; i < lista.length; i++) {
//     for (let j = 0; j < lista.length; j++) {
//         if (lista[j] > lista[j + 1]) {
//             const aux = lista[j]
//             lista[j] = lista[j + 1]
//             lista[j + 1] = aux
//         }
//     }
// };

// LOOP NA MÃO PRA ENTENDER O PROCESSO 

// const n = [10, 20, 30];
// for(let i = 0; i<n.length; i++){
//     console.log(n[i])
// };

//LOOP DENTRO DO OUTRO + matriz 5 x 5

const arr = [];
let count = 1;
for (let i = 0; i < 5; i++) {
    const col = [];
    for (let j = 0; j < 5; j++) {
        col[j] = count;
        count++
    }
    arr[i] = col
}
console.log(arr);