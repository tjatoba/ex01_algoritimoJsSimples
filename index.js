const myName = "Thiago";
const lastName = "Jatobá";
const currentYear = new Date().getFullYear();
const age = 43;

const born = currentYear - age;

const message = `Olá, meu nome é ${myName} ${lastName} e nasci em ${born}`;

console.log(message);

var meuNome = prompt("Digite seu nome: ");

console.log(meuNome);

var num1 = prompt("Digite um numero: ");
var num2 = prompt("Digite outro numero: ");

var resultado = parseInt(num1) + parseInt(num2);

alert(resultado);
