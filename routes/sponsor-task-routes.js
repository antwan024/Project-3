var db = require("../models");
var sequelize = require('sequelize');

module.exports = (app) => {

    //Get route here for viewing all available sponsor incentives or winnings

    app.get('/api/sponsor/', (req, res) => {

        db.SponsorTask.findAll({})
            .then((dbSponsorTask) => {
                res.json(dbSponsorTask);
            });
    });


}