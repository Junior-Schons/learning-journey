const numbers = [45, 4, 9, 16, 25];
let txt = "";

numbers.forEach(myFunction);//O forEach() metodo chama uma funçao (uma funçao de retorno de chamada) uma vez para cada elemento da matriz

function myFunction(value, index, array){ //A funçao forEach chamara a funçao que ira percorrer o Array.
    txt += value + ","
}
console.log(txt);//O console exibira resultado
