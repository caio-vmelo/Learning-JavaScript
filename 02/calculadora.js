const entrada1 = prompt("informe o primeiro numero:");
const entrada2 = prompt("informe o segundo numero");

//transformando string em number
const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

//operações
const soma = x + y;
const sub = x - y;
const mult = x * y;
const divisao = x/y;

alert(
  "Resultados: \n" +
  "\nSoma: " + soma +
  "\nSubtração: " + sub +
  "\nMultiplicação: " + mult +
  "\nDivisao: " + divisao
)