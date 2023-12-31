const UserModel = require("../model/user.model.js")

// to register user

exports.registerUser = async(req, res) => {
    const { name, email, password } = req.body;
    try {
        await UserModel.create({ name, email, password })
        res.status(200).send({ msg: "User Registered Successfully" })

    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
}

// To login user

exports.loginUser = async(req, res) => {
    const { email, password } = req.body;
    try {
        const userData = await UserModel.findOne({ email });
        if (userData) {
            if (userData.password == password) {
                res.status(200).send({ msg: "User Login Successfully, Enjoy " })

            } else {
                res.status(400).send({ msg: "You have Entered Wrong Pssword" })
            }
        } else {
            res.status(404).send({ msg: "No Account Find associated to this email" })
        }
    } catch (error) {
        res.status(501).send({ msg: error.message })
    }
}