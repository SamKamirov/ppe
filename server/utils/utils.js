const isValidPPE = (rest) => {
  const { fullname, shortname, sertificateId, startDate, endDate, unitType } =
    rest;

  if (
    fullname &&
    shortname &&
    sertificateId &&
    startDate &&
    endDate &&
    unitType
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isValidPPE };
