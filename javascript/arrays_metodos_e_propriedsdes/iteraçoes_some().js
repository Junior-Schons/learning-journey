// metodo some() verifica se algum dos valores do array passam no teste

const numbers = [4,2,11,7,44];
let someNbrs18 = numbers.some(myFunction)

function myFunction(value){
    return value > 18;
}

console.log(someNbrs18)//Se um dos valores atender a expressao o console retornara true!
