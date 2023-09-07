const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        unqiue: true

    }
})

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;