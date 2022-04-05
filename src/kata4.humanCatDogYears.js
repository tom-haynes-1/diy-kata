const humanCatDogYears = humanYears => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i += 1) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};

module.exports = humanCatDogYears;
