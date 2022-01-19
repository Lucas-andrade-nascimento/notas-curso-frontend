// 18 - objetos - propriedades 
// var aluno = {nome:"Lucas", notas:[7.5,5.8]
// }

// console.log(aluno.notas[0]);
// var novaprop = "sobrenome";
// //metodos de inserção de propriedades depois de criado: 
// aluno.matricula = 12345;
// aluno[novaprop] = "Andrade";
// console.log(aluno);

// var al = new Object();

// al.nome = "Joao";
// al.notas = [9, 8]; 

// console.log(al);

// aula 19 - objetos -  metodos
// function calcMd () {
//     return(this.notas[0] + this.notas[1])/2;

// }
// //o this referencia um objeto. colocado ele em uma função e rodando dentro do objeto, gera isso ai kk 
// var alu = {
//     nome: "Marcos",
//     notas: [8, 8],
//     media: calcMd
//  }
//  var alu1 = {
//     nome: "Tiago",
//     notas: [5, 8],
//     media: calcMd
//  }


//  console.log(alu.nome);
//  console.log(alu.media());

//  console.log(alu1.nome);
//  console.log(alu1.media());

 // 20 - objetos - construtores
 //isso abaixo nao é um objeto, ele retorna um objeto: 
// function criarAluno (nome, n1, n2){
//     return {  nome: nome,
//             nota1: n1,
//             nota2: n2,
//             media: function(){
//                 return (this.nota1 + this.nota2)/2;  
//             }

//     }
// }

// poderia representar assim: 
// var aluno = criarAluno("lucas", 8, 8.5);


//  var turma = [ 
//         criarAluno("Matheus", 8, 9),
//         criarAluno("lucas", 8, 8.5),
//         criarAluno("Laura", 6, 10),

//      ] 

//      var aluno = turma [0];
//      console.log(aluno);
//      console.log(aluno.media());

//     // for(var i = 0; i<turma.length; i++){

    // var aluno= turma[i];
    //  console.log(aluno);
    
    //  console.log("media: " + aluno.media());
    // }

//    for (var aluno of turma) {
//        console.log(aluno)
//        console.log("media:" + aluno.media()); }

// turma.forEach( function(elemento) {
    //     console.log(elemento);
    // })

// VAMOS AOS CONSTRUTORES DE OBJETOS DE FATO:

function aluno(nome, n1, n2) {

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function () {
        return (this.nota1 + this.nota2)/2;
    }
}

var a = new aluno("Lucas", 9, 9);
console.log(a.media());

//21 - resumo objetos

// se vc declarar var a = {}   é um objeto
//se declarar var a = []    é um array

// estrutura dos ojetos: abre chaves, propriedades, dois pontos, o valor da propriedade, virgula, outra propriedade, sucetivamente( var a = { nome:"lucas", sobrenome: "Andrade"})
// segunda maneira - função:
//cria a função: function obj(n, s) { return {nome:n, sobrenome: s}  }
// insere dados atraves da variave: var a = obj("lucas","andrade");     - ajuda a a automatizar

//3ª função sem retorno
// criação: function obj(n,s) { this.nome = n; this.sobrenome = s;} - this instancia a função mas nao tem return, pra inserção de objetos:
//inserção dos dados: 
//var a = new obj("lucas","andrade");

//modo de mostrar no console.log:
// 1-  console.log(a.nome);
// 2-  console.log(a["nome"]);

