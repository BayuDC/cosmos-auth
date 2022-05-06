const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { secret } = require('../config');

const generateToken = user => {
    const payload = { user: { id: user.id, name: user.name, email: user.email } };
    const options = { expiresIn: 24 * 60 * 60 };

    return jwt.sign(payload, secret, options);
};

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
module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const auth = await bcrypt.compare(password || '', user.password);
    if (!auth) return res.status(401).json({ error: 'Password incorrect' });

    const token = generateToken(user);
    res.status(201).json({ token });
};
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports.me = (req, res) => {};
