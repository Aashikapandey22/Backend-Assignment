const Joi = require("joi");

const teacherSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        "string.empty": "Name is required",
        "any.required": "Name is required"
    }),

    email: Joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email",
        "any.required": "Email is required"
    }),

    password: Joi.string().min(6).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters",
        "any.required": "Password is required"
    }),

    subject: Joi.string().trim().required().messages({
        "string.empty": "Subject is required",
        "any.required": "Subject is required"
    })
});

module.exports = teacherSchema;