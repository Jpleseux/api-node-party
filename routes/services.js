const serviceController = require("../controllers/ServiceController"
)
const router = require("express").Router()

router.route("/services").post((req, res)=>serviceController.create(req, res))

module.exports= router;
