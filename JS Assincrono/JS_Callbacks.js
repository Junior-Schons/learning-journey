function myDisplayer(some){   //As funçoes javascript sao executadas na ORDEM em que sao chamadas!
    console.log(some);
}


function myFirst(){
    myDisplayer('Hello');
}
function mySecond(){
    myDisplayer('Goodbye');
}

//myFirst();
mySecond();
myFirst();
//-------------------------------------------------------
console.log('-------------------------------------------')
//Você pode chamar uma funçao de calculadora(myCalculator), salvar o resultado e depois chamar outra funçao(myDisplay) para exibir um resultado:
function myDisplay(result){
    console.log(result);
}

function myCalculator(num1, num2){
    let soma = num1 + num2;
    return soma;
}

let resultado = myCalculator(5,5);
myDisplay(resultado);

//--------------
//Ou voce pode chamar uma funçao de calculadora e deixar a funçao de calculadora chamar a funçao de exibiçao.
console.log('------------------------------')
function myDisplay2(result){
    console.log(result);
}
function myCalculator2(num1, num2){
    let soma2 = num1 - num2;
    myDisplay2(soma2);
}
myCalculator2(8, 6);
