comparaion = function compareSets(set1, set2) {
  const distinctSet = new Set([...set1, ...set2]);
  return distinctSet;
};

module.exports = {
  comparaion,
};
