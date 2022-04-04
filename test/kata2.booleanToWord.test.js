const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'yes' if boolean value is true and returns 'no' if boolean value is false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
