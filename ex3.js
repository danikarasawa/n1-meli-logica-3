//objetos

// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {
    nomeInternacional: aron,
    nomeJapao: cokodora,
    evolucao: ovo,
    numeroHoenn: 070,
    tipoPokeAço: true,
    pokeFala1: function() {
        console.log('Oi, meu nome é ' + pokemon.nomeInternacional + 'e meu nome em japonês é ' + pokemon.nomeJapao);
    }
    pokeFala2: function() {
        console.log('Esse Pokemon sabe voar? S/N')
        if('S'){

        }else{
            console.log('Desculpa, nao sei voar');
        }        
    }
    actionPoke: ["FIGHT", "BAG", "RUN"]
    let random: (random) Math.random(actionPoke)

    acao: function(){
        console.log('Cabeçada de Pedra!')
    }
    pergunta: function(){
        console.log('O que o ' + pokemon.nomeInternacional + ' vai fazer?')
        return acao;
    }
};

for(const item in pokemon){
	console.log(pokemon[item])
}

for(const item in pokemon){
	console.log(item, pokemon[item])
}

// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.

// 7.
// Printe todas as propriedades
// do seu pokemon no console.

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor

//9 Faça uma função construtora de pokemon
