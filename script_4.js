const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function filter70(array) {
  for(let index in array) {
    if(array[index].year >= 1970 && array[index].year < 1980) {
      console.log(array[index]);
    }
  }
};

function firstAndLast(array) {
  let arrayFirst = []
  arrayLast = []
  let arrayFirstAndLast = []
  for(let index in array) {
    arrayFirst.push(array[index].first);
    arrayLast.push(array[index].last);
    arrayFirstAndLast.push(array[index].first, array[index].last)
  }
  console.log("Voici tous les prénoms :" + arrayFirst);
  console.log("Voici tous les noms :" + arrayLast)
  console.log("Voici un array avec les deux combinés" + arrayFirstAndLast)
};

function agesOfEntrepreneur(array) {
  for(let index in array) {
    array[index].age = 2020 - array[index].year;
  }
  console.log(array)
}

// https://blog.arcoptimizer.com/comment-trier-un-tableau-dobjets-en-javascript

function compare(a, b) {
  const nameA = a.last
  const nameB = b.last

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1
  } else if (nameA < nameB) {
    comparison = -1
  }
  return comparison
}


console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
console.log("Voici les entrepreneurs nés dans les années 1970");
filter70(entrepreneurs);

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs ;");
firstAndLast(entrepreneurs);

console.log("Sors l'age des entrepreneurs");
console.log("Voici l'array avec l'âge ajouté :")
agesOfEntrepreneur(entrepreneurs);


console.log("tri par ordre alphabétique")
console.log(entrepreneurs.sort(compare));