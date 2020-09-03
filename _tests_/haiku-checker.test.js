import Haiku from "./../src/haiku-checker.js"

describe("Haiku", () => {
  test("should create an array from a string replacing vowels with V and consonants with C", () => {
    const haiku = new Haiku(); 
    expect(haiku.changeLetters("dog")).toEqual("CVC");
  });
  test("should return number of syllables based on number of Vs in a string", () => {
    const haiku = new Haiku();
    expect(haiku.oneVowel("CVV")).toEqual(1);
  })
});