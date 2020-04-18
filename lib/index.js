"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

const app = (0, _express.default)();
const port = 3000;
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));