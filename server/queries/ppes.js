const connection = require("../connection");
const { isValidPPE } = require("../utils/utils");

const { pool } = connection;

const getPPEs = (req, res) => {
  console.log("from getPPEs");
  pool.query("select * from ppe_list", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const insertPPE = (req, res) => {
  const body = req.body;
  const {
    fullname,
    shortname,
    sertificateId,
    startDate,
    endDate,
    toBeReturned,
    isKit,
    sizeType,
    unitType,
  } = body;

  if (isValidPPE(body)) {
    try {
      pool.query(`INSERT INTO ppe_list(fullname, shortname, sertificateid, startdate, enddate, tobereturned, iskit, sizetype, unittype) values
  ('${fullname}', '${shortname}', ${sertificateId}, '${startDate}', '${endDate}', ${Boolean(toBeReturned)}, ${Boolean(isKit)}, ${Number(sizeType)}, '${unitType}');`);
      res.status(201).json({ message: "Успешно добавлено" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res
      .status(500)
      .json({ message: "Ошибка! Проверьте правильность введённых данных" });
  }
};

const getPPE = (req, res) => {
  const id = req.params.id;
  console.log(id);
};

module.exports = { getPPEs, insertPPE, getPPE };
