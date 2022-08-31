//metodo match() pesquisa em busca de uma correspondencia com uma espressao regular e retorna as correspondencias como um objeto array!

let text = 'estou procurando e retornando uma expressao regular, esperando resultado';

let mtch = text.match(/and/g);

console.log(mtch);

//Se uma espressao regular nao incluir o modificador g (para realizar uma pesquisa global), o metodo match() retornara apenas a primeira correspondencia na string.

//tambem podemos fazer uma pesquisa global sem distinçao de maiusculas ne minusculas utilizando o modificador (gi)

let text2 = 'estou procurando e retornando uma expressao regular, esperando resultado, ESPERANDO';

let mtch2 = text2.match(/and/gi);

console.log(mtch2);