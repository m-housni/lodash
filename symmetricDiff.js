function symmetricDiff(arr1, arr2) {
  let sym = [
    ...arr1.filter((n) => !arr2.includes(n)),
    ...arr2.filter((n) => !arr1.includes(n)),
  ];
  return [...new Set(sym)];
}

export default symmetricDiff