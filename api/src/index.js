const express = require('express');
const { port, host, db, authApiUrl } = require('./configuration');
const { connectDb } = require('./helpers/db');
const axios = require('axios');


const app = express();



app.get('/test', (req, res) => {
  res.send('API server is OK');
});

app.get("/testwithcurrentuser", (req, res) => {
  axios.get(authApiUrl + "/currentUser").then(response => {
    res.json({
      testwithcurrentuser: true,
      currentUserFromAuth: response.data
    });
  });
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`started API service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`DB url is ${db}`);
    console.log(`auth url is ${authApiUrl}`);
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);