const mongoose = require('../config/mongoDB');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

UserSchema.pre('save', async function (next) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
});


const User = mongoose.model('User', UserSchema);
module.exports = User;