const express = require("express");
const cors = require("cors");
const ppes_route = require("./routes/ppe-routes");
const sertificates = require('./routes/sertificates');
const sizes = require('./routes/sizes');

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/ppes", ppes_route);
app.use('/api/v1/sertificates', sertificates);
app.use('/api/sizes', sizes);

app.listen(3000, () => console.log("from server"));