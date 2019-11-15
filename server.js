const express = require("express");
 var path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.static("public"));

//Routes
// require("./routes/task-apiRoutes")(app);
// require("./routes/sponsor-task-routes")(app);
// require("./routes/user.apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
