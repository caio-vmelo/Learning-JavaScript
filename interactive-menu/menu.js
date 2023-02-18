alert("Chose one option: \n 1 - 2 - 3 - 4 - 5" + "\n" 
+ "the 5 option close the program")

let option = ""

do{
  option = prompt("enter you option here")

  switch(option){
    case "1":
      alert("You chose the option 1")
      break
    case "2":
      alert("You chose the option 2")
      break
    case "3":
      alert("You chose the option 3")
      break
    case "4":
      alert("You chose the option 4")
      break
    case "5":
      alert("You chose close the program")
      alert("closing...")
      break
    default:
      alert("invalid option!")
  }
}while(option !== "5")