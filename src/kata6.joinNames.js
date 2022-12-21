const joinNames = (namesObj) => {
  let returnStr = '';
  let lastIndex = namesObj.length - 1;
  namesObj.forEach( (item, index) => {

    if (index === lastIndex) {
      returnStr += ' & ';
    } else if (index > 0) {
      returnStr += ', ';
    }
    returnStr += item.name;
  });
  return returnStr;
};

module.exports = joinNames;
