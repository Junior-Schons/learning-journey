//loops sao uteis, se voce quiser executar o mesmo codigo varias vezes, cada vez com um valor diferente.
//muitas vezes, esse é o caso ao trabalhar com matrizes:
 const cars = ['BMW', 'audi', 'ferrari', 'fiat'];
    let text= '';
    for (let i = 0; i < cars.length; i++){
        text += cars[i] + '\n\r ';
    }

console.log(text);

/*
JavaScript suporta diferentes tipos de loops:
 
* for - percorre um bloco de codigo varias vezes.
* for/in - percorre as propriedades de um objeto.
* for/of - percorre os valores de um objeto iteravel.
* while - percorre um bloco de codigo enquanto uma condiçao especificada é verdadeira.
* do/while - tambem percorre um bloco de codigo enquanto uma condiçao especificada for verdadeira.

*/
let number = '';
    for(let i = 0; i <= 20; i++){             //A estrutura de repetiçao ira percorrer o codigo até o numero for igual a 20.
        number += 'the numbers is ' + i + '\n'
    }
console.log(number);
//--------------------

const cars_2 = ['Volvo', 'Fiat', 'Audi'];
    let i, len, tex;
       for(i = 0, len = cars_2.length, tex = ''; i < len; i++){
        tex += cars_2[i] + '\n'
       }
console.log(tex);

//normalmente voce usara a expressao 1 para inicializar a variavel usada no loop (let = 0).
//isso nem sempre é o caso, o javascript nao se importa. a expressao 1 é opcional.
//voce pode iniciar muitos valores na expressao 1 (separados por virgula).
console.log('-------------------------------------')
//voce pode omitir a expressao 1 (como quando seus valores sao definidos antes do inicio do loop):

const cars_3 = ['fusca','chevete','onix','corsa'];

let i_2 = 2;
let len_2 = cars_3.length;
let text2 = '';

       for(; i_2 < len_2; i_2++){
        text2 += cars_3[i_2] + '\n'
       }

    console.log(text2)
