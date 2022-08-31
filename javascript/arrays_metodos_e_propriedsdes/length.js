//propriedade length retorna o numero de elementos do array
const cars = ['ferrari', 'onix', 'lancer', 'cobalt'];

console.log(cars.length);//o console exibira quantos elementos ha dentro do array!

console.log('--------------------------------------')

//A propridade length tambem tem outras funcionalidades, mas é mais comum usar em laços para seguir todos os itens em um array!
let sequence = [1, 1, 2, 3, 5, 8, 13];
    for (var i = 0; i < sequence.length; i++){
        console.log(sequence[i]);
    };

//exemplo de codigo para utilizar no HTML:
/*
<script>
    let cars = ['ferrari', 'fusca', 'lancer']
    let carsLength = cars.length;

    let text = '<ul>;
    for (let i = 0; i < carsLength; i++){
        text += '<li>' + fruits[i] + '</li>;
    }
    text += '</ul>
 document.getElementById('teste').innerHTML = text;
</script>
*/