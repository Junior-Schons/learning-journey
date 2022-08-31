//O metodo keys() retorna uma objeto array iterator com as chaves de um array:

const fruits = ['banana', 'limao', ' laranja'];
 const keys = fruits.keys();
    let text = ''
    for (let x of keys){
        text += x + ',';
    }

console.log(text);

console.log('------------------')

//---------------------------------

//array entries() / crie um array iterator e em seguida itere sobre os pares de chaves/valor:
const fruits_2 = ['banana', 'maça', 'morango'];
  const f = fruits_2.entries();

    for (let x of f){
        console.log(x);//O console retornara um objeto array iterator com pares chave/valor
    }
//Obs:o metodo entries() nao altera a matriz original

//-----------------
console.log('------------')


//metodo includes()  permite se um elemento esta presente no array!
const fruits_3 = ['banana', 'limao', 'pera', 'morango'];

 console.log(fruits_3.includes('morango')); // O console retornara true