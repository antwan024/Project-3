var db = require("../models");
var path = require("path");

module.exports = function (app) {
  //*************HOME PAGE***********/
  // Load home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    //res.render("login");
  });
  app.get("/js/home.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/home.js"));
    // res.render("addtask");
  });

  app.get("/img/ADDPICNAME.png/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/img/CHANGEDIRNAME.png"));
    //res.render("signup");
  });

  app.get("/styles/styles.css/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/styles/styles.css"));
    //res.render("signup");
  });

  app.get("/page.json/", function (req, res) {   // add page or screen name tto update
    res.sendFile(path.join(__dirname, "../public/page.json"));
    //res.render("signup");
  });

  //*************SIGNUP PAGE***********/
  // Load signup page
  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    //res.render("signup");
  });
  app.get("/js/signup.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/signup.js"));
    // res.render("addtask");
  });

  //*************ADD TASK***********/
  // Load add task page
  app.get("/add/task", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/addtask.html")); // change task to what team names pages or screens 
    // res.render("addtask");
  });
  app.get("/js/addtask.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/addtask.js"));
    // res.render("addtask");
  });

  //*************ADD USER***********/
  //Load add user page
  app.get("/add/user", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/adduser.html"));
  });
  app.get("/js/adduser.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/adduser.js"));
    // res.render("addtask");
  });

  //*************EDIT TASK***********/
  app.get("/edit/task/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/edittask.html"));
    //res.render("edittask");
  });
  app.get("/js/edittask.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/edittask.js"));
    // res.render("addtask");
  });

  //*************EDIT USER***********/
  //To load edit user page
  app.get("/edit/user/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/edituser.html"));
    //res.render("edittask");
  });

  app.get("/js/edituser.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/edituser.js"));
    // res.render("addtask");
  });

  //TODO: Take a harder look at these 2 edit task pages  they both go to edittask handlebars
  //Load the addtask page with datapopulated so the user can edit
  // app.get("/edit/task/:taskid", function (req, res) {

  //   res.render("addtask");
  // });

  //*************LIST TASKS***********/
  //Load list all tasks page
  app.get("/list/task", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/listtask.html"));
    //res.render("listtask");
  });
  app.get("/js/listtask.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/listtask.js"));
    // res.render("addtask");
  });

  //*************LIST USERS***********/
  app.get("/list/user", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/listuser.html"));
    //res.render("listtask");
  });
  app.get("/js/listuser.js/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/listuser.js"));
    // res.render("addtask");
  });

  // Render 404 page for any unmatched routes

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });


  app.get('/api/defined/', (req, res) => {

    db.DefinedTask.findAll({})
      .then((dbDefinedTask) => {
        res.json(dbDefinedTask);
      });
  });

};