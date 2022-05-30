const AsciiArt = require('./AsciiArt');

test('outputs the correct string', () => {
  expect(AsciiArt(1,1,"A1B2C3D4E5F",alphabet1)).toBe(answer1);
});

const alphabet1 = 
["ABCDEFGHIJKLMNOPQRSTUVWXYZ "];

const answer1 = 
["A B C D E F"].join("\n");