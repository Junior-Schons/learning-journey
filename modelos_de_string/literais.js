//Os literais usam acento graves(``) em vez das aspas '' para definir uma string
let strg = `Hello word!`;

//citaçoes dentro de strings, pode-se usar aspas simples dentro de uma string

let text = `he's often called "jhony"`;

//literais permitem strings de varias linhas:

let text_2 = 
`o chute
atravessou o
estadio de 
futebol`;

//interpolaçao os literais fornecem uma maneira mais facil de interpolar variaveis e espressoes em strings
let firstName = 'junior';
let lastName = 'schons';

let text_3 = `Bem vindo, ${firstName} ${lastName}, seja bem vindo `;
console.log(text_3);
//obs:com a sintaxe ${...} nao e necessario fazer a concatenaçao de strings e variaveis com o operador '+' deixando a leitura do codigo mais facil

//literais permitem espressoes em strings:
let price = 10;
let vat = 0.25;

let total = `Total:${(price * (1 + vat)).toFixed(2)}`;
console.log(total);

