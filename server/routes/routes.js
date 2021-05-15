const router = require("express").Router()
const passport = require("passport")

const controller = require("../controllers/controller.js")

router.post("/signup", controller.signup)
router.post("/login", passport.authenticate('local'), controller.login)
router.get("/profile", controller.getUser);
router.get("/logout", controller.logout)

module.exports = router