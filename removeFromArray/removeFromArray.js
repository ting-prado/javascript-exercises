const removeFromArray = function (anArray, ...toRemove) {
  for (let i = 0; i < toRemove.length; i++) {
    for (let j = 0; j < anArray.length; j++) {
      if (toRemove[i] === anArray[j]) {
        const index = anArray.indexOf(toRemove[i]);
        anArray.splice(index, 1);
      } else continue;
    }
  }
  return anArray;
};

module.exports = removeFromArray;
