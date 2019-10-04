//objetos

// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

//MEU POKEMON
// const pokemon = {
//     nomeInternacional: aron,
//     nomeJapao: cokodora,
//     evolucao: ovo,
//     numeroHoenn: 070,
//     tipoPokeAço: true,
//     pokeFala1: function() {
//         console.log('Oi, meu nome é ' + pokemon.nomeInternacional + 'e meu nome em japonês é ' + pokemon.nomeJapao);
//     }
//     pokeFala2: function() {
//         console.log('Esse Pokemon sabe voar? S/N')
//         if('S'){

//         }else{
//             console.log('Desculpa, nao sei voar');
//         }        
//     }
//     const actionPoke: ["FIGHT", "BAG", "RUN"]
//     const random: (random) Math.random(actionPoke)

//     acao: function(){
//         console.log('Cabeçada de Pedra!')
//     }
//     pergunta: function(){
//         console.log('O que o ' + pokemon.nomeInternacional + ' vai fazer?')
//         return acao;
//     }
// };

// for(const item in pokemon){
// 	console.log(pokemon[item])
// }

// for(const item in pokemon){
// 	console.log(item, pokemon[item])
// }

//POKEMON NATY
// const pokemon = {
//     nome: 'charmander',
//     nomeJapa: 'eita',
//     sabe_voar: true,
// }

// pokemon.acao = function () {
//     const frase = ['lutar', 'correr', 'gritar']
//     const rand = Math.floor(Math.random() * frase.length)
//     console.log(frase[rand])
// }

// pokemon.acao();

// const pokemon = {
//   nome: "Charmander",
//   nomeJapones: "Hitokage",
//   numeroJohto: 234,
//   evoluiDe: "Ovo",
//   fraseFoda: function() {
//     return "chaaaaarrrrr-maaaannn-deeeeerr"
//   }
// }

// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

// pokemon.frase = function() {
//   return `Hello, my name is ${pokemon.nome}. And my name in Japanese ${pokemon.nomeJapones}.`
// }

// pokemon.frase()

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
//pokemon["sabe_voar"] = true

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".
// pokemon.fly = function() {
//   if (pokemon.sabe_voar) {
//     return `I'm flyyyyyying`
//   } else {
//     return "I can't fly"
//   }
// }

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

// pokemon["action"] = function() {
//   let frase = ["Fight", "Bag", "Run"]
//   let rand = Math.floor(Math.random() * frase.length)
//   return frase[rand]
// }

// pokemon.action()

// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.
// pokemon.ask = function() {
//   console.log(`What will ${pokemon.name} do?`)
//   return pokemon.do_something
// }

// 7.
// Printe todas as propriedades
// do seu pokemon no console.
// for (const key in pokemon) {
//   console.log(key)
// }

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>
// for (const key in pokemon) {
//   console.log(`Chave:${key}| valor:${pokemon[key]}`)
// }

//9 Faça uma função construtora de pokemon

// function Pokemon(nome, nomeInternacional, evolucao){
//   this.nome = nome
//   this.nomeInternacional = nomeInternacional
//   this.evolucao = evolucao
// }

// const pokemon1 = new Pokemon ("charmander", "Hitokage", "ovo")

// console.log(pokemon1.nome)

//FUNÇÃO CONSTRUTORA EXEMPLO 2
// function Pessoa (nome, idade){
//   this.nome = nome
//   this.idade = idade
// }

// const p1 = new Pessoa('natalya', '20')
// console.log(p1);

// const p2 = new Pessoa('dani', '41')
// console.log(p2); //INSTACIAR É ATRIBUIR VALORES A FUNÇÃO CONSTRUÍDA SEGUINDO OS SEUS PARÂMETROS
 
//CRIAR ARRAY PARA A FUNÇÃO PARA PODER ANALISAR OS DADOS, ETC
// array = [];
// array.push = (p1, p2...)
// console.log(array);

// //PROTOTYPE
// Pokemon.prototype.jogarBola = function(){
//   console.log('EITA')
// }

// const complex = [
//   {user:234, name: 'Marcia', idade:40, hobbies: ['dançar', 'comer', 'falar']},
//   {user:235, name: 'Lorena', idade:20, hobbies: ['dançar', 'assistir tv', 'estudar']},
//   {user:236, name: 'Patricia', idade:24, hobbies: ['correr', 'acampar', 'surfar']},
//   {user:237, name: 'Mariana', idade:15, hobbies: ['skate', 'bicicleta', 'break dance']},
//   {user:238, name: 'Isis', idade:34, hobbies: ['ler', 'escrever', 'discutir']},
//   {user:239, name: 'Pietra', idade:23, hobbies: ['jogar dominó', 'sinuca', 'cartas']}
// ]

// complex[complex.length-1] //último objeto da array
// {user:234, name: 'Marcia', idade:40, hobbies: ['dançar', 'comer', 'falar']},

// complex[complex.length-1].name
// "Pietra"
// complex[complex.length-1].idade
// 23
// complex[complex.length-1].hobbies[1]
// "sinuca"

// const arr = [2,3,5,6].map(function(item){
//   console.log(item + 1) //ele mapeia e soma +1 a cada item da array
// })

// const novaArr = arr.map(function(item){
// return item + 2
// })

