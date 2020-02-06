const express = require("express");
const router = express.Router();
const users = require("../models/Users");
const uuid = require("uuid/v4");

// get all users
router.get("/", (req, res) => {
  return res.json(users);
});

// create user
router.post("/", (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res
      .status(400)
      .json({ message: "Please enter both a name and an email" });
  }
  const newUser = {};
  newUser.id = uuid();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  users.push(newUser);
  return res.json(req.body);
});

// get user by id
router.get("/:id", (req, res) => {
  const userExists = res.json(
    users.filter(user => user.id === parseInt(req.params.id))
  );
  if (userExists.length !== 0) {
    return res.status(200).json(userExists[0]);
  } else {
    return res
      .status(400)
      .json({ message: `User with id: ${req.params.id} does not exist.` });
  }
});

module.exports = router;
