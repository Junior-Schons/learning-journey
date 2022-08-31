//metodo toFixed() arredonda o numero para um determinado numero de digitos
let x = 9.66;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));
//to fixed(2) é perfeito para trabalhar com dinheiro.

//metodo valueOf() retorna um numero como um numero.
let nber = 123;

nber.valueOf();
(123).valueOf();
(100 + 23).valueOf();

console.log(nber);
//obs: o metodo valueOf() é usado internamente em javascript para converter objetos number em valores primitivos, não a razao para usalos em seu codigo, pois todos od tipos de dados javascript tem um metodo valueOf() e um toString()!!

//-------------------------------------------------------


