

const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send(
  '<html>' +
    '<head><title>NodeApp</title>' +
    '<body>Welocome to the test App!</body>' +
  '</html>');
})

app.listen(port, function() {
  console.log("Started Server on http://localhost:" + port + "/");
});
