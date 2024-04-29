const express = require("express");
const cors = require("cors");
const ppes = require("./routes/ppes");
const sertificates = require('./routes/sertificates');
const services = require('./routes/services');
const reports = require('./routes/reports');

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/ppes", ppes);
app.use('/api/v1/sertificates', sertificates);
app.use('/api/v1/reports', reports)
app.use('/api/v1/services', services)

app.listen(3000, () => console.log("from server"));