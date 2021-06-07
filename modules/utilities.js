const formatNumber = (number) => {
  // number to array
  // slice array for anything after and including "."
  let newArr = Array.from(number.toString());
  let formattedNumber = newArr.includes(".")
    ? newArr.slice(0, newArr.indexOf("."))
    : newArr;
  let change;
  formattedNumber.reverse();

  // loop from the end of mutated array +=3 and insert ","
  for (let i = 3; i < formattedNumber.length; i += 4) {
    formattedNumber.splice(i, 0, ",");
  }

  // join arrays, return string number

  return formattedNumber.reverse().join("");
};

export { formatNumber };
