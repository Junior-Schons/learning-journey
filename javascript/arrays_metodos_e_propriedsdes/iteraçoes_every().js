//metodo every() verifica se todos os vetores do array passam em um teste:
const numbers = [28, 30, 29, 50, 45];
let allOver18 = numbers.every(myFunction);

function myFunction (value){
    return value > 18
}
console.log(allOver18)//O metodo sempre retornara true ou false!

