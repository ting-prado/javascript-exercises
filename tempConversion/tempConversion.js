const ftoc = function(tempF) {
  const tempC = ((tempF - 32) * 5/9);
  const roundedTempC = tempC.toFixed(1);
  return Number(roundedTempC);
};

const ctof = function(tempC) {
  const tempF = ((tempC * 9/5) + 32);
  const roundedTempF = tempF.toFixed(1);
  return Number(roundedTempF);
};

module.exports = {
  ftoc,
  ctof
};
