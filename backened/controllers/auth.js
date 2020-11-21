const mongoose = require("mongoose");
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const {
  loginValidation,
  registerValidation,
} = require("../Validations/Validations");

const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExists = await Admin.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedAdmin = await admin.save();
    res.send(savedAdmin);
  } catch (err) {
    res.status(400).send(err);
  }
};

const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) {
    return res.status(400).send("Email or Password is incorrect");
  }

  const validPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!validPassword) {
    return res.status(400).send("Invalid Password");
  } else {
    return res.send(admin);
  }
};
module.exports = {
  register,
  login,
};

