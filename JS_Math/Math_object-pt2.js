//Math.min() e Math.max() pode ser usado para encontrar o valor mais baixo ou mais alto em uma lista de argumentos:
console.log(Math.min(0, 150, 30, 20, -8, -200)); // O console trara -200.

console.log(Math.max(200, 3, 33, 24, -490, 20)); // O console trara 200.

//-----------------------------------

console.log('console Math.randow()-------------')
//Math.randow()retorna um numero aleatorio entre 0(inclusive) e 1(inclusive).
console.log(Math.random())


// Inteiros aleatarios Math.randow() usado com Math.floor() pode ser usado para retornar numeros inteiros aleatorios.

console.log(Math.floor(Math.random() * 10))//O console trara um resultado aleatorio de um numero inteiro entre 0 e 9.
//--------------------------------
console.log('console function---------------------')

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(0, 10))// O console trara o resultado da funçao com os parametros passados e retornara um numero aleatorio entre 0 a 9.

//-----------------------------
