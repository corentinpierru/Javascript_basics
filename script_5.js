const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function rentedAtLeastOnce(array) {
  for(let index in array) {
    if (array[index].rented === 0) 
    return false
  }
  return true
}

var counter = 0
function rentedTheMost(a, b) {
  
  const rentedA = a.rented
  const rentedB = b.rented
  let comparison = 0
  
  if (rentedA < rentedB) {
    comparison = -1
  }
  else if (rentedA > rentedB) {
    comparison = 1
  }

  /* Si tu veux comprendre le principe de cette fonction tu peux décommenter ce qu'il y en dessous. Globalement on compare chaque chiffre entre eux et on les trie, si c'est 1 qui ressort alors a est plus grand que b et il va donc ressortir après dans le tableau grâce au "sort"
  counter++
  console.log("$$$ tour n°" + counter + " $$$")
  console.log("$$$ " + rentedA + " $$$")
  console.log("$$$ " + rentedB + " $$$")
  console.log("$$$ " + comparison + " $$$")
  */
  return comparison
}

function findId(array, id) {
  for(let index in array) {
    if(array[index].id === id)
    return array[index].title
  }
}

function deleteId(array, id) {
  for(let index in array) {
    if(array[index].id === id)
    array.splice(index, 1)
  }
}

function compare(a, b) {
  const titleA = a.title
  const titleB = b.title

  let comparison = 0;
  if (titleA > titleB) {
    comparison = 1
  } else if (titleA < titleB) {
    comparison = -1
  }
  return comparison
}

console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?")
console.log("réponse : " + rentedAtLeastOnce(books))

console.log("quel est le livre le plus emprunté")
// (books.length -1) est le dernier élément de l'array que j'ai trié grâce au sort.
console.log("Voici le livre le plus emprunté : " + books.sort(rentedTheMost)[books.length -1].title + "-  il a été loué : " + books.sort(rentedTheMost)[books.length -1].rented + "fois")
console.log("Voici le livre le moins emprunté : " + books.sort(rentedTheMost)[0].title + "-  il a été loué : " + books.sort(rentedTheMost)[0].rented + "fois")
console.log("voici le livre avec l'id n° 873495 :" + findId(books, 873495))
console.log("Supprime l'id 133712, Voici le nouvel array :")
deleteId(books, 133712)
console.log(books)
console.log("Voici l'array trié par ordre alphabétique")
console.log(books.sort(compare))