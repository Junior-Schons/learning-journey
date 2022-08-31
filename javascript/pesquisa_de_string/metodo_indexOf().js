//o metodo indexOf() retorna o indice/(posiçao) da string especifica na sua primeira ocorrencia! 
let strg = 'Você esta procurando uma string';

console.log(strg.indexOf('esta'))//o console exibira o indice/(posiçao) da palavra, lembrando que no javascript começa a contar a partir de zero!

console.log("----------------------------")

const lista = ['processador', 'placa de video', 'memoria'];

console.log(lista.indexOf('memoria'))//o metodo indexOf() aplicado retornara o indice onde a palavra esta!

//obs:tambem podemos usar outros metodos de pesquisa como lastIndexOf() que retorna a ultima posiçao da palavra especificada.

//obs:se a palavra nao for encontrada ele retornara o indice -1.

//obs:tambem podemos utilizar um segundo parametro de pesquisa por exemplo  strg.lastIndexOf('esta', 15) que por sua vez ira buscar a palavra especifica da posiçao 15 até o inicio da string.

//obs: