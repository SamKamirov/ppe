const isValidPPE = (rest) => {
  const {
    fullname,
    shortname,
    sertificateId,
    lifeSpan,
    unitType } = rest;

  if (
    fullname &&
    shortname &&
    Number(sertificateId) &&
    lifeSpan > 0,
    unitType
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isValidPPE };
