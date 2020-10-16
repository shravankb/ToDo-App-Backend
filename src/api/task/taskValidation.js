
const joi = require('joi');

exports.taskValidation = joi.object().keys({
    taskName : joi.string().required(),
    deadline: joi.string().required(),
    description: joi.string().required(),
    createdBy: joi.string().hex().required(),

})

exports.userIdValidation = joi.object().keys({
    userId : joi.string().hex().required()
})