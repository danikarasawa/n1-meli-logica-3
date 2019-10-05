// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento) [area é propriedade]

function Terreno(largura, comprimento) { //essas são propriedades e não variáveis! CUIDADO!!
    this.largura = largura //paramentro precisa ser repetido
    this.comprimento = comprimento //não colocar string vazia, nem zero
    this.area = largura * comprimento
}

// 2 - crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais
// - mostrarInfos -> que mostra a area e o preço do terreno

Terreno.prototype.calcularPreco = function () {
    this.preco = this.area * 1000
}

Terreno.prototype.mostrarInfos = function () {
    console.log(`A área é ${this.area} e o preço dela é R$${this.preco}`)
}

// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)

const t1 = new Terreno(100, 200)
const t2 = new Terreno(50, 65)
const t3 = new Terreno(165, 250)
const t4 = new Terreno(75, 80)
const t5 = new Terreno(250, 410)

// 4 - use a função calcular preco para que todas as instancias tenham seus precos

t1.calcularPreco()
t2.calcularPreco()
t3.calcularPreco()
t4.calcularPreco()
t5.calcularPreco()

console.log(t3);

// 5 - crie uma array vazia chamada terrenos

const terrenos = [];

// 6 - insira as instancias criadas (que os precos já tenham sido calculados) na array terrrenos

terrenos.push(t1, t2, t3, t4, t5)
console.log(terrenos)

// 7 - Imprima na tela o último terreno da array terrenos

console.log(terrenos[terrenos.length - 1])

// 8 - Imprima a area do terceiro item da array terrenos

console.log(terrenos[2].area)

// 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos

//CODIGO DA NATY
for (const item of terrenos) {
    console.log(item.mostrarInfos())
}

//CODIGO DA ALINE
// for (let i = 0; i < terrenos.length; i++) {
//     console.log(terrenos[i].mostrarInfos())
// }

//MINHA TENTATIVA SEM LOOP E QUE FUNCIONA
// t1.mostrarInfos()
// t2.mostrarInfos()
// t3.mostrarInfos()
// t4.mostrarInfos()
// t5.mostrarInfos()

// console.log(terrenos)

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro

// terrenos.map(function (a, b) {
//     return (a - b)
// })

function ordenaTerrenos(arrTerrenos) {
    const ordenados = arrTerrenos.sort(function (a, b) {
        return a.preco - b.preco
    })
}

ordenaTerrenos(terrenos)
console.log(ordenados)

// for (let i = 0; i < terrenos.length; i++) {
//     for (let j = 0; j < terrenos.length; j++) {
//         if (terrenos[j] > terrenos[j + 1]) {
//             const aux = terrenos[j]
//             terrenos[j] = terrenos[j + 1]
//             terrenos[j + 1] = aux
//         }
//     }
// }

// 11 - Crie uma função que Imprima o mais barato
<<<<<<< HEAD

console.log(ordenados[0], ordenados[ordenados.length-1])
// 12 - Crie uma função que Imprima o mais caro
=======
// 12 - Crie uma função que Imprima o mais caro.

function Terreno(largura, comprimento) {
  this.largura = largura
  this.comprimento = comprimento
  this.area = largura * comprimento
}

Terreno.prototype.calcularPreco = function() {
  this.preco = this.area * 1000
}

Terreno.prototype.mostrarInfos = function() {
  console.log(`a area é ${this.area} e o preco é: ${this.preco}`)
}

const t1 = new Terreno(30, 20)
const t2 = new Terreno(10, 50)
const t3 = new Terreno(34, 200)
const t4 = new Terreno(33, 19)
const t5 = new Terreno(3, 2)

t1.calcularPreco()
t2.calcularPreco()
t3.calcularPreco()
t4.calcularPreco()
t5.calcularPreco()

const terrenos = []
terrenos.push(t1, t2, t3, t4, t5)

// console.log(terrenos)
// console.log(terrenos[2])

// for (const item of terrenos) {
//   console.log(item.mostrarInfos()
// }

// for (let i = 0; i < terrenos.length; i++) {
//   console.log(terrenos[i].mostrarInfos())
// }

function ordenaTerrenos(arrTerrenos) {
  const ordenados = arrTerrenos.sort(function(a, b) {
    return a.preco - b.preco
  })
  console.log(ordenados[0], ordenados[ordenados.length - 1])
}

ordenaTerrenos(terrenos)
>>>>>>> 269b92f2cb0ed60d30fc2ab02eaf548a0ebc358e
