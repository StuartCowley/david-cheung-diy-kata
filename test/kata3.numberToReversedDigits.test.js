const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5,4,3,2,1]);
  });

  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(102)).toStrictEqual([2,0,1]);
  });

  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(100)).toStrictEqual([0,0,1]);
  });

  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(987)).toStrictEqual([7,8,9]);
  });

});
