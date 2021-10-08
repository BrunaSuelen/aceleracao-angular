import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


/*-------------- criar carros --------------*/
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

/*---------------montar a lista de carros da concessionaria -------------*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/*-----------  exibir a lista de carros da concessionaria ---------------*/
// console.log(concessionaria.mostrarListaDeCarros())

/*---------------- comprar carro ------------------------------*/
let cliente = new Pessoa('Joao', 'veloster')
console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())

