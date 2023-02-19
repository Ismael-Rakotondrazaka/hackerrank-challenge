function Autoroute(voieA, voieB) {
  // Ecrivez votre code ici
  let isPrecedentEqual = false;
  /* for (let i = voieA.length - 1; i >= 0; i--) {
    if (voieA[i] === voieB[i] && voieA === 0) {
      if (isPrecedentEqual) {
        continue;
      } else {
      }
    }
  } */
  let result = 0;
  let lastLine = voieA[0] === 2 ? 0 : 1;
  for (let i = 0; i < voieA.length; i++) {
    const element = voieA[i];
    // console.log(element);
    if (voieA[i] === voieB[i]) {
      if (voieA === 0) {
        if (isPrecedentEqual) {
          continue;
        } else {
          isPrecedentEqual = true;
          result++;
          lastLine = 1 ? 0 : 1;
        }
      } else {
        result = -1;
        break;
      }
    } else {
      isPrecedentEqual = false;
      if (voieA[i] === 0) {
        if (lastLine === 0) {
          // continue;
        } else {
          result++;
          lastLine = 0;
        }
      } else {
        // voieB = 0
        if (lastLine === 1) {
          // continue;
        } else {
          result++;
          lastLine = 1;
        }
      }
    }
  }

  return result;
}

console.log(
  Autoroute([1, 1, 0, 0, 0, 1, 0, 1, 0, 0], [1, 1, 0, 0, 0, 1, 0, 1, 0, 0])
);
