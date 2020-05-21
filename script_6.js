var arn = 'CCGUCGUUGCGCUACAGC';
var arn2 = 'CCUCGCCGGUACUUCUCG';

function split3char(string) {
  return string.match(/.{1,3}/g);
}
function codonToProt(array) {
  for(let index in array) {
    if(array[index] === "UCU" || array[index] === "UCC" || array[index] === "UCG" || array[index] === "AGC") {
      array[index] = "Sérine"
    }else if(array[index] === "CCU" || array[index] === "CCC" || array[index] === "CCA" || array[index] === "CCG") {
      array[index] = "Proline"
    }else if(array[index] === "UUA" || array[index] === "UUG" ) {
      array[index] = "Leucine"
    }else if(array[index] === "UUU" || array[index] === "UUC" ) {
      array[index] = "Phénylalanine"
    }else if(array[index] === "CGU" || array[index] === "CGC" || array[index] === "CGA" || array[index] === "CGG" || array[index] === "AGA" || array[index] === "AGG") {
      array[index] = "Arginine"
    }else if(array[index] === "UAU" || array[index] === "UAC" ) {
    array[index] = "Tyrosine"
  }
}
  return console.log(array.join(" "));
}


  array_codon = split3char(arn)
  codonToProt(array_codon)
  array_codon2 = split3char(arn2)
  codonToProt(array_codon2)

