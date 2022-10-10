export const winner = (currentHistory) => {
  let X = [];
  let O = [];
  for (const element of currentHistory) {
    switch (element.currentInfo) {
      case "X":
        X.push(element.currentPosition);
        break;
      case "O":
        O.push(element.currentPosition);
        break;
      default:
    }
  }
  if (
    (X.includes(0) && X.includes(1) && X.includes(2)) ||
    (X.includes(3) && X.includes(4) && X.includes(5)) ||
    (X.includes(6) && X.includes(7) && X.includes(8)) ||
    (X.includes(0) && X.includes(3) && X.includes(6)) ||
    (X.includes(1) && X.includes(4) && X.includes(7)) ||
    (X.includes(2) && X.includes(5) && X.includes(8)) ||
    (X.includes(0) && X.includes(4) && X.includes(8)) ||
    (X.includes(2) && X.includes(4) && X.includes(6))
  ) {
    return {
      result: true,
      winner: "X wins",
    };
  }
  if (
    (O.includes(0) && O.includes(1) && O.includes(2)) ||
    (O.includes(3) && O.includes(4) && O.includes(5)) ||
    (O.includes(6) && O.includes(7) && O.includes(8)) ||
    (O.includes(0) && O.includes(3) && O.includes(6)) ||
    (O.includes(1) && O.includes(4) && O.includes(7)) ||
    (O.includes(2) && O.includes(5) && O.includes(8)) ||
    (O.includes(0) && O.includes(4) && O.includes(8)) ||
    (O.includes(2) && O.includes(4) && O.includes(6))
  ) {
    return {
      result: true,
      winner: "O wins",
    };
  }
  if (X.length + O.length === 9) {
    return {
      result: true,
      winner: "Dogfall!",
    };
  } else {
    return {
      result: false,
      winner: "",
    };
  }
};
