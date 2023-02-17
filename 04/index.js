const atacante = prompt("Qual é o nome do personagem atacante?")
const poderAtaque = prompt("Qual é o poder de ataque do atacante?")

const defensor = prompt("Qual o nome do personagem defensor?")
let pontosDeVida = prompt("Quantos pontos de vida ele possui?")
const poderDefesa = prompt("Qual o poder de defesa?")
const possuiEscudo = prompt("Ele possui um escudo? (s/n)")

let danoCausado = 0

if(poderAtaque > poderDefesa && possuiEscudo === "n") {
  danoCausado = poderAtaque - poderDefesa
}else if(poderAtaque > poderDefesa && possuiEscudo ==="s"){
  danoCausado = (poderAtaque - poderDefesa) / 2 
}

pontosDeVida -= danoCausado


alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida + 
  "\nPoder de defesa: " + poderDefesa + "\nPossui escudo: " + possuiEscudo
)