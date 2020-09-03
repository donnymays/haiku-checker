export default function Haiku(lines, syllables) {
  this.lines = 0;
  this.syllables = 0;
};

Haiku.prototype.changeLetters = function (str) {
  let strLowerCase = str.toLowerCase();
  let strLowerCase1 = strLowerCase.replace(/[^aeiou]/gi, "C");
  let strWithSymbols = strLowerCase1.replace(/[aeiou]/gi, "V");
  return strWithSymbols;
};

Haiku.prototype.oneVowel = function (str) {
  let counter = 0
  for (let i=0; i < str.length; i++) { 
    if (str[i] == ("V")) {
    counter  += 1;
    };
  };
  if (counter === 1 || (counter === 2 && str.match(/VV/))) {
    this.syllables = 1;
   };
  console.log(this.syllables);
  return this.syllables;
};



//if a word has one V OR two next to eachother VV then syllables = 1
// dog, cat, house, Johnny,em man u el 