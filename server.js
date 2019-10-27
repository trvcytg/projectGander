const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
let path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App is listening on PORT:", PORT);
});
