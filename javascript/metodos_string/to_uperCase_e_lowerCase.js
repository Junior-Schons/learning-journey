var nome = 'junior';

var nome_toUpper = nome.toUpperCase();//metodo upperCase transforma uma string to em letras maiusculas!

console.log(nome_toUpper);
//-------------------------------------

const lista = ['banana','limão','laranja'];

let lista_M = lista[1].toUpperCase(); //usando o metodo upperCase em um item especifico dentro de um array!

console.log(lista_M);
//-------------------------------------

let pessoa = {
    nome:'junior',
    sobreNome:'schons'
};

let nameUpper = pessoa.nome.toUpperCase();//usando o metodo upperCase dentro d um objeto;

console.log(nameUpper);


//tambem podemos utilizar o metodo toLowerCase para transformar a string em minusculas!

let nome_M = 'JUNIOR';

let nome_m = nome_M.toLowerCase();//metodo toLowerCse altera a string dentro da variavel nome_M.

console.log(nome_m);//o console ira imprimir a string em letras minusculas!

