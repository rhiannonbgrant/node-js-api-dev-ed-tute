const router = require("express").Router();
const verify = require("./verifyToken");

module.exports = router;

router.get("/", verify, (req, res) => {
  res.send(req.user);
});
