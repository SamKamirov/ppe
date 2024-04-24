const asyncWrapper = require("../async");
const connection = require("../connection");
const { isValidPPE } = require("../utils/utils");
const { insertPPEQuery, getPPEQuery, deletePPEQuery, insertUsingAct } = require('./queries/ppes');
const { pool } = connection;

const getPPEs = asyncWrapper(async (req, res) => {
  const response = await pool.query("select * from ppe_list");
  res.status(200).json(response.rows);
})

const insertPPE = asyncWrapper(async (req, res) => {
  const body = req.body;

  if (!isValidPPE(body)) {
    res.status(400).json({ message: "Ошибка! Проверьте правильность введённых данных" });
    return
  }

  const response = await pool.query(insertPPEQuery(body));
  res.status(201).json({ message: 'Успешно добавлено!' });
});

const getPPE = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(getPPEQuery(id));
  res.status(200).json(response.rows[0]);
})

const deletePPE = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(deletePPEQuery(id));
  res.status(200).json(response);
})

const insertPPEUsingAct = asyncWrapper(async (req, res) => {
  const body = req.body;
  const response = await pool.query(insertUsingAct(body))
  res.status(201).json(response);
})

const getActs = asyncWrapper(async (req, res) => {
  const response = await pool.query('select * from ppe_using')
  res.status(201).json(response.rows);
})

module.exports = { getPPEs, insertPPE, getPPE, deletePPE, getActs, insertPPEUsingAct };
