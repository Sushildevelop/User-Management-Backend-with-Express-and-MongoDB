const mongoose = require("mongoose");

const connectToDatabase = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL)
            .then((conn) => {
                console.log("Database Connected Successfullt", conn.connection.host);
            })
    } catch (error) {
        console.log("Error While connecting to Db ", error.message);
    }
}
module.exports = connectToDatabase;