const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Welcome to SIT737 - Creating a Kubernetes Cluster for a containerized application"
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
