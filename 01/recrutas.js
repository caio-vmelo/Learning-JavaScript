const primeiroNome = prompt("insira o primeiro nome do recruta: ");
const sobrenome = prompt("informe o sobrenome do recruta");
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
const anoNascimento = prompt("Qual o ano de nascimento do recruta");

alert(
  "Recruta cadastrado com sucesso! \n" + 
  "\nNome completo: " + primeiroNome + " " + sobrenome +
  "\nCampo de estudo: " + campoDeEstudo + 
  "\nIdade: " + (2023 - anoNascimento)
)