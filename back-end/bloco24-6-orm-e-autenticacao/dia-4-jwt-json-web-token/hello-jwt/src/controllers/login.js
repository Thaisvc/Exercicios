const joi = require('joi')

const validateBody = (body) => {

    joi.object({
        username: Joi.string().min(5).alphanum().required().messages({
          'string.min': '"username" length must be 5 characters long',
          'string.required': '"username" is required',
        }),
        password: Joi.string().min(5).required().messages({
          'string.min': '"password" length must be 5 characters long',
          'string.required': '"password" is required',
        }),
      }).validate(body);
}

module.exports = async (req, res, next) => {
    const { error } = validateBody(req.body);
  
    /* Caso ocorra erro na validação do Joi, passamos esse */
    /* erro para o express, que chamará nosso middleware de erro */
    if (error) return next(error);
  };