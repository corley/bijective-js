const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
const alphabet_with_zero = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

exports.encode = value => {
  if (value === 0) {
    return "a";
  }

  let result = [];
  let base = alphabet.length;

  for (; value > 0; value = Math.floor(value / base)) {
    result = result.concat([alphabet[value % base]]);
  }

  return result.reverse().join("");
};

exports.decode = sentence => {
  let base = sentence.length <= 3 ? alphabet_with_zero.length : alphabet.length;

  return sentence.split("").reduce((memo, letter) => {
    pos = sentence.length <= 3 ? alphabet_with_zero.indexOf(letter) : alphabet.indexOf(letter);
    return memo * base + pos;
  }, 0);
};
