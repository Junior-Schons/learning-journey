//Reverse metodo que inverte os elementos em uma matriz / voce pode usalo para classificar uma matriz em ordem decrescente.
const frutas = ['banana', 'laranja', 'limao'];

console.log(frutas.sort());
console.log(frutas.reverse());

//classifica uma matriz decrescente:
const numeros = [30, 44, 1, 3, 5, 6];
console.log(numeros.sort(function(a,b){return b - a}));//se invertermos o return para {a - b} o console trara o resultado em ordem crescente!
console.log('---------------------------')
//------------------------------------------
const pontos = [40, 100, 29, 32];

console.log(pontos.sort(function(a, b){
    return 0.5 - Math.random(); //metodo random traz os indices da matriz de forma aleatoria!
}))