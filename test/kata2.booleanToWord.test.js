const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it("return word by boolean value", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  it("return word by boolean value", () => {
    expect(booleanToWord(false)).toBe("No");
  });

});
