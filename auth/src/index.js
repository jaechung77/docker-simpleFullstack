const express = require('express');
const { port, host, db } = require('./configuration');
const { connectDb } = require('./helpers/db');

const app = express();



app.get('/test', (req, res) => {
  res.send('Auth server is OK');
});

app.get("/api/currentUser", (req, res) => {
  res.json({
    id: "1234",
    email: "foo@gmail.com"
  });
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`started  auth service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`DB url is ${db}`);
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);