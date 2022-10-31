const joi = require('joi')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {JWT_SECRET}  = process.env;

const validateBody = (body) => {

    joi.object({
        username: joi.string().min(5).alphanum().required().messages({
          'string.min': '"username" length must be 5 characters long',
          'string.required': '"username" is required',
        }),
        password: joi.string().min(5).required().messages({
          'string.min': '"password" length must be 5 characters long',
          'string.required': '"password" is required',
        }),
      }).validate(body);
}

const validates = async (req, res, next) => {
    console.log('aki', JWT_SECRET);
    const error  = validateBody(req.body);
  console.log('error',error);
    /* Caso ocorra erro na validação do Joi, passamos esse */
    /* erro para o express, que chamará nosso middleware de erro */
    if (error) return next(error);

    const payload = {
        username: req.body.username,
        admin: false,
      }

      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
        algorithm: 'HS256',
      });


      res.status(200).json({ token });
  };

  module.exports = validates
