const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/connection");
const activitiesRouter = require("./routes/activities");
const goalsRouter = require("./routes/goals");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/activities", activitiesRouter);
app.use("/api/goals", goalsRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
