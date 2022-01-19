//window é uma função gigante, cheia de metodos e propriedades que vamos usar dele sem declara-lo
// 3- document
console.log(document); //mostra o documento html no inspesionar
//4- dom - document object model
// toda tag html pode virar um objeto no js e ser manipulada nisso
//5 - acessando elementos hmlt com js
//acessa os html pelo js no console com o "document"
//6-  modiificando elementos
/* tem como pegar tbm um id ou uma clas ou uma tag com umas propriedades do document
ex: let p = document.getElementByClassName("paragrafo");
isso insere todas as tags q estao usando essa classe no 'let p' e é possivel ver e modificar ela no console (provavelmente no js tbm);

pra essa aula, o foco sao 3 ferramentas

p.innerHtml - recebe um html, ou seja, pode-se usa-lo para colocar um '<h2>Conteudo</h2>, e ele ira mudar as caracteristicas do texto (como um html de fato)

p.innerText - mostra todo o texto visivel do documento, tudo q tiver com display:none; por exemplo nao aparece no console com essa ferramenta

p.textContent - mostra o que ta e o que nao ta visivel (todo conteudo do documento html).

*p é o nome da variavel
o setAttribute("..."); permite criar e modificar atributos do html no console

p.style - permite mudar o css do html  no js

*/
// 7 - eventos - parte 1/3 DOM events
