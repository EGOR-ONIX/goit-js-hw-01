const getElementWidth = function (content, padding, border) {
  // box-sizing: border-box;
  return parseFloat(content) + 2 * (parseFloat(padding) + parseFloat(border));
};

//? ==============================================================================

// const getElementWidth = function (content, padding, border) {
//   // box-sizing: border-box;
//   const numericalContent = parseFloat(content);
//   const numericalPadding = parseFloat(padding);
//   const numericalBorder = parseFloat(border);

//   return numericalContent + 2 * (numericalPadding + numericalBorder);
// };

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
