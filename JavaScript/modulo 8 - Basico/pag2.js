// pagina pra dividir os codigos vistos em aula... esse é a partir da aula 13
var num = 5;

for ( var i = 0; i < num; i++) {
    console.log("executando o for pela  " + i + "ª vez.");

}
console.log("Acabou");
/*
 while (num <10) {
    console.log("Numero" + num);
}
O while tbm é uma estrutura de repetição mas é necessario cuidado com ela pois pode gerar um loop infinito (bug) e travar a bagaça toda */
while (num <10) {
    console.log("Numero" + num);
    num ++;
}
console.log("Acabou");
 var numero = Math.random() * 100;

 while (numero <90){

    console.log(numero);
    numero = Math.random() * 100;
 }
 console.log(numero);
 console.log("Acabou");
