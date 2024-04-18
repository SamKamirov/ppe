const express = require("express");
const cors = require("cors");
const ppes_route = require("./routes/ppe-routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", ppes_route);

app.listen(3000, () => console.log("from server"));