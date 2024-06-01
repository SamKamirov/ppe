const isValidPPE = (rest) => {
  const {
    fullname,
    shortname,
    lifeSpan,
    sertificateId,
    unitType } = rest;

  console.log(!fullname || !shortname || !Number(sertificateId) || !(Number(lifeSpan) > 0) || !unitType)

  if (!fullname || !shortname || !Number(sertificateId) || !(Number(lifeSpan) > 0) || !unitType) {
    return false;
  };

  return true;
};

const adaptPPEToClient = (response) => {
  return {
    id: response.id,
    fullname: response.fullname,
    shortname: response.shortname,
    lifeSpan: response.lifespan,
    sertificate: response.sertificate,
    frequency: response.frequency,
    toBeReturned: response.to_be_returned,
    isKit: response.is_kit,
    sizeType: response.size_type,
    unitType: response.unit_type
  }
};

const adaptSizeReportToClient = (response) => {
  return {
    firstName: response.first_name,
    middleName: response.middle_name,
    lastName: response.last_name,
    personellNumber: response.personell_number,
    structuralUnit: response.structural_unit,
    position: response.position,
    clothesSize: response.clothes_size,
    shoeSize: response.shoe_size,
    headwearSize: response.headwear_size,
    gasMaskSize: response.gas_mask_size
  }
};

const adaptHeightRangeToClient = (response) => {
  return {
    id: response.id,
    minHeight: response.min_height,
    maxHeight: response.max_height,
    sex: response.sex
  }
};

const sendErrorMessage = (res, message) => {
  return res.status(400).json({ message })
};

const adaptEmployeeToClient = (response) => {
  return {
    id: response.id,
    personellNumber: response.personell_number,
    firstName: response.first_name,
    middleName: response.middle_name,
    lastName: response.last_name,
    structuralUnit: response.structural_unit,
    position: response.position,
    enterDate: response.enter_date,
    changePositionDate: response.change_position_date,
    sex: response.sex,
    height: response.height,
    clothesSize: response.clothes_size,
    shoeSize: response.shoe_size,
    headwearSize: response.headwear_size,
    gasMaskSize: response.gas_mask_size
  }
};

const adaptRuleToClient = (response) => {
  return {
    firstName: response.first_name,
    middleName: response.middle_name,
    lastName: response.last_name,
    structuralUnit: response.structural_unit,
    position: response.position,
    fullname: response.fullname,
  }
}

const isValidRuleData = (body) => body.ppe && body.period && body.amount && body.dateStart && body.dateEnd && body.employee && body.sertificate;

const adaptSizesTypesToClient = (response) => {
  return {
    id: response.id,
    chestSize: response.chest_size,
    waistSize: response.waist_size,
    neckSize: response.neck_size,
    letterReference: response.letter_reference,
    localSize: response.local_size,
    chestInterval: response.chest_interval,
    waistInterval: response.waist_interval,
    type: response.type
  }
};

const adaptSizeRangeToClient = (response) => {
  return {
    id: response.id,
    chestSize: response.chest_size,
    waistSize: response.waist_size,
    newckSize: response.neck_size,
    letterReference: response.letter_reference,
    localSize: response.local_size,
    chestInterval: response.chest_interval,
    waistSize: response.waist_interval,
    sizeType: response.size_type
  }
};

module.exports = {
  isValidPPE,
  adaptPPEToClient,
  adaptSizeReportToClient,
  adaptHeightRangeToClient,
  sendErrorMessage,
  adaptEmployeeToClient,
  isValidRuleData,
  adaptRuleToClient,
  adaptSizesTypesToClient,
  adaptSizeRangeToClient
};
