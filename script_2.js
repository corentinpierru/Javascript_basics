inputNumber = prompt("De quel nombre veux tu calculer le factoriel ?");
function factoriel(input) {
  let result = input
  for(let count = input; count > 1; count--) {
     result = result * (count - 1)
  }
  return result
}
console.log("Le résultat de factoriel de " + inputNumber + " est " + factoriel(inputNumber))