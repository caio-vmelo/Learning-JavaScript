const deck = []
let option = ""

do{
  option = prompt(
    "Cards in the deck: " + deck.length + 
    "\n1. Add one card." +
    "\n2. Pull a card." +
    "\n3. Exit."
  )

  switch(option){
    case "1":
      const newCard = prompt("What is the card?")
      deck.push(newCard)
      break
    case "2":
      const pulledCard = deck.pop()
      if(!pulledCard){
        alert("There are no cards!")
      }else{
        alert("you pulled a " + pulledCard)
      }
      break
    case "3":
      alert("exiting...")
      break
    default:
      alert("invalid option!")
  }
}while(option !== "3")