//O getDay() metodo retorna o dia da semana como um numero entre 0 e 6 / Nesse exemplo para calcular o dia da semana nesse exemplo [domingo = 0, segunda = 1, terça = 2 ...]


let day;
switch (new Date().getDay()){    //
    case 0:
        day = 'domingo';
        break;
    case 1:
        day = 'segunda';
        break;
    case 2:
        day = 'terça';
        break;
    case 3:
        day = 'quarta';
        break;
    case 4:
        day = 'quinta';
        break;
    case 5:
        day = 'sexta';
        break;
    case 6:
        day = 'sabado';
}

console.log(day);
/*se nem uma condiçao for atendida podemos utilizar o default por exemplo:
let text;

default:
    text = 'looking forward to the weekend';

Obs:O default caso não precisa se o ultimo caso em um bloco de switch.
*/
