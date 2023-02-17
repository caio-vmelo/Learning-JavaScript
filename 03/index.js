const nome1 = prompt("digite o nome do primeiro veiculo: ")
const veh1 = prompt("digite a velocidade do primeiro veiculo: ")

const nome2 = prompt("digite o nome do segundo veiculo: ")
const veh2 = prompt("digite a velocidade do segundo veiculo veiculo: ")


if(veh1 > veh2){
  alert("O mais rápido é o primeiro veículo com velocidade: " + veh1) 
}else if(veh2 > veh1){
  alert("O mais rápido é o segundo veículo com velocidade: "+ veh2) 
}else if(veh1 == veh2){
  alert("Ambos possuem a mesma velocidade")
}