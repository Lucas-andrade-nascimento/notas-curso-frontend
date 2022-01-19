// essa pagina começa da aula 14 - arrays 
var alunos =  new Array("Igor","Jose","Maria","Andreia");
console.log(alunos[0]);
var maisAlunos = ["Igor","Jose","Maria","Andreia","matheus"];
console.log(maisAlunos);
console.log(maisAlunos.length); /* tamanho do array */

for (var i = 0; i<alunos.length; i++) {
    console.log(alunos[i])
}
console.log("outro loop: ", '\n'," " );
//outra forma de fazer esse loop:
for (var i in alunos) {
    console.log(alunos[i])
}
console.log("mais um loop: ", '\n'," " );

for (var aluno of alunos) {
    console.log(aluno);
}

// aula 15 - funções
function media(n1,n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
// console.log(media);  ---> exibe tambem a media, mas sem armazenar em outra variavel (que tem seus usos).
    return media;
}
// para executar função acima: media ();
var resultado1 = media(9, 7);
console.log(resultado1 + " fim do exemplo 1 - funções") ;

// aula 16 - funções 2 

//no Js, uma função pode ser tambem uma variavel 
// se voce atribuir uma função a uma variavel sem colocar na atribuição o parenteses ( função () ), voce vai ta atribuindo a variavel a função inteira, nao o retorno dela. Ou seja, a função vira a variavel
function media(n1,n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;
}
var resultado = media(6, 7); // o resultado (return) da função vai para a variavel. A função é executada e a var armazena o retorno.
var m = media; // a função vai para dentro da var e é executada toda dentro da var, mostrando o mesmo resultado (returnt).

var resultado2 = m(2, 3); 

console.log(resultado);
console.log(resultado2);
console.log("Fim exemplo 2");

//função anonima: 
var media = function (n1, n2){
    return (n1 + n2) / 2;

}
/* var m = media(5, 6);
console log(m); 
isso é a mesma coisa que o abaixo:  */

console.log(media(5, 6));

