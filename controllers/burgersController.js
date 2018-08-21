const db = require("../models");

module.exports = function (app) {

    let handlebarsObj = {};

    app.get("/", function (req, res) {

        db.Burger.findAll({})
            .then(function (data) {
                handlebarsObj.burgers = data;
            });
        db.Customer.findAll({})
            .then(function (data) {
                handlebarsObj.customers = data;
                console.log("HandlebarsObject: " + JSON.stringify(handlebarsObj, undefined, 2));
                res.render("index", handlebarsObj)
            })
    })

    app.post("/add/burger", function (req, res) {
        db.Burger.create({ burger_name: req.body.burger_name }).then(function (result) {
            res.status(200);
            res.json({ id: result.id });
        })

    })

    app.put("/update/burger", function (req, res) {
        db.Burger.update({ devoured: true }, {
            where: {
                id: req.body.id
            }
        })
            .then(function (result) {
                res.status(200);
                res.json({ id: result.id });
            })

        db.Customer.create({ name: req.body.customer_name, BurgerId: req.body.id }).then(function (result) {
            res.status(200);
        })

    });

}

