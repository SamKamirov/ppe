const connection = require("../connection");
const { isValidPPE } = require("../utils/utils");
const { insertPPEQuery, getPPEQuery, deletePPEQuery } = require('./queries/ppes');
const { pool } = connection;

const getPPEs = async (req, res) => {
  try {
    const response = await pool.query("select * from ppe_list");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка получения данных', error: error })
  }
};

const insertPPE = async (req, res) => {
  const body = req.body;

  if (!isValidPPE(body)) {
    res.status(400).json({ message: "Ошибка! Проверьте правильность введённых данных" });
    return
  }

  try {
    const response = await pool.query(insertPPEQuery(body));
    res.status(201).json({ message: 'Успешно добавлено!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getPPE = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await pool.query(getPPEQuery(id));
    res.status(200).json(response.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePPE = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await pool.query(deletePPEQuery(id));
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getPPEs, insertPPE, getPPE, deletePPE };
