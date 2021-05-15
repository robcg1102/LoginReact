const User = require("../models/User");

const controller = {
  signup: async (req, res) => {
    const user = await User.register({ ...req.body }, req.body.password).catch(
      (err) => {
        if (err.name === "UserExistsError") {
          return res.status(500).json({ err });
        }
      }
    );
    return res.status(201).json({ user });
  },

  login: (req, res) => {
    res.status(200).json({ user: req.user });
  },

  getUser: async (req, res, next) => {
    const user = await User.findById(req.user._id);
    res.status(200).json({ user });
  },

  logout: (req, res, next) => {
    if (req.isAuthenticated()) {
      req.logout();
      res.clearCookie("connect.sid");
      return res.status(200).json({ msg: "Logged Out" });
    }
    return res.status(200).json({ msg: "You are not in" });
  },
};

module.exports = controller;
