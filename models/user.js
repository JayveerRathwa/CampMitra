const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { required } = require('joi');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema);