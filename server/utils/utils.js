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

const adaptPPEToClient = (response) => {
  return {
    id: response.id,
    fullname: response.fullname,
    shortname: response.shortname,
    sertificateId: response.sertificate,
    lifeSpan: response.lifespan,
    toBeReturned: response.to_be_returned,
    isKit: response.is_kit,
    sizeType: response.size_type,
    unitType: response.unit_type
  }
}

module.exports = { isValidPPE, adaptPPEToClient };
