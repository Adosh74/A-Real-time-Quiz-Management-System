const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () => {

    mongoose
    .connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Failed connection to database")
        console.log(error);
        process.exit(1);
    })

}