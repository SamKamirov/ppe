const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { getEmployeesQuery } = require("../queries/employee");
const { adaptEmployeeToClient } = require("../utils/utils");

const isValidEmployee = (employee) => {
    const { personellNumber, middleName, lastName, structuralUnit, position,
        enterDate, sex, height, clothesSize, shoeSize, headwearSize, gasMaskSize } = employee;

    return Boolean(Number(personellNumber)) && middleName.length > 0 && lastName.length > 0 && Boolean(Number(structuralUnit)) && Boolean(Number(position)) &&
        enterDate && sex && Boolean(Number(height)) && clothesSize && Boolean(Number(shoeSize)) && Boolean(Number(headwearSize)) && Boolean(Number(gasMaskSize))
}

const getEmployees = asyncWrapper(async (req, res) => {
    const response = await pool.query(getEmployeesQuery);
    const adapted = response.rows ? response.rows.map(adaptEmployeeToClient) : null;
    res.status(200).json([...adapted]);
});

const insertEmployee = asyncWrapper(async (req, res) => {
    const body = req.body;
    const { personellNumber, firstName, middleName, lastName, structuralUnit, position,
        enterDate, changePositionDate, sex, height, clothesSize, shoeSize, headwearSize, gasMaskSize } = body;

    if (isValidEmployee(body)) {
        const response = await pool.query(`insert into employee(personell_number, first_name, middle_name, last_name, structural_unit, "position", enter_date, change_position_date, sex, height, clothes_size, shoe_size, headwear_size, gas_mask_size) values 
        (${Number(personellNumber)}, '${firstName}', '${middleName}', '${lastName}', ${Number(structuralUnit)}, ${Number(position)}, '${enterDate}',
        '${changePositionDate}', '${sex}', ${Number(height)}, '${clothesSize}', ${Number(shoeSize)}, ${Number(headwearSize)},
        '${gasMaskSize}')`);

        res.status(200).json({ message: 'Succes' })
        return
    }

    res.status(400).json({ message: 'Ошибка. Не все поля заполнены верно' })
});

module.exports = {
    getEmployees,
    insertEmployee
};