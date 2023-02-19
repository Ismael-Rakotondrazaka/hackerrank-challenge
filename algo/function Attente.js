function Attente(evenements) {
  // Ecrivez votre code ici
  let init = 0;
  a = [];
  a.push()

  for (let i = 0; i < evenements.length; i++) {
      const element = evenements[i];
      if (element === 1) {
          init++
      } else {
          init--
      }
      console.log(init, evenements[i]);
      if (init < 0) {
          break;
      }
  }

  return init;
}

console.log(Attente([1, 1, 1, 0, 0, 1, 1, 0, 0, 0]));
