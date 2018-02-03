
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

exports.encode = (value) => {
  if (value === 0) {
    return 'a';
  }

  let result = [];
  let base = alphabet.length;

  for (;value>0; value = Math.floor(value/base)) {
    result = result.concat([alphabet[(value % base)]]);
  }

  return result.reverse().join('');
};

exports.decode = (sentence) => {
  let base = alphabet.length;

  return sentence
    .split('')
    .reduce((memo, letter) => {
      pos = alphabet.indexOf(letter)
      return memo * base + pos;
    }, 0);
};
