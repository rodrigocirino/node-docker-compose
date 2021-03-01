const router = require("express").Router();

//hello
const helloRoute = require("./hello");
router.use("/hello", helloRoute);

module.exports = router;
