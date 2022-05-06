const User = require('../models/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.status = (req, res) => {};
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({ user: user.id });
};
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.login = (req, res) => {};
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.me = (req, res) => {};
