const mongoose = require('mongoose')
//const validator = require('validator');

const customerSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true,
        //validator: [isEmail,"כתובת האימייל אינה חוקית"]

    },
    password: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Customer', customerSchema)