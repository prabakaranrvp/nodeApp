

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', function(req, res) {
  res.send('Welocome to the test App');
})

app.listen(80, function() {
  console.log("Started Server on http://localhost:80/")
});
