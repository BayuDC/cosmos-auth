const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { auth } = require('./middlewares/auth');
const { port, mongouri } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use(auth);
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/web'));

mongoose.connect(mongouri).then(() => {
    app.listen(port, () => {
        console.log('Running at port', port);
    });
});
