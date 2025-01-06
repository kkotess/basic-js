const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const istr = n.toString();
  return Math.max(
    ...istr
      .split("")
      .map((_, index) => istr.slice(0, index) + istr.slice(index + 1))
  );
}

module.exports = {
  deleteDigit,
};
