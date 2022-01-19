// pra executar ess codigo no console, faça o link dele no index.html
// isso é pra mandar pra pagina mas so pra aparecer no console do chrome: console.log("Hello Wolrd");
/* var a = "Placa de captura";
a = "hd";  2ª forma de declarar uma var. Vai sempre mostrar oq foi recebido por ultimo. 
console.log(a); */

var nota1 = 4.0;
var nota2 = 7.5;

var media = (nota1 + nota2)/2;
var conceito ="";

if (media >=8) {
    conceito = "Ótimo";
    //console.log("voce passou com média " + media);
}
else if (media>=6.5) {
    conceito = "Bom";
    // console.log(media);

}
else {
    conceito ="Regular";
    // console.log("sua nota foi " + media + " nao foi suficiente para passar");
}
conceito = "Mais ou menos";
console.log("sua média foi: " + media);
console.log("Seu conceito foi: " + conceito);
switch (conceito){
    case "Ótimo":
        console.log("parabens, voce é um otimo aluno");
    break;
    case "Bom":
        console.log("voce está quase la!");
    break;
    case "Regular": 
        console.log("Estudde mais um pouco");
    break;      
    default:
        console.log("algo de errado nao esta certo"); 
    break;    
}