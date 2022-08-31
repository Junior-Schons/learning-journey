//O metodo split() converte uma string em um array!
let text = 'a, b, c, d, e';

const myArray = text.split(',');//usando o metodo split() com a virgula ele separa todos os itens dentro da variavel, sendo possivel acessar cada um deles pelos seu indices!

console.log(myArray)//exibira o array
console.log('------------------------------------------')
console.log(myArray[1]);//O console exibira o resultado contido do segundo indice do array!

//------------------------------------------
console.log('------------------------------------------')
let text_2 = 'a, b, c, d, e';

const myArray_2 = text_2.split('|') //se usarmos a barra vertical/('pipe') ele transforma a string inteira em um unico indice!

console.log(myArray_2[0])////exibira o array contido na variavel!

//Obs: se tentarmos acesar outro indice ele retornara undefined!