const express = require("express");
const port = 8000;
// const bodyParser = require("body-parser");
const app = express();

// app.get("/", function (req, res) {
//   res.send("<h1>Running</h1>");
// });

// app.use(
//   bodyParser.urlencoded({
//     // This is a middleware
//     extended: true,
//   })
// );

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("assets"));

// use express router
app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    // console.log("Error: ", err);
    console.log(`Error in running the server : ${port}`);
  }

  console.log(`Server is running on port: ${port}`);
});
