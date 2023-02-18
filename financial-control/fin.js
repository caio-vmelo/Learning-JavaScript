let balance = prompt("Enter the initial amount of money: ")
balance = parseFloat(balance)
let option = ""

do{
  option = prompt(
    "Avaliable balance: " + balance +
    "\n1. Add money" +
    "\n2. Remove money" +
    "\n3. Exit"
  )

    switch(option){
      case "1":
        balance += parseFloat(prompt("enter the value to be added: "))
        break
      case "2":
        balance -= prompt("enter the value to be removed: ")
        break
      case "3":
        alert("exiting...")
        break    
      default:
        alert("invalid option!")
    }

}while(option !== "3")


