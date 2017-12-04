

const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('Welocome to the test App!');
})

app.listen(port, function() {
  console.log("Started Server on http://localhost:" + port + "/");
});
