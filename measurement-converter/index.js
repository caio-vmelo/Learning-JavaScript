const medida = prompt("Insira uma medida em metros")

const unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
  "\n1.milimetro (mm)" +
  "\n2.centimetros (cm)" +
  "\n3.decimetros (dm)" +
  "\n4.decametros (dam)" +
  "\n5.hectometros (hm)" +
  "\n6.quilometros (km)"  
  )

switch(unidade){
  case "1":
    alert("resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
  case "2":
    alert("resultado: " + medida + "m = " + medida * 100 + "mm")
    break
  case "3":
    alert("resultado: " + medida + "m = " + medida * 10 + "mm")
    break
  case "4":
    alert("resultado: " + medida + "m = " + medida / 10 + "mm")
    break
  case "5":
    alert("resultado: " + medida + "m = " + medida / 100 + "mm")
    break
  case "6":
    alert("resultado: " + medida + "m = " + medida / 1000 + "mm")
    break
  default:
    alert("opção inválida") 
}
