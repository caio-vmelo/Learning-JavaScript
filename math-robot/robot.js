const number = prompt("Hi, I'm the math robot!\n"
+ "Tell me a number: ")

let result = ""

for(let factor = 1; factor <= 20; factor++)
{
  result += " -> " + number + " * " + factor + " = " + (number * factor) + "\n"
}

alert("Results of the math table of: " + number + ":\n\n" + result)