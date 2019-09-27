let increaseOrDecrease = (number = 0, obj) => {
  switch (obj.type) {
    case "+":
      return number + 1;
    case "-":
      return number - 1;
    default:
      return number;
  }
};
export default increaseOrDecrease;
