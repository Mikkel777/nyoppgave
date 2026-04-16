const express = require("express");
const router = express.Router();
const foxController = require("../controllers/foxController");

router.get("/", foxController.getHome);
router.post("/vote", foxController.voteFox);

router.get("/statistikk", (req, res) => {
    res.render("statistikk");
});

module.exports = router;