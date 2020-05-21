answer = prompt("Souhaite tu me parler, être humain ?");

function checkAnswer(answer) {
  if (answer.endsWith("?")){
    console.log("Ouais ouais...")
  } else if (answer === "") {
    console.log("t'es en PLS ?")
  }else if (answer === answer.toUpperCase()){
    console.log("Pwa, calme toi...")
  } else if (answer.toLowerCase().includes("fortnite")) {
    console.log("On s'fait une partie soum soum")
  } else {
    console.log("balek.")
  }
}

checkAnswer(answer)

