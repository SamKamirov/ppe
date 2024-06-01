const express = require("express");
const cors = require("cors");
const ppes = require("./routes/ppes");
const sertificates = require('./routes/sertificates');
const services = require('./routes/services');
const reports = require('./routes/reports');
const users = require('./routes/users');
// const email = require('./routes/email');
const periods = require('./routes/periods');
const sizes = require('./routes/sizes');
const employees = require('./routes/employee');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/v1/ppes', ppes);
app.use('/api/v1/sertificates', sertificates);
app.use('/api/v1/reports', reports)
app.use('/api/v1/services', services)
app.use('/api/v1/login', users);
app.use('/api/v1/periods', periods);
app.use('/api/v1/sizes', sizes);
app.use('/api/v1/employee', employees);
// app.use('/api/v1/email', email);

app.listen(PORT, () => console.log(`Server is listening from port ${PORT}`));