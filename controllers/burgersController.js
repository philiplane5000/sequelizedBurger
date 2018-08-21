const db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Burger.findAll({})
            .then(function (data) {
                let handlebarsObj = {
                    burgers: data
                }
                res.render("index", handlebarsObj);
            });
    });

    app.post("/add/burger", function (req, res) {
        db.Burger.create({ burger_name: req.body.burger_name }).then(function (result) {
            res.status(200);
            res.json({ id: result.id });
        })
    })

    app.put("/update/burger", function (req, res) {
        db.Burger.update({devoured: true}, {
            where: {
                id: req.body.id
            }
        })
        .then(function(result) {
            res.status(200);
            res.json({ id: result.id });
        })

    });




}

