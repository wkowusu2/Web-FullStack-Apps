const mongoose = require('mongoose') 

const databaseConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = databaseConnect;