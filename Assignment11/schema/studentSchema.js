const Joi = require("joi");

const studentSchema = Joi.object({
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

    course: Joi.string().trim().required().messages({
        "string.empty": "Course is required",
        "any.required": "Course is required"
    }),

    age: Joi.number().integer().min(1).max(100).required().messages({
        "number.base": "Age must be a number",
        "number.min": "Age must be at least 1",
        "number.max": "Age must not exceed 100",
        "any.required": "Age is required"
    })
});

module.exports = studentSchema;