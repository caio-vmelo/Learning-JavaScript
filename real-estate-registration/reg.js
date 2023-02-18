const properties = []
let option = ""

do{
  option = prompt(
  "Welcome to the real estate registration!\n" +
  "Total properties: " + properties.length +
  "\n\n" +
  "Chose one option: " +
  "\n1. New property." +
  "\n2. Property list." +
  "\n3. Exit."
  )

  switch(option){
    case "1":
      const property = {}

      property.owner = prompt("provide the name of the owner:")
      property.rooms = prompt("how many rooms does the property have?")
      property.bathrooms = prompt("how many bathroooms does the property have?")
      property.garage = prompt("does the property have a garage? (y/n)")

      const confirmm = confirm(
        "Save this property?\n" +
        "\nOwner: " + property.owner +
        "\nRooms: " + property.rooms +
        "\nBathrooms: " + property.bathrooms +
        "\nHave garage?: " + property.garage
      )
      if(confirm){
        properties.push(property)
        alert("Property saved with succes!")
      }else{
        alert("returning to the menu")
      }
      break
    case "2":
      for(let i = 0; i < properties.length; i++){
        alert(
          "Property " + (i + 1) + 
          "\nOwner: " + properties[i].owner +
          "\nRooms: " + properties[i].rooms +
          "\nBathrooms: " + properties[i].bathrooms +
          "\nHave garage? " + properties[i].garage
        )
      }
      break
    case "3":
      alert("Closing the program...")
      break
    default:
      alert("invalid option!")
  }
}while(option !== "3")