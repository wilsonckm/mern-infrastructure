const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/api/users");

//app paths start with '/api/users'

//POST /api/users(create a user - sign up)
router.post("/", usersCtrl.create);

module.exports = router;
