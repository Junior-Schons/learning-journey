//metodo introduzido na ciencia de dados em 1938.

const number = [40, 100, 26, 32, 40];
    for(let i = number.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i)
        let k = number[i]
        number[i] = number[j]
        number[j] = k
    }
    console.log(number)//o console exibira em ordem aleatoria os indices do array toda vez que for invocado.