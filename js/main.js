
function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";
    // alert("Obrigada por clicar")
}

function redirecionar(){
    window.open("https://www.linkedin.com/feed/");
   // window.location.href="https://www.linkedin.com/feed/";
}

function trocar(elemento){
  elemento.innerHTML = "Obrigada por passar"
  
    //  document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
  //  alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  //  alert("trocar texto");
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Digite sua idade: ");
console.log(validaIdade(idade));

*/

/*
function soma(n1,n2){
    return n1+n2;
}
console.log(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
console.log(setReplace("Asheley é linda", "linda", "maravilhosa"));
*/

/*
Trabalhando com Datas
var d = new Date();
console.log(d);
console.log(d.getHours());
console.log(d.getDate());
console.log(d.getMonth()+1);
*/
/*
REPETIÇÃO COM FOR
var count;
for(count = 0; count<=5; count++){
    console.log(count);
}
*/

/*
REPETIÇÃO COM WHILE
var count = 0;
while(count < 5){
    console.log(count);
    count ++;
}
*/


/*IF-ELSE
var idade = prompt("Digite sua idade");
if (idade>=18){
    alert("Maior de Idade");
}else {
    alert("Menor de idade");
};
*/

/*
DICIONARIO
var frutas = [{ nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(frutas);
*/

/*
ARRAY
var fruta = { nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
*/

/*
var lista = ["maça", "pêra","laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "))
*/

/*
var nome = "Asheley Emmy";
var n1 = 10;
var n2 = 15;

//alert("Bem vindo " + nome)

console.log(nome);
console.log(n1+n2);
console.log(nome.toUpperCase());
console.log(nome.replace("Emmy", "Lacerda"))
*/