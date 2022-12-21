const numberToReversedDigits = (number) => {
  const str = number.toString();
  const strArray = str.split('');
  const revArray = strArray.reverse();
  const outArray = revArray.map(t => { return parseInt(t);});
  return outArray;
};

module.exports = numberToReversedDigits;