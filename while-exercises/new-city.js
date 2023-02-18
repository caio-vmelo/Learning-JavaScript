const tourist = prompt("Hi, tourist! What is your name?")
let cities = ""
let counter = 0

let continuee = prompt("did tou visit any cities? (y/n)")

while(continuee === "y"){
  let city = prompt("What is the name of the city visited?")
  //cities = city + ...
  cities += " - " + city + "\n"
  counter++
  continuee = prompt("did you visit any other cities? (y/n)")
}

alert(
  "Tourist: " + tourist + 
  "\nNumber of visited cities: " + counter +
  "\nVisited cities:\n" + cities
)