const express = require("express");
const app = express();
const cors = require('cors')
const PORT = 3001;

app.get("/api", cors(), function(req, res) {
  res.json({ message: "hello there" });
});

app.listen(PORT, function() {
  console.log(`Magic happens at PORT ${PORT}`);
});
