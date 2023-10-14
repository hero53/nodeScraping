comparaion = function compareSets(set1, set2) {
  const distinctSet = new Set([...set1, ...set2]);
  return distinctSet;
};

isURL = function isURL(str) {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
  return urlPattern.test(str);
}

module.exports = {
  comparaion,
  isURL
};
