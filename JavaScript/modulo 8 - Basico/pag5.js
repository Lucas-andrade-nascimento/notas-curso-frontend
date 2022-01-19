// 22 - Datas (que sao objetos)

// var d = new Date();
// console.log(d);
//resultado: Wed Jan 12 2022 08:27:16 GMT-0300 (Horário Padrão de Brasília)

/* pra mostrar so alguns dados do objeto data, se liga na ordem:
Date(year, month, day, hours, minutes, seconds, milliseconds);      */

// var d = new Date(1993, 08);
// console.log(d);
// se voce passar so um valor no date (ex: Date(2018)), o objeto vai contar os milisegundos e da pra fazer ops matemacicas (soma, etc) dentro do argumento do Date.

//outra forma de lancar (passando uma string):
// var d = new Date("sep 05 2016 23:50");
// console.log(d);
// var d = new Date("02 05 2016 23:50");
// console.log(d);
// var d = new Date("02/10/2000 23:50");
// console.log(d);
var d = new Date("08-15-2001 21:50");
console.log(d);
// var ano = new Date("2000"); //retorna o ultimo dia do ano anterior.

//se tentar o padrao brasileiro (dia/mes/ano), dá data invalida

//maneiras de mostrar hora com os metodos de Data (porq é uma função)

console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getDay()); // dia da semana sendo 0 - domingo e 6 - sabado. Tipo um array 

var dia = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex","Sab"]; // esse arrray mostra o dia da semana ;)
console.log(dia[d.getDay()]); 

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getMonth()); // o mes é no mesmo pique de dia da semana (0 - jan e 11 - dez), da pra fazer um array q nem o de dia da semana

console.log(d.getTime()); // retorna a quantidade de milissegundos daquela data

//invés de 'get', usar 'set', para alterar qualquer campo do objeto .
console.log(d.setHours(09));
console.log(d);

//23 - const, let, e var 
//cons e let foram inseridos na versao ES6 do js ou emscript2015.

var numero1 = 4;
let numero2 = 5;
const numero3 = 6; // constante - uma vez atribuida, nao pode ser reatribuida. dependendo, o valor pode mudar, mas ela naopode ser atribuida exemplo:
const num3 = [4];
num3.push(7);
console.log(num3);
// ou seja, eu atribui a const num3 um array, mas consigo add coisas a ela, mas nao modificar o fato q  ela é um array.
//da pra fazer a mesma coisa com um objeto
const nom = {};
nom.nome="lucas";
console.log(nom);
//acima, foi adicionado uma propriedade (nome) ao objeto
// se fizesse --> nom = {nome:"lucas"}; daria erro por isso seria atribuir novamente a const um novo objeto

// ou seja, pra alterar um booleano ou o valor de um numero, nao dá no const porq seria reatribuir, mas há como modificar.
console.log(numero1);
console.log(numero2);
console.log(numero3);
 /* o let é diferente do var no escopo (onde a variavel existe e nao existe).

* Funções possuem um escopo mais fechado. mesmo uma var criada dentro do bloco de uma função, so existira ali dentro.
tano o let (variavel local) quanto o const, sao inseridos com escopo local. se tu criar um let ou const num if, for switch, while (ferramentax's q abrem um bloco { }), a variavel let so existira dentrro dele 
diferente da var q é uma variavel global 
e da pra acessar de qqr lugar do seu codigo
 */
