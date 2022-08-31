//metodo find() retorna o valor do primeiro elemento da matriz que passa em uma funçao:
const numbers = [2, 40, 28, 10, 33];
 let findIndx = numbers.find(myFunction);

function myFunction(value){
    return value > 18
}
console.log(findIndx);

//metodo find() e um recurso do ES6 ja e suportado em todos os navegadores modernos!

//OBS: Tambem podemos usar o metodo findIndex(), que ao inves de retornar o valor do indice retornara a posicao do indice.

//metodo array.from() esse metodo retorna um objeto array de qualquer objeto com uma propridade length ou qualquer objeto iteravel:

const myArray = Array.from('ABCDEF');

console.log(myArray);
