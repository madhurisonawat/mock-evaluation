const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(5).required(),
  });

  return schema.validate(data);
};

const teacherValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    age: Joi.string().min(2).required(),
    gender: Joi.string().min(4).required(),
    class: Joi.array(),
    teacher_id: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { loginValidation, registerValidation, teacherValidation };
