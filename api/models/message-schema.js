const Joi = require('joi');
const users = require('../files/users');

const messageSchema = Joi.object().options({ abortEarly: false }).keys({
  user_list: Joi.array().min(1).items(Joi.object().keys({
    id: Joi.number().valid(users.map(user => user.id)).required(),
  })).required(),
  name: Joi.string().min(1).max(50).required(),
  message: Joi.string().min(1).max(1000).required(),
  email: Joi.string().min(5).max(50).required(),
  country: Joi.string().required(),
  age: Joi.number().required(),
});

module.exports = messageSchema;
