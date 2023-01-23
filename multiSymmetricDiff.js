import symmetricDiff from "./symmetricDiff.js";

function multiSymmetricDiff(args) {
  // get the number of arguments
  let len = arguments.length;
  let arr = [];
  for (let i = 0; i + 2 <= len; i++) {
    arr = symmetricDiff(arguments[i], arguments[i + 1]);
    arguments[i + 1] = arr;
  }

  return arr;
}
