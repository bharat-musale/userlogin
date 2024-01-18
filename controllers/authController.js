const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.getRegister = (req, res) => {
  res.render('register.ejs');
};

exports.postRegister = async (req, res) => {
  // Handle user registration
};

exports.getLogin = (req, res) => {
  res.render('login.ejs');
};

exports.postLogin = async (req, res) => {
  // Handle user login
};

exports.logout = (req, res) => {
  // Handle user logout
};

exports.dashboard = (req, res) => {
  res.render('dashboard.ejs', { user: req.session.user });
};
