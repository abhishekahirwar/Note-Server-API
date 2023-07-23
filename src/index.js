const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://innocentboyabhi1234:bekarpasswordHaibhai@cluster1.juycsvr.mongodb.net/notesdb').then(function () {
    app.use(cors({ origin: "*" }));

    app.get('/', function (req, res) {
        const response = { message: 'API Works!' };
        res.json(response);
    });

    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);

});

// Starting the server on a PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log('Server started at PORT: ' + PORT);
});

