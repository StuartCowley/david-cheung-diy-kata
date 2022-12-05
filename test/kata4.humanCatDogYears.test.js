const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  it(" return an array of three numbers Human, Cat & Dog years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
  });

});