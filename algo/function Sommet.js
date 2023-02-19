function Sommet(tableau) {
  // Ecrivez votre code ici
  let result = 0;
  for (let i = 1; i < tableau.length - 1; i++) {
    // const element = tableau[i];
    // console.log(tableau[i - 1], tableau[i], tableau[i + 1]);
    if (tableau[i] > tableau[i - 1] && tableau[i] > tableau[i + 1]) {
      result++;
    }
  }
  if (tableau[0] > tableau[1]) {
    result++;
  }
  if (tableau[tableau.length - 1] > tableau[tableau.length - 2]){
      result++;
  }
  return result;
}

console.log(Sommet([1, 3, 2, 10, 12]));
console.log(Sommet([12, 41, 11, 45, 26, 49, 13, 11, 457, 123]));
