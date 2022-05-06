const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
}).options({
    abortEarly: false,
    stripUnknown: true,
    errors: { wrap: { label: ':' } },
});

schema.format = error => {
    return error.details.reduce((object, error) => {
        const patern = /\:.+\:/;
        const [match] = error.message.match(patern) || [];
        const message = match ? error.message.replace(patern, match.replaceAll(':', '')) : error.message;

        object[error.path[0]] = message[0].toUpperCase() + message.slice(1);
        return object;
    }, {});
};

module.exports = schema;
