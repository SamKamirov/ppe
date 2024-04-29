const getSizesReportQuery = () => ('select personell_number, first_name, middle_name, last_name, clothes_size, shoe_size, headwear_size, employee.gas_mask_size, ' +
    'structural_units.title as structural_unit, positions.title as position from employee ' +
    'inner join structural_units on employee.structural_unit = structural_units.id ' +
    'inner join positions on employee.position = positions.id; ');

// const getRulesCheckReportData = () => ();

module.exports = { getSizesReportQuery };