// aula 17 - juntando tudo 
//nome do aluno - nota 1 - nota 2 - media - aprovado/reprovado 

var nomes = ["Lucas", "Kemilly", "Roberto"];
var notasA = [7.0, 6.5, 9.5 ];
var notasB = [8.0, 2.0, 8.5];

function media(n1,n2) {
    return (n1 + n2)/2
}
function passou(media){
    if (media >= 6.0){
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}
for (var index in nomes) {

    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var md = media(nota1, nota2);

    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - media: " + md + " - " + passou(md));


}    
