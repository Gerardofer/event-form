const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({ name: "Gerardo Fernandez" });
});

app.listen(PORT, () => {
  console.log("Port listening on", PORT);
});
