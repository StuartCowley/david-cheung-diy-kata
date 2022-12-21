const humanCatDogYears = (number) => {

  //let catYears = (number === 1) ?? 15 : ((number === 2) ?? 24 : 24 + ( 4 * (number - 2)));
  //let dogYears = (number === 1) ?? 15 : ((number === 2) ?? 24 : 24 + ( 5 * (number - 2)));

  let catYears = 0;
  let dogYears = 0;

  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (number === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + ( 4 * (number - 2));
    dogYears = 24 + ( 5 * (number - 2));
  }
    
  return [number,catYears,dogYears];

};

module.exports = humanCatDogYears;