//metodo concat() faz a concatenação de duas ou mais strings retornando uma nome string!
let texto = 'junior schons';
let texto2 = 'chapeco - SC';

texto3 = texto.concat(',', " ",texto2);
console.log(texto3);

//OBS: todos os metodos retornam uma nova string. Eles nao modificam a string original,
//strings são imutaveis: strings nao podem ser alteradas apenas substituidas

const lista = ['processador','placa de video','memoria RAM'];

const O_S = ['windows','linux'];

let metConcat = lista.concat(O_S);//metodo concat unindo as strings contidas dentro de arrays.

console.log(metConcat)//console exibira o resultado do metodo aplicado.