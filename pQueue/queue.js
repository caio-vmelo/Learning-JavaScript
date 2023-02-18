//queue program in a hospital with its due functionalities

let queue = []
let option = ""

do{
  let patients = ""

  for(let i = 0; i < queue.length; i++){
    patients += (i + 1) + "º - " + queue[i] + "\n"
  }

  option = prompt(
    "Patients: \n" + patients +
    "\nChose one action:" +
    "\n1. New Patient." +
    "\n2. Consult Patient." +
    "\n3. Exit."
  )

  switch(option){
    case "1":
      const newPatient = prompt("What is the name of the patient?")
      queue.push(newPatient)//add at the end of the queue.
      break
    case "2":
      const consultedPatient = queue.shift() //to remove patients who have already been consulted
      if(queue.length > 0){
        alert(consultedPatient + " has been removed of the queue.")
      }else{
        alert("there are no patients in the queue")
      }
      break
    case "3":
      alert("Ending...")
      break
    default:
      alert("invalid option!")  
  }
}while(option !== "3")