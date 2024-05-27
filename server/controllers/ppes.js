const asyncWrapper = require("../async");
const connection = require("../connection");
const { isValidPPE, adaptPPEToClient, adaptHeightRangeToClient } = require("../utils/utils");
const { insertPPEQuery, getPPEQuery, deletePPEQuery, insertUsingAct, getPPEsQuery } = require('../queries/ppes');
const { pool } = connection;

const getPPEs = asyncWrapper(async (req, res) => {
  const response = await pool.query(getPPEsQuery());
  const adaptedToClient = Array.from(response.rows, adaptPPEToClient);
  res.status(200).json(adaptedToClient);
})

const insertPPE = asyncWrapper(async (req, res) => {
  const body = req.body;

  console.log(body);

  if (isValidPPE(body)) {
    res.status(400).json({ message: "Ошибка добавления записи" });
    return
  }

  const response = await pool.query(insertPPEQuery(body));
  res.status(201).json({ message: 'Успешно добавлено!' });
});

const getPPE = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(getPPEQuery(id));
  const adaptedToClient = Array.from(response.rows, adaptPPEToClient);
  res.status(200).json(adaptedToClient[0]);
})

const deletePPE = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(deletePPEQuery(id));
  res.status(200).json(response);
})

const getHeightRanges = asyncWrapper(async (req, res) => {
  const response = await pool.query('select * from height_ranges');
  const adapted = response.rows.map((item) => adaptHeightRangeToClient(item));
  res.status(200).json(adapted);
})


module.exports = { getPPEs, insertPPE, getPPE, deletePPE, getHeightRanges };
