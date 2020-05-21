answer = prompt("Hello, bienvenue dans la super pyramide, combien d'étage veux-tu ?");
function pyramid(input) {
  let space = " "
  let hashtag = "#"
  for(let count = 0; count <= input - 1; count++){
    console.log(space.repeat(answer-1) + hashtag)
    answer--
    hashtag = hashtag + "#"
}
}
pyramid(answer)