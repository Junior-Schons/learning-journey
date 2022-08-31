//O metodo map() cria um novo array executando uma funçao em cada elemento array
//nesse exemplo multiplica cada valor da matriz por 2:
const numbers = [25, 40, 33, 20, 10];
 const numbers_2 = numbers.map(myFunction);

 function myFunction(value, index, array){
    return value * 2;
 }
 console.log(numbers_2); 

//metodo filter() cria uma novo matriz com elementos de matriz que passam em um teste.
//nesse exemplo cria uma nova matriz de elementos com um valor maior que 18:
const numbers3 = [45, 40, 22, 4, 5,10];
const over18 = numbers3.filter(myFunction2)

function myFunction2(value, index, array){
    return value > 18;
}
console.log(over18);













